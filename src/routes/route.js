import express from "express";
import asynchandler from "../utils/asynchandler.js";
import User from "../models/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiRespnse.js";
const router=express.Router();
router.post("/register",asynchandler(async(req,res)=>{
    const {username,password,email}=req.body;
    if([username,password,email].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"all the fileds are required");
    };
    const existeduser=await User.findone({
        $or:[{username},{email}]
    });
    if(existeduser){
        throw new ApiError(400,"user already exist");
    }
    const user=await User.create({
        username,password,email});
    return res.status(201).json(
        new ApiResponse(200,user,"user registered")
    )
}));
export default router;