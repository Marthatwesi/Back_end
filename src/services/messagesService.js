import Messages from "../model/messages";

export class MessagesService {
  static async sendMessage(data) {
    return await data.save();
  }
  static async getMessages() {
    const messages = await Messages.find();
    return messages;
  }
  static async deleteMessage(id) {
    const message = await Messages.deleteOne({_id:id});
    return true;
  }
  
}