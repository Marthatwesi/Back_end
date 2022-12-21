import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, {
    abortEarly: false
})

const articleSchema = Joi.object({
    title: Joi.string().required().min(1).trim(),
    content: Joi.string().required().min(5).trim(),
    image: Joi.string().required(),
})

const likesSchema = Joi.object({
    email: Joi.string().email().required(),
})
const validateLikes = validateForm(likesSchema)

const validateArticle = validateForm(articleSchema)

export {
    validateLikes,
    validateArticle
};