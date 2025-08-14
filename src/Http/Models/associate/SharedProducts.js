const { Schema, default: mongoose } = require("mongoose");


const shareProductSchema = new Schema({
    associate_id:{
        type:mongoose.Types.ObjectId,
        ref:"affiliate_user",
        required:[true, "user id is required"]
    },
    
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        required:true
    },
    variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant",
        // ,
        // required:true
    },
    shareCount:{
        type:Number,
        default:1
    }
}, {timestamps:true})


export const shareProductModal = mongoose.models.ShareProduct || mongoose.model("ShareProduct", shareProductSchema);