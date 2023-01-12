import express from "express";
import { MessagesController } from "../../controller/messagesController";
import authenticateMyToken from "../../auth/passAuth";
import passport from "passport";

authenticateMyToken();

const route = express.Router();

route.post("/api/messages", MessagesController.sendMessage,()=>{
// #swagger.tags = ['Messages']
// #swagger.description = 'client sends a message'
// #swagger.summary = 'send Message'
/* #swagger.parameters['Messages'] = {
               in: 'body',
               description: 'message',
               required: true,
               schema: { $ref: "#/definitions/Messages" }
  } */

});
route.get("/api/messages",passport.authenticate('jwt', { session: false }), MessagesController.viewMessage,()=>{
    // #swagger.tags = ['Messages']
    // #swagger.description = 'admin gets all messages'
    // #swagger.summary = 'gets Messages'
    /* #swagger.parameters['Messages'] = {
                   in: 'body',
                   description: 'message',
                   required: true,
                   schema: { $ref: "#/definitions/Messages" }
      } */
    /* #swagger.security = [{
        "apiKeyAuth": []
  }] */
    });
route.delete("/api/messages/:id",passport.authenticate('jwt', { session: false }), MessagesController.deleteMessage,()=>{
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Admin deletes a message'
    // #swagger.summary = 'delete Message'
    /* #swagger.parameters['Messages'] = {
                   in: 'body',
                   description: 'message',
                   required: true,
                   schema: { $ref: "#/definitions/Messages" }
      } */
    /* #swagger.security = [{
        "apiKeyAuth": []
  }] */
});

export default route;