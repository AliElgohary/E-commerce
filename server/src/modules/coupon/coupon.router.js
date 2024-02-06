import express from "express";
import { addCoupon, applyCoupon, coupons, deleteCoupon, updateCoupon } from "./controller/coupon.controller.js";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { couponSchema, updateCouponSchema } from "./coupon.validation.js";
const couponRouter = express.Router();

couponRouter.get("/coupon", coupons);

couponRouter.post("/coupon", validate(couponSchema), auth, addCoupon);

couponRouter.put('/coupon' ,validate(updateCouponSchema) ,auth, updateCoupon)

couponRouter.patch('/coupon', auth, applyCoupon)

couponRouter.delete('/coupon', auth, deleteCoupon)

export default couponRouter;
