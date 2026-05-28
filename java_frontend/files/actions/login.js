import item from "../model.js";
import bcrypt from "bcrypt";
async function Login(req,res){
    const {user_id,password}=req.body;

    const user=await item.fetchOne({user_id:user_id})
    
    try{
        const encrypt=await bcrypt.compare(password,user.password);
        if(encrypt){
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
export default Login;