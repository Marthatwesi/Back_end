import express from "express";
import sendComment from "../../controller/commentController";
import getComment from "../../controller/commentController";
import getAllComments from "../../controller/getComment";
import likesCommentsMid from "../../middlewares/validationForms/likesCommentsMid";

const route = express.Router();
 route.post("/:id/comment",likesCommentsMid,sendComment)
 route.get("/:id/comment",getAllComments)


export default route;