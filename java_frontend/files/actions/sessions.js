import { sess_in } from "./exp_sessions.js";
export function start_sess(req,body){
    try{
        sess_in(req,body);
    }
    catch(error){
        console.log(error.message);
    }
    
}
export function end_sess(){
    try{
        sessionStorage.clear();
      return  console.log("session cleared")
    }
    catch(error){
       return console.log(error.message);
    }
};

export function session_status(){
    try{
        const res=session_status();
        if(res){
            return console.log("logged in");
            
        }
        else{
         return console.log("logged out");

        }
    }
    catch(error){
        return console.log(error.message);
        
    }
};