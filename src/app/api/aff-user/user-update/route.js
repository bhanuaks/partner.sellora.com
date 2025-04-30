import fs from 'fs';
import path from 'path';
import { encryptText, isEmpty, rand, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { NextResponse } from "next/server";
import { AffiliateUserModal } from "@/Http/Models/affiliate/affiliateUserModel";
import { connectDb } from "../../../../../lib/dbConnect";
import { deleteImageOne, uploadImageFun } from '@/app/api/uploadImage/route';

export async function POST(req) {
    try{
    connectDb();

    const data = await req.formData();
    const id = data.get('id') && data.get('id') !== 'undefined' ? data.get('id') : undefined;
    const first_name = data.get('first_name');
    const last_name = data.get('last_name');
    const mobile = data.get('mobile');
    
    
    const mobile_code = data.get('mobile_code');
    const country_s_name = data.get('country_s_name');
    const sex = data.get('sex');
    const birth_date = data.get('birth_date');
    const nationality = data.get('nationality');
    const business_name = data.get('business_name');
    const tax_id = data.get('tax_id');
    const tax_name = data.get('tax_name');
    const education = data.get('education');
    const emp_status = data.get('emp_status');

    const household_income = data.get('household_income');
    const language = data.get('language');
    const contact_lense = data.get('contact_lense');
    const photo = data.get('photo');
    const photo_close = data.get('photo_close');

         const errors = {};
         let photoPath = null;
         let photoPath_close = null;

        if(isEmpty(first_name))errors.first_name = `First name is required.`
        if(isEmpty(last_name))errors.last_name = `Last name is required.`
        if(isEmpty(mobile))errors.mobile = `Mobile number is required.`
        if(isEmpty(sex))errors.sex = `Sex is required.`
        if(isEmpty(birth_date))errors.birth_date = `Date of birth is required.`
        if(isEmpty(nationality))errors.nationality = `Nationality is required.`
        if(isEmpty(tax_id))errors.tax_id = `Tax ID is required.`
        
        if(isEmpty(education))errors.education = `Education is required.`
        if(isEmpty(emp_status))errors.emp_status = `Employee status is required.`
        if(isEmpty(household_income))errors.household_income = `House hold income is required.`
        if(isEmpty(language))errors.language = `Language is required.`
        if(isEmpty(contact_lense))errors.contact_lense = `Contact lenses is required.`

        

        
        let exitBanner = null;
        if(id){ 
            exitBanner = await AffiliateUserModal.findById(id);
            
         if(exitBanner.photo){ } else {   
          if(isEmpty(photo))errors.photo = `Attach document is required.`
         }
         if(exitBanner.photo_close){ } else {
         if(isEmpty(photo_close))errors.photo_close = `Close up photo is required.`
         }
        }
        
        
            if(photo && typeof photo  !== "string"){
            const imageExtension = path.extname(photo.name);
            const acceptExtensions = ['.jpg', '.png', 'jpeg', 'webp', '.pdf'];
            const imageName = `profile${rand(1111,9999)}${imageExtension}`
            if (!acceptExtensions.includes(imageExtension)) {
                  errors.photo = "image must be jpg, png,jpeg, pdf."
                  return responseFun(false, {errors, status_code:400},200)
              }
              const sizeInMB = (photo.size / (1024 * 1024)).toFixed(2);
              if(sizeInMB > 10){  
              errors.photo = "Attache document not larger than 10 MB"
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

          if(photo_close && typeof photo_close  !== "string"){
            const imageExtension = path.extname(photo_close.name);
            const acceptExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
            const imageName = `closeProfile${rand(1111,9999)}${imageExtension}`
            if (!acceptExtensions.includes(imageExtension)) {
                  errors.photo = "image must be jpg, png,jpeg."
                  return responseFun(false, {errors, status_code:400},200)
              }
              const sizeInMB = (photo_close.size / (1024 * 1024)).toFixed(2);
              if(sizeInMB > 10){  
              errors.photo_close = "Close up photo not larger than 10 MB"
              }
              const uploadingPath = "public/uploads/profile/";
              await uploadImageFun(photo_close, uploadingPath, imageName, 0)
              photoPath_close = `/uploads/profile/${imageName}`
              if(exitBanner && exitBanner.photo_close){
                await deleteImageOne(exitBanner.photo_close);
              }
          }else{
             photoPath_close = photo_close;
          }

        if(Object.keys(errors).length>0){
             return responseFun(false, {errors, status_code:400}, 200); 
        } 

    

        const mobileExiste =  await AffiliateUserModal.findOne({
            mobile: mobile,
            _id: { $ne: id }
        
        });
        //const emailExiste =  await AffiliateUserModal.findOne({email:email});
        if(mobileExiste){
            errors.mobile = `this number already registered.`
            return responseFun(false, {errors, status_code:400}, 200); 
        }
        /* if(emailExiste){
            errors.email = `this email already registered.`
            return responseFun(false, {errors, status_code:400}, 200); 
        }
        */
        
            const user = await AffiliateUserModal.findById(id);
            if (!user) {
              return new Response(
                JSON.stringify({ success: false, message: 'User not found' }),
                { status: 404 }
              );
            }

            
      
            // Update category
            user.first_name = first_name || "";
            user.last_name = last_name  || "";
            user.mobile =  mobile || "";
            user.mobile_code = mobile_code || "";
            user.country_s_name = country_s_name || "";
            user.sex = sex || "";
            user.birth_date = birth_date || "";
            user.nationality =  nationality || "";
            user.business_name = business_name || "";
            user.tax_id =  tax_id || "";
            user.education =  education || "";
            user.emp_status =  emp_status || "";
            user.household_income =  household_income || "";
            user.language =  language || "";
            user.contact_lense =  contact_lense || "";
            user.tax_name =  tax_name || "";
            user.photo =  photoPath || user.photo;
            user.photo_close =  photoPath_close || user.photo_close;
            
            await user.save();
            
      
            return new Response(
              JSON.stringify({ success: true, message: 'Profile updated successfully' }),
              { status: 200 }
            );
          
         
                
            
             
             

             
             
        
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200);
    }

}