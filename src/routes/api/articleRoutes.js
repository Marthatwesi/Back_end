import express from "express";
import { ArticleController } from "../../controller/articleController";
import editArticle from "../../controller/editArticleController";
import authenticateMyToken from "../../auth/passAuth";
import passport from "passport";
import validateAdmin from "../../middlewares/validationForms/adminValidation";
import upload from "../../helpers/multer";


authenticateMyToken();
const route = express.Router();

route.post("/articles",validateAdmin,passport.authenticate('jwt', { session: false }),upload.single("image"),ArticleController.createArticle,()=>{

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
route.get("/articles", ArticleController.viewArticle,()=>{

  // #swagger.tags = ['Articles']
  // #swagger.description = 'client gets all Articles'
  // #swagger.summary = 'gets Articles'
  /* #swagger.security = [{
          "apiKeyAuth": []
    }] */
  });
route.get("/articles/:id",ArticleController.viewOneArticle,()=>{

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



route.delete("/articles/:id", validateAdmin,passport.authenticate('jwt', { session: false }),ArticleController.deleteArticle,()=>{
// #swagger.tags = ['Articles']
// #swagger.description = 'Admin Creates a Article'
// #swagger.summary = 'Deletes Article'
/* #swagger.security = [{
        "apiKeyAuth": []
  }] */
});
route.patch("/articles/:id",validateAdmin,passport.authenticate('jwt', { session: false }),upload.single("image"),editArticle,()=>{
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
