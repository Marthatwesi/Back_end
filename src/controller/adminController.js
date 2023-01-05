import exportAdmin from "../model/admin";
import bcrypt from "bcrypt";

const AdminsignUp =async (req, res)=> {
    const checkEmail = await exportAdmin.findOne({email: req.body.email})
    if(checkEmail) return res.status(409).send("This email already exists");

    const passwordHashValue = await bcrypt.genSalt(10);
    const passwordHashed =  await bcrypt.hash(req.body.password, passwordHashValue);


    const userSignUp = new exportAdmin({
        name:req.body.name,
        email:req.body.email,
        password:passwordHashed
    })
    await userSignUp.save();
    res.send(userSignUp);

}

export default AdminsignUp;