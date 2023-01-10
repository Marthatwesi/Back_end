import express from "express";
import { likesController } from "../../controller/likesController";
import likesCommentsMid from "../../middlewares/validationForms/likesCommentsMid";


const route = express.Router();
route.post("/articles/:id/likes",likesCommentsMid,likesController.hearts,()=>{
    // #swagger.tags = ['Articles']
    // #swagger.description = 'client likes an article'
    // #swagger.summary = 'likes article'
    /* #swagger.parameters['Articles'] = {
                   in: 'body',
                   description: 'likes',
                   required: true,
                   schema: { $ref: "#/definitions/Articles" }
      } */
    /* #swagger.security = [{
        "apiKeyAuth": []
  }] */
})


export default route;