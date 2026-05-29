import express, { json } from "express";
import Register from "./actions/register.js"
import Login from "./actions/login.js"
import connect from "./connect.js";
import session from "express-session";
import MongoStore from "connect-mongo";
const app=express();

const conf={
        secret:process.env.password, //encrypts data
        resave:true, //forces session to be resaved when request changes data 
        saveUninitialized:false,// ensures only logged in users have a session
        store:MongoStore.create({
        clientPromise:connect(),
        collectionName:"sessions",//name of sessions table
        ttl:100000,//timeline for a session before it expires
        touchAfter:9000,// how often is session updated after every request
        autoRemove:"native",//how are sessions deleted
        
        }),
        // cookie:{
        //     maxage:100000,//time before cookie expires
        //     httpOnly:true,// cookie is for http only and protects from javascript security inputs
        //     secure:false,//set to http allow but for https chnage to true
            
        // },
        // name:"cookie_data"
        }
    

app.use(session(conf));
app.use(express.json());
app.post("/api/register",Register)
app.post("/api/login",Login)


export default app;
