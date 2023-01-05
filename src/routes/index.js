import express from "express";
import articleRoutes from "../routes/api/articleRoutes";
import messageRoutes from "../routes/api/messages";
import commentRoutes from "../routes/api/commentRoutes"
import likesRoutes from "../routes/api/likesRoutes"

const routes = express.Router();


routes.use("/articles", articleRoutes);
routes.use("/messages", messageRoutes);
routes.use("/articles", commentRoutes);
routes.use("/articles", likesRoutes);
// routes.use("/users")

export default routes;