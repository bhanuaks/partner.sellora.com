import { isEmpty, isValidEmail, responseFun } from "@/Http/helper";



export async function POST(request) {
    
    const { gstin_no, email } = await request.json(); 
    
    try{
        const errors = {}
        
        if(isEmpty(email) && isEmpty(gstin_no)){
            errors.error = "Please enter GSTIN or Email.";
        }
         

        if(Object.keys(errors).length>0){
            return responseFun(false, {errors, status_code:400}, 200);
        }

        return responseFun(true, {message:"success"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(true, {message:error.message}, 200);
    }
}