import app from "./app.js";
import connect from './connect.js'
async function start(){
try{
    connect();
    const p=3001;
    app.listen(p, console.log(`listening on port ${p}`)
    )
}
    catch(error){
        console.log(error.message);
    }
}

start();