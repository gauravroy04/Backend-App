import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGO_URI}/{DB_NAME}`);
        console.log("Conncected at host: ",(await connectionInstance).connection.host);
    } catch (error) {
        console.error("Errr: ", error);
        throw error;
    }
}

export default connectDB;