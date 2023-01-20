import mongoose from "mongoose";
const date= new Date();
const monthdata= date.getMonth() + 1;
let month; 

if(monthdata == 1){
    month= "January"
}else if(monthdata == 2){
    month = "Febuary"
}else if(monthdata == 3){
    month = "March"
}else if(monthdata == 4){
    month = "April"
}else if(monthdata == 5){
    month = "May"
}else if(monthdata == 6){
    month = "June"
}else if(monthdata == 7){
    month = "July"
}else if(monthdata == 8){
    month = "August"
}else if(monthdata == 9){
    month = "September"
}else if(monthdata == 10){
    month = "October"
}else if(monthdata == 11){
    month = "November"
}else if(monthdata == 12){
    month = "December"
}
const day = date.getDate();
const year= date.getFullYear();
const dateCreated = `${month} ${day}, ${year}`

const messageSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  created_on: {type: String, default:dateCreated}
});

const Message = mongoose.model("Message", messageSchema);

export default Message;