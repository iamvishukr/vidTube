import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()





















// const dotenv = require('dotenv')

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// import connectDB from "./db";
// // const app = express();
// (async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error", (err) =>{
//         console.error("ERROR", err);
//         throw err;
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log("listening on port " + process.env.PORT);
//        })
//     } catch (error) {
//         console.log("Error: ", error);
//         throw error;
//     }
// })();   