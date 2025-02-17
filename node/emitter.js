import EventEmitter from "events";
import http from "http";
class akhil1 extends EventEmitter{
    constructor(){
        super();
    }
}
//const emitter=new EventEmitter();
// emitter.on("a",()=>{
//     console.log("hello");
// })
const akhil=new EventEmitter;
akhil.on("req",()=>{
    console.log("hello am from emitter");
});
akhil.on("res",(a)=>{
    console.log(`there are ${a}apples`);
})
akhil.emit("req");
akhil.emit("res",10);
const server=http.createServer();
server.on("request",(req,res)=>{
    console.log("req........");
    res.end("evemt emitter");
})
server.listen(4000,()=>{
    console.log("event listening on server 4000");
})