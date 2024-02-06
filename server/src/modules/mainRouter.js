import express from 'express';
import userRouter from './user/user.router.js';
import productRouter from './product/product.router.js';
import categoryRouter from './category/category.router.js';
import couponRouter from './coupon/coupon.router.js';
import cartRouter from './cart/cart.routes.js';
import orderRouter from './order/order.router.js';


const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(productRouter);
mainRouter.use(categoryRouter);
mainRouter.use(couponRouter);
mainRouter.use(cartRouter);
mainRouter.use(orderRouter)

export default mainRouter