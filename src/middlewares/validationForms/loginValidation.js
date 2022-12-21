import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, { abortEarly: false})

const logInSchema = Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().min(5).trim(),
})
 
const validateLogin = validateForm(logInSchema)

export default validateLogin;