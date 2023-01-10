import express from "express";
import jwt from "jsonwebtoken";
import newlogin from "../../controller/loginUser";
import signUp from "../../controller/signupController";
import AdminsignUp from "../../controller/adminController";
import { signUpValidation } from "../../middlewares/validationForms/allValidations";
import { loginValidation } from "../../middlewares/validationForms/allValidations";
import validateAdmin from "../../middlewares/validationForms/adminValidation";


const router = express.Router();
router.post(
  '/signup',
  signUpValidation,
  signUp, ()=>{
// #swagger.tags = ['Signup']
// #swagger.description = 'client or admin signs up'
// #swagger.summary = 'Sign up'
/* #swagger.parameters['Signup'] = {
               in: 'body',
               description: 'signup details',
               required: true,
               schema: { $ref: "#/definitions/Signup" }
  } */
/* #swagger.security = [{
        "apiKeyAuth": []
  }] */
  }
)
 
router.post(
  '/login',
  loginValidation,
  newlogin, ()=>{
    // #swagger.tags = ['Login']
    // #swagger.description = 'client or admin logs in'
    // #swagger.summary = 'Login'
    /* #swagger.parameters['Login'] = {
                   in: 'body',
                   description: 'login details',
                   required: true,
                   schema: { $ref: "#/definitions/Login" }
      } */
    /* #swagger.security = [{
            "apiKeyAuth": []
      }] */
    }
)

router.post(
  '/admin',
  validateAdmin,
  signUpValidation,
  AdminsignUp, ()=>{
    // #swagger.tags = ['Admin']
    // #swagger.description = 'admin signs up'
    // #swagger.summary = 'Login/signup'
    /* #swagger.parameters['Admin'] = {
                   in: 'body',
                   description: 'login details',
                   required: true,
                   schema: { $ref: "#/definitions/Admin" }
      } */
    /* #swagger.security = [{
            "apiKeyAuth": []
      }] */
    }
)

export default router;


