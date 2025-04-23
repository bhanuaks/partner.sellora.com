import mongoose, { Schema } from "mongoose"; 

export const connectDb=async ()=>{

    try{
    const {connection} = await  mongoose.connect(process.env.MONGODB_URI,{
            dbName: "selloraDB",
            
        }); 
        
    }catch(error){
        console.log('fail to connect database');
        console.log(error);
    }
}
