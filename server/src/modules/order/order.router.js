import express from 'express';
import { auth } from "../../middlewares/auth.js";
import { cashPayment } from './controller/order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/order/cash' , auth , cashPayment)

export default orderRouter