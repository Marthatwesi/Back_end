import express from "express";
import { ArticleController } from "../../controller/articleController";
import editArticle from "../../controller/editArticleController";
import authenticateMyToken from "../../auth/passAuth";
import passport from "passport";
import validateAdmin from "../../middlewares/validationForms/adminValidation";


authenticateMyToken();
const route = express.Router();

route.post("/api/articles",validateAdmin,passport.authenticate('jwt', { session: false }),ArticleController.createArticle,()=>{

// #swagger.tags = ['Articles']
// #swagger.description = 'Admin Creates a Article'
// #swagger.summary = 'Create/Post Article'
/* #swagger.parameters['Article'] = {
               in: 'body',
               description: 'Necessary Article Details',
               required: true,
               schema: { $ref: "#/definitions/Article" }
  } */
/* #swagger.security = [{
        "apiKeyAuth": []
  }] */
});
route.get("/api/articles", ArticleController.viewArticle,()=>{

  // #swagger.tags = ['Articles']
  // #swagger.description = 'client gets all Articles'
  // #swagger.summary = 'gets Articles'
  /* #swagger.security = [{
          "apiKeyAuth": []
    }] */
  });
route.get("/api/articles/:id",ArticleController.viewOneArticle,()=>{

  // #swagger.tags = ['Articles']
  // #swagger.description = 'Client view one Article'
  // #swagger.summary = 'views one Article'
  /* #swagger.parameters['Article'] = {
                 in: 'body',
                 description: 'Necessary Article Details',
                 required: true,
                 schema: { $ref: "#/definitions/Article" }
    } */
  /* #swagger.security = [{
          "apiKeyAuth": []
    }] */
  });



route.delete("/api/articles/:id", validateAdmin,passport.authenticate('jwt', { session: false }),ArticleController.deleteArticle,()=>{
// #swagger.tags = ['Articles']
// #swagger.description = 'Admin Creates a Article'
// #swagger.summary = 'Deletes Article'
/* #swagger.security = [{
        "apiKeyAuth": []
  }] */
});
route.put("/api/articles/:id", validateAdmin, passport.authenticate('jwt', { session: false }) ,editArticle,()=>{
// #swagger.tags = ['Articles']
// #swagger.description = 'Admin Creates a Article'
// #swagger.summary = 'Edits Article'
/* #swagger.parameters['Article'] = {
               in: 'body',
               description: 'Necessary Article Details',
               required: true,
               schema: { $ref: "#/definitions/Article" }
  } */
/* #swagger.security = [{
        "apiKeyAuth": []
  }] */
});


export default route;
