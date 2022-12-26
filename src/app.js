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


const port = process.env.PORT || 4000;

try {
 
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

  app.use("/api", routes);
  app.use("/user", authRoutes);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "RESOURCE NOT FOUND" });
  });
  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}


export default app;