import express from "express";
import { createCart, updateCart } from "./controller/cart.controller.js";
import { auth } from "../../middlewares/auth.js";
const cartRouter = express.Router();

cartRouter.post("/cart", auth, createCart);

cartRouter.patch("/cart", auth ,updateCart);

export default cartRouter;
