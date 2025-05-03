import mongoose from 'mongoose';
const { Schema } = mongoose; 


const userAccInfoSchema = new Schema({

    user_id:{
            type:mongoose.Types.ObjectId,
            ref:"affiliate_user",
            required:[true, "user id is required"]
    },
    website:{
        type:[String],
        //required:[true, "Account holder name is required"]
    },
    mobileApp:{
        type:[String],
        //required:[true, "Account holder name is required"]
    },
    socialMedia:{
        type:[String],
        //required:[true, "Account holder name is required"]
    }   


    
},{timestamps:true})


export const AssociateAccInfoModel = mongoose.models.affiliate_associate_acc_info || mongoose.model("affiliate_associate_acc_info", userAccInfoSchema)