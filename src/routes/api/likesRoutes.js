import express from "express";
import { likesController } from "../../controller/likesController";
import likesCommentsMid from "../../middlewares/validationForms/likesCommentsMid";


const route = express.Router();
route.post("/:id/likes",likesCommentsMid,likesController.hearts)


export default route;