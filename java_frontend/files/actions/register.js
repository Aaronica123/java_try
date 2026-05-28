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
        console.log(`success ${user.user_id}`);
        res.status(201).json({"message":"User successfully created"});
    }
    catch(error){
         
        
            console.log("server error"+error.message);
        
    }

};
export default Register;