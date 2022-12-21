import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, { abortEarly: false})

const commentSchema = Joi.object({
    name: Joi.string().required().min(1).trim(),
    comment: Joi.string().required().min(5).trim(),
})
 
const validateComment = validateForm(commentSchema)

export default validateComment;