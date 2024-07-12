import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential:true
}))

app.use(express.json({limit: "16kb"})) //setting up limit of receiving json file

app.use(express.urlencoded({extended:true ,limit: "16kb"})) //urlencoded eg, %20..

app.use(express.static("public")) //will put files in public folder like favicon and assets

app.use(cookieParser()) // Extracts the cookie data from the HTTP request and converts it into a
                        // usable format that can be accessed by the server-side code


//importing routes         
import userRouter from './routes/user.routes.js'


//routes declarations
app.use("/api/v1/users", userRouter)

export {app};