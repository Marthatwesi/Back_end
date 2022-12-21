// const express = require("express");
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./routes";
import passport from "passport";
import articleRoutes from "./routes/api/articleRoutes";
import messageRoutes from "./routes/api/messages";
import commentRoutes from "./routes/api/commentRoutes"
import likesRoutes from "./routes/api/likesRoutes"
import authRoutes from './routes/api/authRoutes'
import swaggerDoc from "../swagger_output.json" assert{type:"json"}
import swaggerUiExpress from "swagger-ui-express"

const secureRoute = "./secure-routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));



try {
 
  mongoose.connect(process.env.REMOTE_URL,{ useNewUrlParser: true },(err) => {
    if(err) console.log(err)
    else console.log("mongdb is connected");
   });


  
  app.use("/api", articleRoutes);
  app.use("/api", messageRoutes);
  app.use("/api", commentRoutes);
  app.use("/api", likesRoutes);
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