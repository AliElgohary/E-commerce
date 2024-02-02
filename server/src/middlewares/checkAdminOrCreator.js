import categoryModel from "../../../../db/models/category.model.js";
import userModel from "../../db/models/user.model";

export const checkAdminAndCreator = async (userID, categoryID) => {
  const category = await categoryModel.findById(userID);
  if (!category) return res.send({ message: "No category found" });
  const user = await userModel.findById(categoryID);
  if (!user) return res.send({ message: "user not found" });

  if (user._id.equals(foundedCategory.createdBy) || user.role == "admin") {
    return true;
  } else {
    res.json({ message: " cant update" });
  }
};
