import mongoose from "mongoose";
const videoSchema=new mongoose.Schema({
    username1:{
        type:String,
        required:true,
        unique:true,
    },
    password1:{
        type:String,
        required:true,
        unique:true,
    },
    email1:{
        type:String,
        required:true,
        unique:true,
    },
    age1:{
        type:Number,
        required:true
    },
    id1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})
const Video=mongoose.Model("Video",videoSchema);
export default Video;