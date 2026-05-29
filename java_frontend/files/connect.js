import configenv from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import mongodb from "mongodb";
import { configDotenv } from "dotenv";

export default async function connect(){
    configDotenv();
    const enc=encodeURIComponent(process.env.password);
    const path=`mongodb+srv://java_refresh:${enc}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`;
    
    try{ 
        const cont=await mongoose.connect(path);
        //console.log(cont)
        if(cont){
            console.log("success");
            return mongoose.connection.getClient();
        }
        else{
           return console.log("failed")
        }
        

}
catch(error){
   return console.log(error.message)
}

};


