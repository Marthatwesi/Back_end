import validatesignUp from "./signupValidation";
import validateLogin from "./loginValidation";


const signUpValidation = (req, res, next)=> {
const {error} = validatesignUp(req.body);

if(error){
    res.status(400).json({signUpvalidationError:error.details.map((e) => {
        return e.message.replace(/[^a-zA-Z0-9 ]/g, "")

    })})
}else{
    next()
}
}

const loginValidation = (req, res, next)=> {
    const {error} = validateLogin(req.body);
    
    if(error){
        res.status(400).json({loginvalidationError:error.details.map((e) => {
            return e.message.replace(/[^a-zA-Z0-9 ]/g, "")
    
        })})
    }else{
        next()
    }
}

export  {signUpValidation,loginValidation};