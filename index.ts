import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import movieRouter from "routers/movieRouter";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());

app.get("/",(req: Request, res: Response)=> {
    res.sendStatus(httpStatus.OK);
});

app.use(movieRouter);
const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
})