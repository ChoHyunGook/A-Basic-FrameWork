import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import Service from "../services/service.js";
dotenv.config()


const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}
const app = express()

app.use(cors({
    origin:true,
    credentials: true
}))


app.use(function(_req, res, next) {
    res.header(
        "Access-Control-Allow-Tabletheaders",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin", "*"
    );
    next();
});


app.get('/',cors(corsOptions),(req,res)=>{
    Service().service(req,res)
})


export default app


