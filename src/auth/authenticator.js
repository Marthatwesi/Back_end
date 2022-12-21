import Jwt from "jsonwebtoken";

const authenticateMyToken = (req, res, next)=> {
    const tokenGiven = req.header("martha-Token")
    if(!tokenGiven) return res.status(401).send("Access Denied");
    try {
        const grantAccess = Jwt.verify(tokenGiven, process.env.MY_SECRET_TOKEN);
        req.user = grantAccess;
        next()
    } catch (err) {
      res.status(400).send("Invalid Token")
    }
}
export default authenticateMyToken;