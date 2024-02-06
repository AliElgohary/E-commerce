import cartModel from "../../../../db/models/cart.model.js";
import userModel from "../../../../db/models/user.model.js";
import orderModel from "../../../../db/models/order.model.js";

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
