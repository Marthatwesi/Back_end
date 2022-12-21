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
  signUp
)
 
router.post(
  '/login',
  loginValidation,
  newlogin
)

router.post(
  '/admin',
  validateAdmin,
  signUpValidation,
  AdminsignUp
)

export default router;


