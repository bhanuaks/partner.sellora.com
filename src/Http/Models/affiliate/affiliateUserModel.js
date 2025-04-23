import mongoose from 'mongoose';

const { Schema } = mongoose; 


const userSchema = new Schema({

    first_name:{
        type:String,
        required:[true, "First name is required"]
    },
    last_name:{
        type:String,
        required:[true, "Last name is required"]
    },
    
    email:{
        type:String,
        default:null,
        trim:true,
        lowercase:true,
        validate:{
            validator:function(v){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message : props => `${props.value} is not a valid email`
        }
    },
    password :{
        type:String,
        required:[true, "Password is required"]
    },
    
    
    mobile:{
        type:String,
        required:[true, "Mobile is required"]
    },
    mobile_code:{
        type:String,
        required:[true, "Mobile code is required"]
    },
    country_s_name:{
        type:String,
        required:[true, "Country name is required"]
    },
    
    country:{
        type:String,
        required:[true, "Country is required"]
    },
    program:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
        required:[true, "Program is required"]
    },
    sex:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    birth_date:{
        type:Date,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    nationality:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    business_name:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    tax_id:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    education:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    emp_status:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    household_income:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    language:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    contact_lense:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    tax_name:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    photo:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    },
    photo_close:{
        type:String,  // 1=>sellora affiliate program, 2=> sellora associate program
       
    }

    

    


    
},{timestamps:true})


export const AffiliateUserModal = mongoose.models.affiliate_user || mongoose.model("affiliate_user", userSchema)