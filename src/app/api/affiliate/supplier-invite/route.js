import SellerInvitation from "@/app/EmailTemplates/SellerInvitation";
import { baseUrl, isEmpty, isValidEmail, responseFun } from "@/Http/helper";
import React from "react";
import { sendMailByNodeMailer } from "../../sendMail/route";
import { sellerUrl } from "@/Http/urlHelper";
import { sendMobileSMS } from "@/Http/smsHelper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { getLoginUser } from "../../getLoginUser/route";
const ReactDOMServer =  require('react-dom/server');


export async function POST(request) {
    
    const { name, mobile, email, country_s_name, mobile_code } = await request.json();


    try{
        const errors = {}
        // validate input data
        if(isEmpty(name))errors.name = "name is required.";
        if(!isValidEmail(email))errors.email = "enter valid email id.";
        if(isEmpty(mobile))errors.mobile = "mobile is required.";

        if(Object.keys(errors).length>0){
            return responseFun(false, {errors, status_code:400}, 200);
        } 

        // check mobile register as a seller
        const checkMobile = await sellerModel.countDocuments({mobile:mobile})
        if(checkMobile>0){
            errors.mobile = "This number is already registered."; 
        }

         // check email register as a seller
         const checkEmail = await sellerModel.countDocuments({email:email})
        if(checkEmail>0){
            errors.email = "This email is already registered."; 
        }

         if(Object.keys(errors).length>0){
            return responseFun(false, {errors, status_code:400}, 200);
        } 

        const loginProgram = getLoginUser();
         
        // send invitation on Email
        const link = `${sellerUrl}/seller/register?ref=${loginProgram.uniqueId}`
        const subject = `You're Invited to Join sellora.com – Register as a Seller`;
        const htmlContent = ReactDOMServer.renderToString(
             React.createElement(SellerInvitation, {name:name, link: link})
        )
        await sendMailByNodeMailer(email, subject, htmlContent);

        // send invitation on Mobile SMS
         const message = `Hello ${name}, Join our platform and start listing your products. ${link}`
         const sender = `Sellora`;
         const receiver = `${mobile_code}${mobile}`;
          const smsRes =  await sendMobileSMS(sender, receiver, message); 
        return responseFun(true, {message:"success"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(true, {message:error.message}, 200);
    }
}