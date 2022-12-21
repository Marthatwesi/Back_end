import  mongoose from "mongoose";

const signupSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String   
})
const exportVariable= mongoose.model('Signup', signupSchema);

export default exportVariable;