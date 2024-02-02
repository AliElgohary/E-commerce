import mongoose from "mongoose";

// • Category schema (categoryName, image, createdBy)
const categorySchema = mongoose.Schema({
  categoryName: String,
  image: String,
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
