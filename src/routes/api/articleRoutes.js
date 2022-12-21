import express from "express";
import { ArticleController } from "../../controller/articleController";
import editArticle from "../../controller/editArticleController";
import authenticateMyToken from "../../auth/passAuth";
import passport from "passport";
import validateAdmin from "../../middlewares/validationForms/adminValidation";


authenticateMyToken();
const route = express.Router();

route.post("/",validateAdmin,passport.authenticate('jwt', { session: false }),ArticleController.createArticle);
route.get("/",validateAdmin, ArticleController.viewArticle);
route.get("/:id",ArticleController.viewOneArticle);

route.delete("/:id", validateAdmin,passport.authenticate('jwt', { session: false }),ArticleController.deleteArticle);
route.put("/:id", validateAdmin, passport.authenticate('jwt', { session: false }) ,editArticle);


export default route;
