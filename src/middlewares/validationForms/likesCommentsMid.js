import jwt from "jsonwebtoken";
import exportVariable from "../../model/signUpUser";


const likesCommentsMid = async (req, res, next) => {
  try {
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
      res.status(401).json({ Message: "login first please" });
    } else {
      const token = bearerToken.split(" ")[1];
      const verified = jwt.verify(token, process.env.MY_SECRET_TOKEN);
      const uEmail = verified.email;
      const uName = verified.name;
      const exists = await exportVariable.findOne({ email: uEmail });
      if (!exists) {
        res.status(401).json({ message: "login first please" });
      } else {
        res.locals.email = uEmail;
        res.locals.name = uName;
       
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};

export default likesCommentsMid;