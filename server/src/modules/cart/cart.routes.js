import express from "express";
import { applyCoupon, createCart, getUserCart, updateCart } from "./controller/cart.controller.js";
import { auth } from "../../middlewares/auth.js";
const cartRouter = express.Router();

cartRouter.get('/cart', auth, getUserCart);

cartRouter.post("/cart", auth, createCart);

cartRouter.patch("/cart", auth ,updateCart);

cartRouter.put("/cart/coupon", auth, applyCoupon);

export default cartRouter;
