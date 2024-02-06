import express from 'express';
import { auth } from "../../middlewares/auth.js";
import { cashPayment, onlinePayment } from './controller/order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/order/cash' , auth , cashPayment)

orderRouter.post('/order/online', auth , onlinePayment)

export default orderRouter