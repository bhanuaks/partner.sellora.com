import mongoose, { Schema } from "mongoose"; 

export const connectDb=async ()=>{
    const mongoUri = process.env.MONGODB_URI 
    try{
    const {connection} = await  mongoose.connect(mongoUri,{
            dbName: "selloraDB", 
        }); 
        
    }catch(error){
        console.log('fail to connect database');
        console.log(error);
    }
}
