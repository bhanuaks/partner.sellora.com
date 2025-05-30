import { encryptText, generateUniqueId, isEmpty, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/dbConnect";
import { AffiliateUserModal } from "@/Http/Models/affiliate/affiliateUserModel";


export async function POST(request) {
   
    connectDb();

    const {

        first_name,
        last_name,
        email,
        password ,
        confirm_password,
        mobile,
        mobile_code,
        country_s_name,
        country,
        program,
        

    } = await request.json();

         const errors = {};
        if(isEmpty(first_name))errors.first_name = `First name is required.`
        if(isEmpty(last_name))errors.last_name = `Last name is required.`
        if(isEmpty(country))errors.country = `Country is required.`
        if(isEmpty(email))errors.email = `Email is required.`
        if(isEmpty(password))errors.password = `Password is required.`
        if(isEmpty(confirm_password))errors.confirm_password = `Confirm password is required.`
        if(isEmpty(mobile))errors.mobile = `Mobile number is required.`
        if(isEmpty(program))errors.program = `Program is required.`

        if(password && password.length < 8){ 
            errors.password = `Password must be 8 min characters.` 
        }else if(password && confirm_password && password != confirm_password){
             errors.confirm_password = `Password and confirm password must be same password.` 
        }


        if(Object.keys(errors).length>0){
             return responseFun(false, {errors, status_code:400}, 200); 
        } 

    try{

        const mobileExiste =  await AffiliateUserModal.findOne({mobile:mobile});
        const emailExiste =  await AffiliateUserModal.findOne({email:email});
        if(mobileExiste){
            errors.mobile = `this number already registered.`
            return responseFun(false, {errors, status_code:400}, 200); 
        }
        if(emailExiste){
            errors.email = `this email already registered.`
            return responseFun(false, {errors, status_code:400}, 200); 
        }

        
   

        const hash_password = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT))
        const uniqueId = await getNewUniqueId(30);

            const user = await AffiliateUserModal.create({
                first_name,
                last_name,
                country,
                email,
                password :hash_password,
                mobile,
                mobile_code,
                country_s_name,
                program,
                uniqueId
                
            })
         
                
            const token = jwt.sign({
                user:user
            }, process.env.JWT_SECRET)
             const response = NextResponse.json({status:200, user, token, message:"Account has been created."},{status:200})
             response.cookies.set('affiliateUserAuthToken',token,{
                expireIn:'1d'
             })

             
             return response;
        
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200);
    }

}

    export async function getNewUniqueId(number=30){
            const newId = generateUniqueId(number);
            const checkExit = await AffiliateUserModal.countDocuments({uniqueId:newId})
            if(checkExit>0){
                   await getNewUniqueId()
            }
            return newId;
        }