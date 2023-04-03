// const { response } = require("express");
// const express = require("express");
// const mongoose = require("mongoose");
import express,{Express,Request,Response} from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import theaterRouter from "./routes/Theaters.api"
dotenv.config();
// const theatersApi = require("./routes/Theaters.api");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";
const app:Express = express();

let name:string = "<h1>Day-90-Express-Typescript</h1>";
let phoneNumber:number = 99119911;
let isMarried:boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3",];
let sheep:string[]= ["sheep1", "sheep2", "sheep3"];
let sheepObject: {name:string, age:number} ={
  name:"sheep1",
  age:1,
};
sheepObject.name = "sheep2";
sheepObject.age = 2;
interface Student {
  name:string,
  age:number,
  isVerified:boolean,
}
// name = "12";

// app.use("/theater", theatersApi);

app.use(express.json());
app.get("/", (req: Request, res:Response) => {
  res.status(200).send(name);
});
app.use("/theaters",theaterRouter)


app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
