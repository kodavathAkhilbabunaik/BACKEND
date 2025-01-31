import mongoose from "mongoose";
const connectionURL=async ()=>{
    try{
        const DB_URL=await mongoose.connect("mongodb+srv://Akhil2811:Akhil123@cluster0.mhbb2.mongodb.net/");
        console.log(`\n DATABASE CONNECTED SUCCESSFULL: ${DB_URL.connection.host}`);

    }catch(error){
        console.error("MANGODB CONNECTION FAILED:",error);
        process.exit(1);
    }
}
export default connectionURL;