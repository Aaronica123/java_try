import session from "express-session";
import app from "../app.js"
import { configDotenv } from "dotenv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
configDotenv();
export function sess_in(req,body){
    const {user_id,full_name,email}=body;
//const path=`mongodb+srv://java_refresh:${password}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`;
    try{
    const now=new Date().toUTCString();
    if(req.session.user){
        if(req.session.user.user_id==user_id){
             return console.log("logged in already");
        }
        else{
           req.session.user={
       
        user_id,
        full_name,
        email,
        saved:now
        
    };
    req.cookie=("user_id",user_id,{
        httpOnly:true,
        age:100000
    });
    return console.log("session and cookie created");
        }
        
    }
    else{
        req.session.user={
       
        user_id,
        full_name,
        email,
        saved:now
        
    };
    req.cookie=("user_id",user_id,{
        httpOnly:true,
        age:100000
    });
    return console.log("session and cookie created");
    }
    
    
    }
catch(error){
   return console.log(error.message);
}

};