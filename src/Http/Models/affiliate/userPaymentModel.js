import mongoose from 'mongoose';
const { Schema } = mongoose; 


const userPaymentSchema = new Schema({

    user_id:{
            type:mongoose.Types.ObjectId,
            ref:"affiliate_user",
            required:[true, "user id is required"]
    },
    acc_holder_name:{
        type:String,
        required:[true, "Account holder name is required"]
    },
    address:{
        type:String,
        //required:[true, "Last name is required"]
    },
    pin_code :{
        type:String,
        //required:[true, "Password is required"]
    },
    city:{
        type:String,
        //required:[true, "Mobile is required"]
    },
    country:{
        type:String,
        //required:[true, "Mobile code is required"]
    },
    account_no:{
        type:String,
        //required:[true, "Country name is required"]
    },
    ifsc_no:{
        type:String,
        //required:[true, "Country is required"]
    },
    paypal_id:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
        //required:[true, "Program is required"]
    },
    photo:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    }
    
    

    


    
},{timestamps:true})


export const AffiliateUserPaymentModal = mongoose.models.affiliate_user_payment || mongoose.model("affiliate_user_payment", userPaymentSchema)