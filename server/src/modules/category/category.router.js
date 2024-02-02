import express from "express";
import {
  addCategory,
  getCategories,
  updateCategory,
} from "./controller/category.controller.js";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { categorySchema, updateCategorySchema } from "./category.validation.js";
const categoryRouter = express.Router();

categoryRouter.get("/category", getCategories);

categoryRouter.post("/category", auth, validate(categorySchema), addCategory);

categoryRouter.patch(
  "/category/:id",
  auth,
  validate(updateCategorySchema),
  updateCategory
);

export default categoryRouter;
