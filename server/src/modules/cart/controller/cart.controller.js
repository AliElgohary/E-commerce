import cartModel from "../../../../db/models/cart.model.js";
import productModel from "../../../../db/models/product.model.js";
import userModel from "../../../../db/models/user.model.js";
import couponModel from "../../../../db/models/coupon.model.js";

export const createCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const existingCart = await cartModel.findOne({ userId: user._id });
    if (existingCart) {
      return res.status(201).send({ cart: existingCart });
    }

    const newCart = await cartModel.create({
      userId: user._id,
      totalPrice: 0,
      priceAfterDiscount: 0,
      products: [],
    });

    res.status(201).send({ created: newCart });
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};


export const updateCart = async (req, res) => {
  const { productNames } = req.body;
  console.log(productNames)
  try {
    const userCart = await cartModel.findOne({ userId: req.userId });
    
    const products = await productModel.find({
      productName: { $in: productNames },
    });

    if (!products || products.length === 0) {
      return res.send({ failed: "No products found" });
    }

    const updatedCart = await cartModel.findByIdAndUpdate(
      userCart._id,
      { $push: { products: { $each: products } } },
      { new: true }
    );

    const totalPrice = updatedCart.products.reduce(
      (accumulator, product) => accumulator + product.finalPrice,
      0
    );
    const priceAfterDiscount = updatedCart.products.reduce(
      (accumulator, product) => accumulator + product.priceAfterDiscount,
      0
    );

    await cartModel.findByIdAndUpdate(updatedCart._id, {
      totalPrice: totalPrice,
      priceAfterDiscount: priceAfterDiscount,
    });

    res.send({ message: "success", cart: updatedCart });
  } catch (error) {
    res.send({ error: "Error updating cart", errorMessage: error.message });
  }
};

export const applyCoupon = async (req, res) => {
  const user = await userModel.findById(req.userId);
  const { couponCode } = req.body;

  try {
    const coupon = await couponModel.findOne({ couponCode: couponCode });
    console.log(coupon);
    if (!coupon) {
      return res.send({ message: "Coupon not found" });
    }
    const userCart = await cartModel.findOne({ userId: user.id });
    const priceAfterDiscount = userCart.totalPrice - coupon.value;
    await cartModel.findByIdAndUpdate(
      { _id: userCart._id },
      { $set: { priceAfterDiscount: priceAfterDiscount } },
      { new: true }
    );
    const cart = await cartModel.findOne({ userId: user.id });
    return res.send({ message: "Cart updated", cart: cart });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error applying coupon", errorMessage: error.message });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const userCart = await cartModel.findOne({ userId: user._id });
    if (!userCart) {
      return res.status(404).json({ message: "User's cart not found" });
    }
    res.status(200).json({ cart: userCart });
  } catch (error) {
    console.error("Error getting user cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
