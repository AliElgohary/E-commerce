import mongoose from "mongoose";

const producSchema = mongoose.Schema({
  productName: String,
  slug: String,
  priceAfterDiscount: Number,
  finalPrice: Number,
  image: String,
  category: String,
  stock: Number,
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

const productModel = mongoose.model("Product", producSchema);
export default productModel;
