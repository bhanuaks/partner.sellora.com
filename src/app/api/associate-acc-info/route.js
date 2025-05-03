import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/dbConnect";
import { AffiliateUserModal } from "@/Http/Models/affiliate/affiliateUserModel";
import { AssociateAccInfoModel } from "@/Http/Models/associate/associateAccInfo";
import mongoose from "mongoose";


export async function GET(request) {
    //console.log(request.url)

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    //console.log('uuuuuuuuuuuuuuuuu', userId)
    try {
        const user = await AssociateAccInfoModel.find({ user_id: new mongoose.Types.ObjectId(userId) })

        if (user) {

            return responseFun(true, { user: user }, 200)
        } else {
            return responseFun(true, { user: [] }, 200)
        }



    } catch (error) {
        //console.log('eeeeeeeeeeeeeeee')
        return responseFun(false, { error }, 401)
    }
}


export async function POST(request) {

    connectDb();

    //console.log(request.body)


    const {

        website,
        mobileApp,
        socialMedia,
        user_id


    } = await request.json();

    const errors = {};
    //if(isEmpty(first_name))errors.first_name = `First name is required.`
    //console.log('testtttttttttttttt', user_id, website, mobileApp, socialMedia)

    try {

        const user = await AssociateAccInfoModel.findOne({ user_id: user_id });
        if (user) {
            // console.log('okkkkkkkkkkkkk')
            user.website = website;
            user.mobileApp = mobileApp;
            user.socialMedia = socialMedia;
            await user.save();

            return new Response(
                JSON.stringify({ success: true, message: 'Account information updated successfully' }),
                { status: 200 }
            );


        } else {

            //console.log('nooooooooooooo')
            const accInfo = await AssociateAccInfoModel.create({
                website,
                mobileApp,
                socialMedia,
                user_id

            })
            return new Response(
                JSON.stringify({ success: true, message: 'Account information added successfully' }),
                { status: 200 }
            );


        }





    } catch (error) {
        console.log(error);
        return responseFun(false, { error }, 200);
    }

}