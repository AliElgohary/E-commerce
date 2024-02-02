import Joi from "joi";

export const productSchema = Joi.object({
    productName: Joi.string().min(3).max(20).required(),
    slug: Joi.string().required(),
    priceAfterDiscount: Joi.number().min(0).required(),
    finalPrice: Joi.number().min(0).required(),
    image: Joi.string(),
    category: Joi.string(),
    stock: Joi.number().min(0).required(),
})


