const { Schema, default: mongoose } = require("mongoose");


const sellerInvitationSchema = new Schema({
    affiliateId:{
        type:mongoose.Types.ObjectId,
        ref:"affiliate_user",
        required:true
    },
    name:String,
    mobile:String, 
    email:String, 
    country_s_name:String, 
    mobile_code:String  
}, {timestamps:true});


export const sellerInvitionModal = mongoose.models.sellerInvitation || mongoose.model("sellerInvitation", sellerInvitationSchema)