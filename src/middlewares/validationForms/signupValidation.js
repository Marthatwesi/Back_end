import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, { abortEarly: false})

const signUpSchema = Joi.object({
    name: Joi.string().required().min(1).trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().min(5).trim(),
})
 
const validatesignUp = validateForm(signUpSchema)

export default validatesignUp;