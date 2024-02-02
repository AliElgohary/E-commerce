import "dotenv/config";
import express from "express";
import initialConnections from "./db/initConnection.js";
import userRouter from "./src/modules/user/user.router.js";
import cors from "cors";
import productRouter from "./src/modules/product/product.router.js";
import categoryRouter from "./src/modules/category/category.router.js";

const app = express();
app.use(cors());
app.use("*", cors());
app.use(express.json());
initialConnections();

app.use(userRouter);
app.use(productRouter);
app.use(categoryRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
