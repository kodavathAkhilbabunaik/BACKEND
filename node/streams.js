import fs from "fs";
import http from "http";
const readablestream=fs.createReadStream("node/file.txt","utf-8");
readablestream.on("data",(chunks)=>{
    console.log("file reading:",chunks);
});
readablestream.on("end",()=>{
    console.log("reading finished");
});
readablestream.on("error",()=>{
    console.error("error occured");
});