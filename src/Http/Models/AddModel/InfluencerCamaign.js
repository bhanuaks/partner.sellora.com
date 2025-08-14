const { Schema, default: mongoose } = require("mongoose");


const influencerCampaignSchema = new Schema({

     seller_id: {
            type:mongoose.Types.ObjectId,
            ref:"Seller",
            required:true
     }, 
     campaignName: {
            type:String,
            required:true
     }, 

      dailyBudget: {
            type:Number,
            required:true
     },
      startDate:{
            type:Date,
            required:true
         },
      endDate:{
            type:Date,
            required:true
         },
      costPerOrder: {
            type:Number,
            required:true
     },

}, {timestamps:true})

export const influencerCampaignModal = mongoose.models.InfluencerCampaign || mongoose.model("InfluencerCampaign", influencerCampaignSchema);


const influencerCampaignProductSchema = new Schema({

     seller_id: {
            type:mongoose.Types.ObjectId,
            ref:"Seller",
            required:true
     }, 

    influencerCampaignId:{
        type:mongoose.Types.ObjectId,
        ref:"InfluencerCampaign",
        required:true
    },

     product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        require:true
    },

    variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant",
        require:true
    } 
}, { timestamps:true });


export const influencerCampaignProductModal = mongoose.models.InfluencerCampaignProduct || mongoose.model("InfluencerCampaignProduct", influencerCampaignProductSchema);
