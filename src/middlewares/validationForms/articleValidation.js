import Joi from "joi";

const validateForm = (schema) => (payload) => schema.validate(payload, {
    abortEarly: false
})

const articleSchema = Joi.object({
    title: Joi.string().min(1).trim().required(),
    content: Joi.string().min(5).trim().required(),
    image: Joi.string()
})
const updateSchema = Joi.object({
    title: Joi.string().min(1).trim(),
    content: Joi.string().min(5).trim(),
    image: Joi.string()
})
const likesSchema = Joi.object({
    email: Joi.string().email().required(),
})

const validateLikes = validateForm(likesSchema)
const validateArticle = validateForm(articleSchema)
const updateArticle = validateForm(updateSchema)

export {
    validateLikes,
    validateArticle,
    updateArticle
};