import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import {config} from "dotenv";
import express from 'express';
import { app } from "./app.js";

config({path:'config.env'});
console.log(process.env.PORT);
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
}).catch((err) =>{
    console.log("Connnection falied : ",err);
})
