import express from "express";
import { addProduct, getProductsWithCategory, products } from "./controller/product.controller.js";
import { auth } from "../../middlewares/auth.js";

const productRouter = express.Router();

productRouter.get('/product', products )

productRouter.get('/products/category', getProductsWithCategory)

productRouter.post("/product", auth, addProduct);

export default productRouter;
