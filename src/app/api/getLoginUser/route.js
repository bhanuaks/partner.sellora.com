import { decodeJwt } from "@/Http/helper";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getLoginUser() {  
    try {
        const cookieStore = await cookies();
        const userToken = cookieStore.get("affiliateUserAuthToken")?.value; 
        if (!userToken) {
            return null;  
        } 

        // Verify JWT token safely
        const decodedData = jwt.verify(userToken, process.env.JWT_SECRET);
        return decodedData.user; 
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;  
    }
}
 