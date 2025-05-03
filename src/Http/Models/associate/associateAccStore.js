import mongoose from 'mongoose';
const { Schema } = mongoose; 


const userAccStoreSchema = new Schema({

    user_id:{
            type:mongoose.Types.ObjectId,
            ref:"affiliate_user",
            required:[true, "user id is required"]
    },
    store_id:{
        type:String,
        //required:[true, "Account holder name is required"]
    },
    web_about:{
        type:String,
        //required:[true, "Account holder name is required"]
    },
    web_type:{
        type:[String],
        //required:[true, "Account holder name is required"]
    },
    web_hear:{
        type:String,
        //required:[true, "Account holder name is required"]
    }, 
    agree:{
        type:Number,
        //required:[true, "Account holder name is required"]
    },
    finish:{
        type:Number,
        default: 0
        //required:[true, "Account holder name is required"]
    }   


    
},{timestamps:true})


export const AssociateAccStoreModel = mongoose.models.affiliate_associate_acc_store || mongoose.model("affiliate_associate_acc_store", userAccStoreSchema)