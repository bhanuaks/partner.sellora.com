import {  isEmpty, responseFun } from "@/Http/helper";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "../../../../lib/dbConnect";
import { AffiliateUserModal } from "@/Http/Models/affiliate/affiliateUserModel";


export async function POST(request) {
    await connectDb()
    const {username, password, program} = await request.json();

    const errors = {}
    if(isEmpty(username))errors.username = "Email is required"
    if(isEmpty(password))errors.password = "Password is required"
    if(isEmpty(program))errors.program = "Program is required"
    if(Object.keys(errors).length>0){
        return responseFun(false,{errors, status_code:403},200)
    }

    try{
        const user = await AffiliateUserModal.findOne({email:username}).select('+password').select('email mobile program')

        const userPass = await AffiliateUserModal.findOne({email:username}); //.select('_id, first_name, last_name, email mobile program')
       
        
        if(!user){
                errors.username = "invalid email"
                return responseFun(false,{errors, status_code:403},200)
        }
         
        const matchPassword = bcrypt.compareSync(password, user.password);
        if(!matchPassword){
            errors.password = "password is incorrect"
            return responseFun(false,{errors, status_code:403},200)
        }
        if(user.program != program){
            // errors.program = "Program is incorrect"
             errors.username = "Invalid unsername."
            return responseFun(false,{errors, status_code:403},200)
        }

        const token = jwt.sign({
            user:userPass
        },process.env.JWT_SECRET)
        
        
        const response = NextResponse.json({
            message:"Login Success",
            status:true,
            user:userPass,
            token:token
            
        },  { status: 200 });
        response.cookies.set('affiliateUserAuthToken',token,{
            expireIn:'1d'
         })   
         
        return response;

    }catch(error){
        console.log(error);
        return responseFun(false,{error},200)

    }
}