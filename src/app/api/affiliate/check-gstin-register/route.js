import { isEmpty, isValidEmail, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { sellerTaxInformationModel } from "@/Http/Models/sellerTaxInformation";



export async function POST(request) {
    
    const { gstin_no, email } = await request.json(); 
    
    try{
        const errors = {}
        
        if(isEmpty(email) && isEmpty(gstin_no)){ 
             return responseFun(false, {message:"Please enter GSTIN or Email.", }, 200);
        }
        

        if(gstin_no){
            let formattedValue = gstin_no.replace(/(\d{2})(\d{7})/, "$1-$2"); 
            const sellerCount = await sellerTaxInformationModel.countDocuments({tin_number:formattedValue});
            if(sellerCount > 0){
                    return responseFun(false, {message:"Given EIN/GSTIN has registered."}, 200)
            }
        }

        if(email){ 
            const sellerCount = await sellerModel.countDocuments({email:email});
            if(sellerCount > 0){
                    return responseFun(false, {message:"Given email has registered."}, 200)
            }
        }

       

        return responseFun(true, {message:"This is not a registered seller. You can invite them to register."}, 200)
    }catch(error){
        console.log(error);
        return responseFun(true, {message:error.message}, 200);
    }
}