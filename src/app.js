// const express = require("express");
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./routes";
import passport from "passport";
import authRoutes from './routes/api/authRoutes'

const secureRoute = "./secure-routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));



try {
 
  mongoose.connect("mongodb+srv://Marthacj:meHtO83e0hDoGn0T@cluster0.s7i8s7x.mongodb.net/?retryWrites=true",{ useNewUrlParser: true },(err) => {
    if(err) console.log(err)
    else console.log("mongdb is connected");
   });


  app.use("/api", routes);
  app.use("/user", authRoutes);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "RESOURCE NOT FOUND" });
  });
  app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}


export default app;