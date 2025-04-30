import { responseFun } from "@/Http/helper"
import { AffiliateUserModal } from "@/Http/Models/affiliate/affiliateUserModel"
import mongoose from "mongoose"

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    const withData = searchParams.get('withData')
    try{
        const user = await AffiliateUserModal.findById(userId)
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