import express from "express";
import { applyCoupon, createCart, updateCart } from "./controller/cart.controller.js";
import { auth } from "../../middlewares/auth.js";
const cartRouter = express.Router();

cartRouter.post("/cart", auth, createCart);

cartRouter.patch("/cart", auth ,updateCart);

cartRouter.put("/cart/coupon", auth, applyCoupon);

export default cartRouter;
