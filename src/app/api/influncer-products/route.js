import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { influencerCampaignProductModal } from "@/Http/Models/AddModel/InfluencerCamaign";
 


export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);

    const page = searchParams.get("page") || 1;
    const searchText = searchParams.get("searchText") || "";
    const searchBy = searchParams.get("searchBy") || "";

    const limit = 50;
    const skip = (page - 1) * limit;


    const today = new Date();
    try{
        const products = await influencerCampaignProductModal.aggregate([
            {
                $lookup:{
                    from:"influencercampaigns",
                    let : {influencerCampaign_Id :"$influencerCampaignId"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        {$eq : ["$_id", "$$influencerCampaign_Id"] },
                                        {$lte : ["$startDate", today] },
                                        {$gte : ["$endDate", today] }
                                    ]
                                }
                            }
                        }
                    ],
                    as:"caimpaign"
                }
            },
            {
                $match:{
                  caimpaign: { $ne: [] }  
                }
            },

            {
                $lookup:{
                    from:"products",
                    let : { productId : "$product_id",  variantId : "$variant_id" },
                      pipeline:[
                     {
                        $match: {
                            $expr: {
                            $and: [
                                { $eq: ["$_id", "$$productId"] },
                                { $eq: ["$save_as_draft", "0"] },
                                ...(searchText && searchBy === "name"
                                ? [
                                    {
                                        $regexMatch: {
                                        input: "$product_name",
                                        regex: searchText,
                                        options: "i"
                                        }
                                    }
                                    ]
                                : [])
                            ]
                            }
                        }
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
                        $lookup:{
                            from:"productvariants",
                            let : { productId : "$_id" },
                            pipeline:[
                                {
                                    $match:{
                                        $expr:{
                                            $and:[
                                                {$eq : ["$product_id", "$$productId"] },
                                                {$eq : ["$_id", "$$variantId"] },
                                                {$eq : ["$isProcessing", "Approved"] },
                                                {$eq : ["$stock_status", "In Stock"] },
                                                {$eq : ["$listingStatus", 1] },
                                                ...(searchText && searchBy === "sku"
                                                ? [
                                                    {
                                                        $regexMatch: {
                                                        input: "$sku",
                                                        regex: searchText,
                                                        options: "i"
                                                        }
                                                    }
                                                    ]
                                : [])
                                                
                                            ]
                                        }
                                    }
                                }
                            ],
                            as:"variants" 
                        }
                    },
                      {
                        $match:{
                            variants: {$ne: []}
                        }
                    },
                    {
                        $addFields:{
                            variants : {$arrayElemAt : ["$variants", 0]}
                        }
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
                preserveNullAndEmptyArrays: true
                }
            }, 

             {
                $project:{
                    _id:1, 
                    category_id:1,
                    subcategory_id:1,
                    childcategory_id:1,
                    seller_id:1,
                    product_name:1,
                    slug:1,
                    product_description:1,
                    main_image:1,
                    variant:"$variants",
                    event:{
                        _id:"$event._id", 
                        startDate:"$event.startDate", 
                        closeDate:"$event.closeDate", 
                        startTime:"$event.startTime", 
                        closeTime:"$event.closeTime", 
                        image:"$event.image", 
                        appliedDiscount:"$appliedEvent.discount", 
                    },
                }
            },

             ],
                    as:"product" 
                }
            },

          
           {
                $addFields: {
                
                product: { $arrayElemAt: ["$product", 0] },
                }
            }, 
            
            {
                $match: {
                product: { $ne: null },
                
                }
            },
            // {
            //     $project : {
            //         product:{
            //             _id:"$product._id",
            //             category_id:"$product.category_id",
            //             seller_id:"$product.seller_id",
            //             subcategory_id:"$product.subcategory_id",
            //             childcategory_id:"$product.childcategory_id",
            //             product_name:"$product.product_name",
            //             slug:"$product.slug",
            //             product_description:"$product.product_description",
            //             model_name:"$product.model_name",
            //             model_number:"$product.model_number",
            //             country_of_origin:"$product.country_of_origin",
            //             main_image:"$product.main_image", 
            //             variant:"$product.variants"
                        
            //         }
            //     }
            // },
            {
                $replaceWith:"$product"
            },

             {
                    $facet: {
                    data: [
                        { $skip: skip },
                        { $limit: limit },
                    ],
                    totalCount: [
                        { $count: "count" },
                    ],
                    },
                },
            


        ])

         const total = products[0]?.totalCount[0]?.count || 0;
         const productData = products[0]?.data || [];

          const pagination = {
                        totalCount:total,
                        page:page,
                        pageSize:limit,
                        totalPages: Math.ceil(total / limit),
                    }

        return responseFun(true, {products:productData, pagination}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 200);
    }

}