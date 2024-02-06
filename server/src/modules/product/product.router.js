import express from "express";
import {
  addProduct,
  getProductsWithCategory,
  productPagination,
  products,
  updateProduct,
} from "./controller/product.controller.js";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { productSchema, updateProductSchema } from "./product.validation.js";

const productRouter = express.Router();

productRouter.get("/product", products);

productRouter.get("/products/category", getProductsWithCategory);

productRouter.post("/product", auth, validate(productSchema), addProduct);

productRouter.patch(
  "/product/:id",
  auth,
  validate(updateProductSchema),
  updateProduct
);

productRouter.get("/products/paginate", productPagination);

export default productRouter;
