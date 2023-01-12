import express from "express";
import articleRoutes from "../routes/api/articleRoutes";
import messageRoutes from "../routes/api/messages";
import commentRoutes from "../routes/api/commentRoutes"
import likesRoutes from "../routes/api/likesRoutes"
import swaggerDoc from "../../swagger"
import swaggerUiExpress from "swagger-ui-express"

const routes = express.Router();

routes.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));

routes.use("/articles", articleRoutes);
routes.use("/messages", messageRoutes);
routes.use("/articles", commentRoutes);
routes.use("/articles", likesRoutes);
// routes.use("/users")

export default routes;