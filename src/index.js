import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import {config} from "dotenv";
import express from 'express';

config({path:'config.env'});
console.log(process.env.PORT);
connectDB();
console.log("Working");