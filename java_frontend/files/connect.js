import configenv from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import mongodb from "mongodb";
async function connect(){
    dotenv.config();
    const enc=encodeURIComponent(process.env.password);
    const path=`mongodb+srv://java_refresh:${enc}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`;
    try{
        const connect=await mongoose.connect(path);
        if(connect){
            console.log("success");
        }
        else{
            console.log("failed")
        }
        

}
catch(error){
    console.log(error.message)
}

};
export default connect;

