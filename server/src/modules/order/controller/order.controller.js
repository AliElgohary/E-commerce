import cartModel from "../../../../db/models/cart.model.js";
import userModel from "../../../../db/models/user.model.js";
import orderModel from "../../../../db/models/order.model.js";
import Stripe from "stripe";

export const cashPayment = async (req, res) => {
  const user = await userModel.findById(req.userId);
  const userCart = await cartModel.findOne({ userId: user._id });
  console.log(userCart);
  if (!userCart || userCart.products.length === 0) {
    return res.status(400).send({ error: "No items in the cart" });
  }

  const order = await orderModel.create({
    userId: user._id,
    cartId: userCart._id,
    paymentMethod: "cash",
    totalPrice: userCart.totalPrice,
    products: userCart.products,
  });

  await cartModel.findByIdAndUpdate(userCart._id, {
    totalPrice: 0,
    priceAfterDiscount: 0,
    products: [],
  });

  res.send({ message: "Cash payment processed successfully", order: order });
};

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeSecretKey);
export const onlinePayment = async (req, res) => {
  const user = await userModel.findById(req.userId);
  const userCart = await cartModel.findOne({ userId: user._id });
  console.log(userCart);
  if (!userCart || userCart.products.length === 0) {
    return res.status(400).send({ error: "No items in the cart" });
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}`,
    customer_email: req.body.email,
    client_reference_id: req.body.productId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${userCart.products[0].name} Product`,
          },
          unit_amount: userCart.totalPrice * 100,
        },
        quantity: 1,
      },
    ],
  });
  res.status(200).json({
    status: "success",
    session: session.url,
  });
};

export const getUserOrders = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    const orders = await orderModel.find({ userId: user._id });
    res.status(200).json({ orders: orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
