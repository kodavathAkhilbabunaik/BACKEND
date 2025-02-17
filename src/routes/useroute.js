import express from "express";
import asynchandler from "../utils/asynchandler.js";
import User from "../models/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router=express.Router();
router.post("/register",asynchandler(async(req,res)=>{
    try {
        const {username,password,email}=req.body;
    if([username,password,email].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"all the fileds are required");
    };
    const existeduser=await User.findOne({
        $or:[{username},{email}]
    });
    const hashpassword=await bcrypt.hash(password,10);
    if(existeduser){
        throw new ApiError(400,"user already exist");
    }
    console.log("HASHEDPASSWORD:",hashpassword);
    const user=await User.create({
        username,password:hashpassword,email});
    console.log("before jwt");
    const refreshtokens=[];
    const accesstoken=await jwt.sign({username},"accesstoken",{expiresIn:"1h"})
    const refreshtoken=await jwt.sign({username},"refreshtoken",{expiresIn:"1w"});
    refreshtokens.push(refreshtoken);
    console.log("ACCESS-TOKEN:",accesstoken);
    console.log("REFRESH-TOKEN:",refreshtoken);
    res.cookie("accesstoken",accesstoken,{
        httponly:true,
        secure:true,
        maxAge:3600000,
        sameSite:strict
    });
    res.cookie("refreshtoken",refreshtoken,{
        httponly:true,
        secure:true,
        maxAge:3600000000,
        sameSite:strict
    })
    return res.status(201).json(
        new ApiResponse(201,user,"user registered")
    )  
    }catch (error) {
        new ApiError(400,"something went wrong",)
    }
}));
export default router;