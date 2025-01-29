const http=require("http");
 const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"plain/text"});
    res.end("hello am akhil from node js");
});

server.listen(3000,()=>{
    console.log("server running");
});