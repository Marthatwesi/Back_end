import exportAdmin from "../../model/admin";
import jwt from "jsonwebtoken";

const validateAdmin = async (req, res, next) => {
  try {
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
      res.status(401).json({ Message: "You are Not Authorized" });
    } else {
      const token = bearerToken.split(" ")[1];
      const verified = jwt.verify(token, process.env.MY_SECRET_TOKEN);
      const uEmail = verified.email;
      const uName = verified.name;
      const exists = await exportAdmin.findOne({ email: uEmail });
      if (!exists) {
        res.status(401).json({ message: "You are Not authorized" });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};
export default validateAdmin;