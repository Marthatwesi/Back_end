import  mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String   
})
const exportAdmin= mongoose.model('Admin', adminSchema);

export default exportAdmin;