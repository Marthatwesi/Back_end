import express from "express";
import sendComment from "../../controller/commentController";
import getComment from "../../controller/commentController";
import getAllComments from "../../controller/getComment";
import likesCommentsMid from "../../middlewares/validationForms/likesCommentsMid";

const route = express.Router();
 route.post("/articles/:id/comment",likesCommentsMid,sendComment,()=>{
    // #swagger.tags = ['Articles']
    // #swagger.description = 'client comments an article'
    // #swagger.summary = 'comment'
    /* #swagger.parameters['Articles'] = {
                   in: 'body',
                   description: 'Posts comment',
                   required: true,
                   schema: { $ref: "#/definitions/Comment" }
      } */
    /* #swagger.security = [{
        "apiKeyAuth": []
  }] */
 })
 route.get("/articles/:id/comment",getAllComments,()=>{
    // #swagger.tags = ['Articles']
    // #swagger.description = 'Admin comments an article'
    // #swagger.summary = 'Get comments'
    
 })


export default route;