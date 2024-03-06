import userModel from "../../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../../../services/sendEmail.js";

export const addUser = async (req, res) => {
  try {
    const { userName, email, password, isVerfied, address } = req.body;
    let foundedUser = await userModel.findOne({ email });
    if (foundedUser) return res.json({ message: "user already exists" });
    const hashedPass = bcrypt.hashSync(password, 10);

    const newUser = await userModel.insertMany({
      userName,
      email,
      password: hashedPass,
      isVerfied,
      address,
    });
    let token = jwt.sign({ id: newUser[0]._id }, process.env.JWTSECRET);
    let url = `http://localhost:5000/users/verify/${token}`;
    sendEmail(email, url);
    res.send({ message: "added", user: newUser });
  } catch (error) {
    res.send({ error: "cannot addUser" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send({ "hello from users": users });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const signIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let foundedUser = await userModel.findOne({ email });
    if (!foundedUser)
      return res.send({
        message: "Not a registered user, you need to register",
      });
    if (!foundedUser.isVerfied)
      return res.send({ message: "Please verify your account" });
    if (!foundedUser.isActive)
      return res.send({ message: "Your account is deactivated" });
    let matchedPassword = bcrypt.compareSync(password, foundedUser.password);
    if (matchedPassword) {
      let token = jwt.sign({ id: foundedUser._id }, process.env.JWTSECRET);
      res.send({ message: "Login successful", token: token });
    } else {
      res.send({ message: "wrong credentials " });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const deactivate = async (req, res) => {
  const filter = { _id: req.userId };
  const update = { isActive: false };
  const user = await userModel.find({ _id: req.userId });
  if (user.isActive === false)
    return res.send({ message: "user is already deactivated" });
  await userModel.findOneAndUpdate(filter, update);
  if (!user) {
    res.send({ message: "user not found" });
  } else {
    res.send({ message: "user deactivated" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { userName, email, password, address } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await userModel.findByIdAndUpdate(userId, {
      userName,
      email,
      password: hashedPassword,
      address,
    });
    const user = await userModel.findById(userId);
    res.send({ message: "user updated succesfully", updatedUser: user });
  } catch (error) {
    res.send({ error: "error updating user" + error });
  }
};

export const verifyAccount = async (req, res) => {
  let { token } = req.params;
  jwt.verify(token, process.env.JWTSECRET, async (err, decode) => {
    let foundedUser = await userModel.find({ _id: decode.id });
    if (!foundedUser) return res.send({ message: "invalid User" });
    let updatedUser = await userModel.findByIdAndUpdate(
      decode.id,
      { isVerfied: true },
      { new: true }
    );
    res.send({ message: "Verified", updatedUser: updatedUser });
  });
};

export const resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const hashedNewPassword = bcrypt.hashSync(newPassword, 10);
  const user = await userModel.findByIdAndUpdate(req.userId, {
    password: hashedNewPassword,
  });
  return res.send({ message: "password reset", user: user });
};
