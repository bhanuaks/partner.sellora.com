import fs from 'fs';
import path from 'path';
import { encryptText, isEmpty, rand, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { NextResponse } from "next/server";
import { deleteImageOne, uploadImageFun } from '@/app/api/uploadImage/route';
import { AssociateAccStoreModel } from '@/Http/Models/associate/associateAccStore';
import { connectDb } from '../../../../lib/dbConnect';



export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    
    try{
        const user = await AssociateAccStoreModel.findOne({user_id:userId})
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
    const store_id = data.get('store_id');
    const web_about = data.get('web_about');
    const web_type = data.get('web_type');
    const web_hear = data.get('web_hear');
    const user_id = data.get('user_id');
    const agree = data.get('agree');
    
    //console.log('mmmmmmmmmmmmmmmmmmmm', web_type, agree)
    

         const errors = {};
         

        if(isEmpty(store_id))errors.store_id = `Store ID is required.`
        if(isEmpty(web_about))errors.web_about = `About is required.`
        if(isEmpty(web_type))errors.web_type = `Website type is required.`
        if(isEmpty(web_hear))errors.web_hear = `Hear about is required.`
        if(isEmpty(agree))errors.agree = `Terms and conditions is required.`
        
        
            

        if(Object.keys(errors).length>0){
             return responseFun(false, {errors, status_code:400}, 200); 
        }
        //console.log('mmmmm', web_ty, agree)
        let webType = []
        if(web_type !=''){
            webType = web_type.split(",")
        }

        // console.log('mmmmm', webType, agree)

        if(id){

        const storeExist =  await AssociateAccStoreModel.findOne({
            store_id: store_id,
            _id: { $ne: id }
        
        });
        
        if(storeExist){
            errors.store_id = `Store ID already registered.`
            return responseFun(false, {errors, status_code:400}, 200); 
        }
        
        
            const user = await AssociateAccStoreModel.findById(id);
            if (!user) {
              return new Response(
                JSON.stringify({ success: false, message: 'Store not found' }),
                { status: 404 }
              );
            }

            
      
            // Update category
            user.store_id = store_id;
            user.web_about = web_about;
            user.web_hear = web_hear;
            user.web_type = webType;
            user.agree = agree;
            await user.save();
            
      
            return new Response(
              JSON.stringify({ success: true, message: 'Store updated successfully' }),
              { status: 200 }
            );
        } else {
            const storeExist =  await AssociateAccStoreModel.findOne({
                store_id: store_id            
            });
            
            if(storeExist){
                errors.store_id = `Store ID already registered.`
                return responseFun(false, {errors, status_code:400}, 200); 
            } 
            
            const user = new AssociateAccStoreModel({
                          user_id,
                          store_id,
                          web_about,
                          web_hear,
                          web_type,
                          web_type:webType,
                          agree:agree            
                          
                        });
                        await user.save();
                        
                        
                        return new Response(
                          JSON.stringify({ success: true, message: 'Store added successfully' }),
                          { status: 200 }
                        );
                        


        }
         
                
            
             
             

             
             
        
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200);
    }

}