import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const DB = (()=>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err) =>{
        console.log("Error Connecting To DB");
        
    })
})

export default DB