import express from "express";
import { addUserSchema, updateUserSchema } from "./user.validaftion.js";
import { validate } from "../../middlewares/validate.js";
import {
  addUser,
  deactivate,
  getUsers,
  resetPassword,
  signIn,
  updateUser,
  verifyAccount,
} from "./controller/user.controller.js";
import { auth, adminAuth } from "../../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.post("/users", validate(addUserSchema), addUser);

userRouter.post("/users/signin", signIn);

userRouter.put("/users", auth, deactivate);

userRouter.patch("/users", validate(updateUserSchema), adminAuth, updateUser);

userRouter.get("/users/verify/:token", verifyAccount )

userRouter.put("/users/reset", auth, resetPassword)

export default userRouter;
