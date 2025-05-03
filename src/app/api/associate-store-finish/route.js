import fs from 'fs';
import path from 'path';
import { encryptText, isEmpty, rand, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { NextResponse } from "next/server";
import { deleteImageOne, uploadImageFun } from '@/app/api/uploadImage/route';
import { AssociateAccStoreModel } from '@/Http/Models/associate/associateAccStore';
import { connectDb } from '../../../../lib/dbConnect';





export async function POST(request) {
    try{
    connectDb();

    const {

        id


    } = await request.json();
    
    //const id = data.get('id') && data.get('id') !== 'undefined' ? data.get('id') : undefined;
    
    
    //console.log('mmmmmmmmmmmmmmmmmmmm', web_type, agree)
    

         const errors = {};
         

        
        // console.log('mmmmm', webType, agree)

        if(id){

        
        
        
            const user = await AssociateAccStoreModel.findById(id);
            if (!user) {
              return new Response(
                JSON.stringify({ success: false, message: 'Store not found' }),
                { status: 404 }
              );
            }

            
      
            // Update category
            user.finish = 1;
            await user.save();
            
      
            return new Response(
              JSON.stringify({ success: true, message: 'Store updated successfully' }),
              { status: 200 }
            );
        } else {
            
                        
                        
                        return new Response(
                          JSON.stringify({ success: false, message: '' }),
                          { status: 200 }
                        );
                        


        }
         
                
            
             
             

             
             
        
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200);
    }

}