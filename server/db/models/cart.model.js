import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  priceAfterDiscount: {
    type: Number,
    default: 0,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
      },
    },
  ],
});

const cartModel = mongoose.model("Cart", cartSchema);
export default cartModel;
