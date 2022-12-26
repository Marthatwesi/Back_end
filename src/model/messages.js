import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;