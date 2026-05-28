import express, { json } from "express";
import Register from "./actions/register.js"
import Login from "./actions/login.js"
const app=express();

app.init(json);
app.route("/api/register",Register)
app.route("/api/login",Login)


export default app;
