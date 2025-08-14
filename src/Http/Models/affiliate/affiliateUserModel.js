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

     uniqueId:{
        type:String,
        unique:true,
        required:[true, "Unique Id is required"]
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
        required:[true, "Password is required"],
        select: false
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
        type:String,  
       
    },
    birth_date:{
        type:Date,  
       
    },
    nationality:{
        type:String, 
       
    },
    business_name:{
        type:String,  
       
    },
    tax_id:{
        type:String, 
       
    },
    education:{
        type:String,  
       
    },
    emp_status:{
        type:String,  
       
    },
    household_income:{
        type:String,  
       
    },
    language:{
        type:String,  
       
    },
    contact_lense:{
        type:String,  
       
    },
    tax_name:{
        type:String,  
       
    },
    photo:{
        type:String,  
       
    },
    photo_close:{
        type:String,  
       
    }

  

    

    


    
},{timestamps:true})


export const AffiliateUserModal = mongoose.models.affiliate_user || mongoose.model("affiliate_user", userSchema)