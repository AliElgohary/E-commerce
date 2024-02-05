import cartModel from "../../../../db/models/cart.model.js";
import userModel from "../../../../db/models/user.model.js";
export const createCart = async (req, res) => {
  const user = await userModel.findById(req.userId);
  console.log(user);
  if(!user) return res.send({failed : "user not found"});
  const cart = await cartModel.find({ userId: user._id });
  const newCart = await cartModel.insertMany({
    userId: user._id,
    totalPrice: 0,
    priceAfterDiscount: 0,
    products: [],
  });
  res.send({ created: newCart });
  if (cart.length == 0) return res.send({ message: "empty cart" });
};
