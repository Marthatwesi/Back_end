import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, { abortEarly: false})

const signUpSchema = Joi.object({
    name: Joi.string().min(1).trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(5).trim().required(),
})
 
const validatesignUp = validateForm(signUpSchema)

export default validatesignUp;