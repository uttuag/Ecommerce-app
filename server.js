import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';


//config env 
dotenv.config();

//database
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send("<h1> Welcome to e-commerce app </h1>");
});

//Port
const Port=process.env.Port || 8080;

//run listen
app.listen(Port,() =>{
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${Port}`.bgCyan.white);
});

