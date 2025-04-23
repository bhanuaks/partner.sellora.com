import fs from 'fs';
import path from 'path';
import { encryptText, isEmpty, rand, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/dbConnect";
import { deleteImageOne, uploadImageFun } from '@/app/api/uploadImage/route';
import { AffiliateUserPaymentModal } from '@/Http/Models/affiliate/userPaymentModel';


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    
    try{
        const user = await AffiliateUserPaymentModal.findOne({user_id:userId})
        let address = {}
        if(user){
        const returnData = {
                            ...user.toObject(),
                            
                        }
        
        return responseFun(true, {user:returnData}, 200)
                      } else {
                        return responseFun(true, {user:[]}, 200)
                      }

    }catch(error){
        return responseFun(false, {error}, 401)
    }
 }

export async function POST(req) {
    try{
    connectDb();

    const data = await req.formData();
    const id = data.get('id') && data.get('id') !== 'undefined' ? data.get('id') : undefined;
    const user_id = data.get('user_id');
    const acc_holder_name = data.get('acc_holder_name');
    const address = data.get('address');
    const pin_code = data.get('pin_code');
    const city = data.get('city');
    const country = data.get('country');
    const account_no = data.get('account_no');
    const ifsc_no = data.get('ifsc_no');
    const paypal_id = data.get('paypal_id');
    const photo = data.get('photo');
  

         const errors = {};
         let photoPath = null;
         let photoPath_close = null;

        if(isEmpty(acc_holder_name))errors.acc_holder_name = `Account holder name is required.`
        if(isEmpty(address))errors.address = `Address is required.`
        if(isEmpty(pin_code))errors.pin_code = `PIN Code is required.`
        if(isEmpty(city))errors.city = `City is required.`
        if(isEmpty(country))errors.country = `Country is required.`
        if(isEmpty(account_no))errors.account_no = `Account no is required.`
        if(isEmpty(ifsc_no))errors.ifsc_no = `IFSC code is required.`
        

        
        let exitBanner = null;
        if(id){ 
            exitBanner = await AffiliateUserPaymentModal.findById(id);
            
         if(exitBanner.photo){ } else {   
          if(isEmpty(photo))errors.photo = `Bank statement is required.`
         }
         
        }
        
        
            if(photo && typeof photo  !== "string"){
            const imageExtension = path.extname(photo.name);
            const acceptExtensions = ['.jpg', '.png', 'jpeg', 'webp', '.pdf'];
            const imageName = `bankProfile${rand(1111,9999)}${imageExtension}`
            
            const sizeInMB = (photo.size / (1024 * 1024)).toFixed(2);
            if(sizeInMB > 10){  
            errors.photo = "Bank statement not larger than 10 MB"
            }
            
            if (!acceptExtensions.includes(imageExtension)) {
                  errors.photo = "image must be jpg, png,jpeg, pdf."
                  return responseFun(false, {errors, status_code:400},200)
              }
              const uploadingPath = "public/uploads/profile/";
              await uploadImageFun(photo, uploadingPath, imageName, 0)
              photoPath = `/uploads/profile/${imageName}`
              if(exitBanner && exitBanner.photo){
                await deleteImageOne(exitBanner.photo);
              }
          }else{
             photoPath = photo;
          }

          

        if(Object.keys(errors).length>0){
             return responseFun(false, {errors, status_code:400}, 200); 
        } 

    
     
        if(id){
        
            const user = await AffiliateUserPaymentModal.findById(id);
            if (!user) {
              return new Response(
                JSON.stringify({ success: false, message: 'Payment information not found' }),
                { status: 404 }
              );
            }

            
      
            // Update category
            user.acc_holder_name = acc_holder_name || "";
            user.account_no = account_no  || "";
            user.address =  address || "";
            user.city = city || "";
            user.pin_code = pin_code || "";
            user.country = country || "";
            user.ifsc_no = ifsc_no || "";
            user.paypal_id =  paypal_id || "";
            user.photo =  photoPath || user.photo;
                       
            await user.save();
            
      
            return new Response(
              JSON.stringify({ success: true, message: 'Payment information updated successfully' }),
              { status: 200 }
            );
          
         
          } else {
            
            const user = new AffiliateUserPaymentModal({
              user_id,
              acc_holder_name,
              account_no,
              address,
              city,
              pin_code,
              country,
              ifsc_no,
              paypal_id,
              photo:photoPath            
              
            });
            await user.save();
            
            
            return new Response(
              JSON.stringify({ success: true, message: 'Payment information added successfully' }),
              { status: 200 }
            );
          }         
            
             
             

             
             
        
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200);
    }

}