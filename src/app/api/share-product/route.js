import { responseFun } from "@/Http/helper";
import { getLoginUser } from "../getLoginUser/route";
import { shareProductModal } from "@/Http/Models/associate/SharedProducts";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";

export async function POST(request) {
  await connectDb();

  const user = await getLoginUser();
  if (!user && user.program !== "2") {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }

  const user_id = user._id;
  // const refId = user.uniqueId;
  const { product_id, variant_id } = await request.json();

  try {
    const shareData = {
      associate_id: new mongoose.Types.ObjectId(user_id),
      product_id,
      variant_id,
    };
    let alreadyShare = await shareProductModal.findOne(shareData);
    if (alreadyShare) {
      alreadyShare.shareCount = alreadyShare.shareCount + 1;
      await alreadyShare.save();
    } else {
      await shareProductModal.create({
        ...shareData,
        shareCount: 1,
      });
    }

    return responseFun(true, { message: "Shared" }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}

export async function GET(request) {
  await connectDb();

  const user = await getLoginUser();
  if (!user && user.program !== "2") {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }

  const user_id = user._id;

  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 50;
  const searchText = searchParams.get("searchText") || "";
  const searchBy = searchParams.get("searchBy") || "";
  const skip = (page - 1) * limit;

  try {
    const today = new Date();
    const products = await shareProductModal.aggregate([
      {
        $match: {
          associate_id: new mongoose.Types.ObjectId(user_id),
        },
      },
      {
        $lookup: {
          from: "products",
          let: {
            productId: "$product_id",
            variantId: "$variant_id",
            totalShare: "$shareCount",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$_id", "$$productId"] },
                    { $eq: ["$save_as_draft", "0"] },
                    ...(searchText && searchBy == "name"
                      ? [
                          {
                            $regexMatch: {
                              input: "$product_name",
                              regex: searchText,
                              options: "i",
                            },
                          },
                        ]
                      : []),
                  ],
                },
              },
            },

            {
              $lookup: {
                from: "sellers",
                let: { sellerId: "$seller_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$_id", "$$sellerId"] },
                          { $eq: ["$approvalStatus", "Approved"] },
                          { $eq: ["$status", "Active"] },
                          { $eq: ["$selfActive", "Active"] },
                        ],
                      },
                    },
                  },
                ],
                as: "seller",
              },
            },
            {
              $match: {
                seller: { $ne: [] },
              },
            },

            {
              $lookup: {
                from: "orderproducts",
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$product_id", "$$productId"] },
                          { $eq: ["$variant_id", "$$variantId"] },
                          { $eq: ["$associat_id", new mongoose.Types.ObjectId(user_id)] },
                          {
                            $not: {
                              $in: ["$order_status", [5, 6, 7, 8]],
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
                as: "orders",
              },
            },

            {
              $addFields: {
                orders: { $size: "$orders" },
              },
            },

            {
              $lookup: {
                from: "productvariants",
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$product_id", "$$productId"] },
                          { $eq: ["$_id", "$$variantId"] },
                          { $eq: ["$isProcessing", "Approved"] },
                          { $eq: ["$listingStatus", 1] },
                          ...(searchText && searchBy == "sku"
                            ? [
                                {
                                  $regexMatch: {
                                    input: "$sku",
                                    regex: searchText,
                                    options: "i",
                                  },
                                },
                              ]
                            : []),
                        ],
                      },
                    },
                  },
                  {
                    $project: {
                      _id: 1,
                      sku: 1,
                      sin: 1,
                      msrp: 1,
                      consumerSalePrice: 1,
                      businessSalePrice: 1,
                      currency: 1,
                      stock: 1,
                      withImage: 1,
                      image_1: 1,
                    },
                  },
                ],
                as: "variant",
              },
            },
            {
              $unwind: {
                path: "$variant",
                preserveNullAndEmptyArrays: false,
              },
            },

            {
              $lookup: {
                from: "appliedeventproducts",
                let: { productId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [{ $eq: ["$product_id", "$$productId"] }],
                      },
                    },
                  },
                  {
                    $sort: {
                      updatedAt: -1,
                    },
                  },
                ],
                as: "appliedEvent",
              },
            },
            {
              $addFields: {
                appliedEvent: {
                  $cond: {
                    if: { $gt: [{ $size: "$appliedEvent" }, 0] },
                    then: { $arrayElemAt: ["$appliedEvent", 0] },
                    else: null,
                  },
                },
              },
            },
            {
              $lookup: {
                from: "salesevents",
                let: { eventId: "$appliedEvent.event_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$_id", "$$eventId"] },
                          { $lte: ["$startDate", today] },
                          { $gte: ["$closeDate", today] },
                          { $eq: ["$status", "Active"] },
                        ],
                      },
                    },
                  },
                  {
                    $sort: {
                      updatedAt: -1,
                    },
                  },
                ],
                as: "event",
              },
            },
            {
              $unwind: {
                path: "$event",
                preserveNullAndEmptyArrays: true,
              },
            },

            {
              $project: {
                _id: 1,
                shareCount: "$$totalShare",
                category_id: 1,
                subcategory_id: 1,
                childcategory_id: 1,
                product_name: 1,
                slug: 1,
                product_description: 1,
                main_image: 1,
                variant: 1,
                orders: 1,
                event: {
                  _id: "$event._id",
                  startDate: "$event.startDate",
                  closeDate: "$event.closeDate",
                  startTime: "$event.startTime",
                  closeTime: "$event.closeTime",
                  image: "$event.image",
                  appliedDiscount: "$appliedEvent.discount",
                },
              },
            },
          ],
          as: "product",
        },
      },
      {
        $addFields: {
          product: { $arrayElemAt: ["$product", 0] },
        },
      },
      {
        $match: {
          product: { $ne: null },
        },
      },

      {
        $sort: {
          updatedAt: -1,
        },
      },

      {
        $replaceRoot: {
          newRoot: "$product",
        },
      },

      {
        $facet: {
          data: [{ $skip: skip }, { $limit: limit }],
          totalCount: [{ $count: "count" }],
        },
      },
    ]);

    const total = products[0]?.totalCount[0]?.count || 0;
    const productData = products[0]?.data || [];

    const pagination = {
      totalCount: total,
      page: page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
    return responseFun(true, { products: productData, pagination }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
