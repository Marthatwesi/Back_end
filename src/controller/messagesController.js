import validateMessage from "../middlewares/validationForms/messagesValidation";
import Messages from "../model/messages";
import { MessagesService } from "../services/messagesService";

export class MessagesController {
  static async sendMessage(req, res) {
    const {error} = validateMessage(req.body)
    if (error){
      return res.status(400).send(error.details.map((e) => {
        return e.message.replace(/[^a-zA-Z0-9 ]/g, "")


    }))}else{
      try {
        const { name, email, message } = req.body;
        const data = new Messages({
          name: name,
          email: email,
          message: message,
        });
        const messagesent = await MessagesService.sendMessage(data);
        res.status(200).json({ message: "Message sent successfully", data: messagesent });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "The server is facing internal erros, fix them"});
      }
    }
    
  }

  static async viewMessage(req, res) {
    try {
      const message = await MessagesService.getMessages();
      // console.log(message)
      res.status(200).json({message});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "The server is facing internal errors, fix them" });
    }

  }
  static async deleteMessage(req, res) {
    try {
      const message = await MessagesService.deleteMessage(req.params.id)
      res.status(200).json({message:"message  deleted successfully"});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "The server is facing internal errors, fix them" });
    }

  }
}
