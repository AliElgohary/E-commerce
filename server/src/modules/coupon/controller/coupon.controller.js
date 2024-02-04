import couponModel from "../../../../db/models/coupon.model.js";

export const coupons = async (req, res) => {
  const coupons = await couponModel.find();
  if (!coupons) return res.send({ message: "failed" });
  res.send({ message: "success", coupons: coupons });
};

export const addCoupon = async (req, res) => {
  const createdBy = req.userId;
  const { couponCode, value, expireIn } = req.body;
  const foundedCoupon = await couponModel.findOne({ couponCode });
  if (foundedCoupon) return res.send({ message: " already exists" });
  const newCoupon = await couponModel.insertMany({
    couponCode,
    value,
    expireIn,
    createdBy,
  });
  if (newCoupon) return res.send(newCoupon);
  res.send({ message: " cant find coupon" });
};
