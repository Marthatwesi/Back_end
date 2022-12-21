import signupSchema from "../model/signUpUser";
import bcrypt from "bcrypt";

const signUp =async (req, res)=> {
    const checkEmail = await signupSchema.findOne({email: req.body.email})
    if(checkEmail) return res.status(409).send("This email already exists");

    const passwordHashValue = await bcrypt.genSalt(10);
    const passwordHashed =  await bcrypt.hash(req.body.password, passwordHashValue);

    

    const userSignUp = new signupSchema({
        name:req.body.name,
        email:req.body.email,
        password:passwordHashed
    })
    await userSignUp.save();
    res.send(userSignUp);

}

export default signUp;