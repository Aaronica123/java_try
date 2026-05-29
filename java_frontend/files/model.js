import mongoose, { Mongoose } from "mongoose"

const md=new mongoose.Schema({
    user_id:{
        type:Number,
        unique:true,
        required:true,
        maxlength:10,
        trim:true
    },
    full_name:{
        type:String,
        required:true,
        maxlength:100,
        trim:true
    },
    password:{
        type:String,
        required:true,
        maxlength:255,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:255,
        lowercase:true,
        trim:true
    }
},{
    timestamps:true
});
const item=mongoose.model("register",md);

export default item;