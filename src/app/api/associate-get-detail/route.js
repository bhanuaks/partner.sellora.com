import fs from 'fs';
import path from 'path';
import { encryptText, isEmpty, rand, responseFun } from "@/Http/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { deleteImageOne, uploadImageFun } from '@/app/api/uploadImage/route';
import { AssociateAccStoreModel } from '@/Http/Models/associate/associateAccStore';
import { connectDb } from '../../../../lib/dbConnect';
import { AssociateAccInfoModel } from '@/Http/Models/associate/associateAccInfo';



export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    
    try {
        const [infoResult, storeResult] = await Promise.allSettled([
            AssociateAccInfoModel.findOne({ user_id: userId }),
            AssociateAccStoreModel.findOne({ user_id: userId }),
        ]);
        
        const infoData = infoResult.status === 'fulfilled' ? infoResult.value : null;
        const storeData = storeResult.status === 'fulfilled' ? storeResult.value : null;
        
        const returnData = {
            info: infoData ? infoData.toObject() : null,
            store: storeData ? storeData.toObject() : null,
        };
        
        return responseFun(true, { user: returnData }, 200);


    } catch (error) {
        return responseFun(false, { error }, 401)
    }
}


