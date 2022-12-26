import express from "express";
import { MessagesController } from "../../controller/messagesController";
import authenticateMyToken from "../../auth/passAuth";
import passport from "passport";

authenticateMyToken();

const route = express.Router();

route.post("/", MessagesController.sendMessage);
route.get("/",passport.authenticate('jwt', { session: false }), MessagesController.viewMessage);
route.delete("/:id",passport.authenticate('jwt', { session: false }), MessagesController.deleteMessage);

export default route;