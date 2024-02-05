import express from "express";
import { createCart } from "./controller/cart.controller.js";
import { auth } from "../../middlewares/auth.js";
const cartRouter = express.Router();

cartRouter.post("/cart", auth, createCart);

export default cartRouter;
