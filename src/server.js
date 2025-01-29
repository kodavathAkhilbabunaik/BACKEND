import dotenv from "dotenv";
import connectionURL from "./DB/database.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
dotenv.config({
    path:"./env",
});
app.use(express.json());
app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true,
}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
connectionURL()
.then(()=>{
    console.log("connection successfull");
})
.catch((error)=>{
    console.log("connection failed",error);
})

