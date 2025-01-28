require('dotenv').config();
const express=require("express");
const app=express();
const PORT =4000;
app.get("/",(req,res)=>{
    res.send("hello am akhil");
});
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${PORT}`);
});