import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN, credentials: true
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser);

//Routes
// import userRouter from './routes/user.routes.js';


//Declaration
app.get("/", (req,res) => {     
    res.status(200).json({success:true, message:"ok"}); 
});
// app.use("/api/v1/users", userRouter);

export {app}