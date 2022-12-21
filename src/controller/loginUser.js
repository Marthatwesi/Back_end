import exportVariable from "../model/signUpUser";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const newlogin = async (req, res) =>{
    const User = await exportVariable.findOne({
        email:req.body.email
    })
    if(!User) return res.status(400).send("Invalid email or password, Try again");
    const checkPassword = await bcrypt.compare(req.body.password,User.password)
    if(!checkPassword) return res.status(400).send("Invalid Password or password, Try again")

    const giveToken = Jwt.sign({
        name:User.name,
        id:User._id,
        email:User.email
        }, process.env.MY_SECRET_TOKEN);
 
   const loginObj = {
        username: User.name,
        useremail: User.email,
        UserToken:giveToken
   }
    res.header("martha-Token", giveToken).send(loginObj)

}

export default newlogin;
