import Joi from "joi";

export const couponSchema = Joi.object({
    couponCode: Joi.string().min(3).max(20).required(),
    value: Joi.number().min(1).required(),
    expireIn: Joi.date().required(),
})

export const updateCouponSchema = Joi.object({
    couponCode: Joi.string().min(3).max(20).required(),
    value: Joi.number().min(1).required(),
    expireIn: Joi.date().required(),
})
