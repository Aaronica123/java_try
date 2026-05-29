import item from "../model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
async function Register(req,res){
    const {user_id,full_name,email,password}=req.body;

    if(!user_id||!full_name||!email||!password){
       return res.status(400).json({"message":"Enter all fields"})
    };
    const enc=await bcrypt.hash(password,10);
    try{
        const user=await item.create({
            user_id:user_id,
            full_name:full_name,
            email:email,
            password:enc

        });
        if(user){
             console.log(`success ${user.user_id}`);
             return res.status(201).json({"message":"User successfully created"});
        }
       
       
    }
    catch(error){
        if(error.status===11000){
            return console.log("duplicate fields");
        }
           return console.log("server error"+error.message);
        
    }

};
export default Register;