import express from "express";
import { addCoupon, coupons } from "./controller/coupon.controller.js";
import { auth } from "../../middlewares/auth.js";
const couponRouter = express.Router();

couponRouter.get("/coupon", coupons);
couponRouter.post("/coupon", auth, addCoupon);

export default couponRouter;
