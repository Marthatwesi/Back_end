import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, { abortEarly: false})

const messagesSchema = Joi.object({
    name: Joi.string().required().min(1).trim(),
    email: Joi.string().email().required().trim(),
    message: Joi.string().required().min(15).trim(),
})
  
const validateMessage = validateForm(messagesSchema)

export default validateMessage;

