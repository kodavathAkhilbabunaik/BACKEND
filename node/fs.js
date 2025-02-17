import fs from "fs";
import http from "http";
import url from "url";
fs.readFile("node/file.txt","utf-8",(err,data)=>{
    //whil reading files through async always use cb(err,data)
    //console.log("file data:",data);
});

const a=fs.readFileSync("node/file.txt","utf-8");
//console.log(a);
const b="hello am akhil writing files";
const c=fs.writeFile("node/write.txt",b,(err,data)=>{
    if(err){
        console.error("error while writing the file",err);
    }
    else{
        //console.log("data added");
    }
});
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName==="/"){
        res.end("hello am akhil from  home server");
    }
    else if(pathName==="/user"){
        res.end("this is user ")
    }
    else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.end("<h1>ERROR</h1>");
    }
})
server.listen(3000,()=>{
    console.log("server listening on 3000");
});