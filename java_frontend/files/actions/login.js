import item from "../model.js";
import bcrypt from "bcrypt";
import { sess_in } from "./exp_sessions.js";
async function Login(req,res){
    const {user_id,password}=req.body;

    const user=await item.findOne({user_id:user_id});
    if(user){
        try{
        const encrypt=await bcrypt.compare(password,user.password);
        if(encrypt){ 
            sess_in(req,user);
            console.log("logged in");
           return res.status(200).json({"message":"authenticated"});
            
        }
        else{
            return res.status(409).json({"message":"failed to authenticate"});
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({"message":"server error"});
    }
    }
    else{
        return res.status(404).json({"message":"user not found"});
    }
    
        

    
}
export default Login;