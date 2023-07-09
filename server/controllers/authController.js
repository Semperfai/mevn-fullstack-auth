const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function register(req, res) {
  const { username, email, first_name, last_name, password, password_cofirm } =
    req.body;
  if (
    !username ||
    !email ||
    !password ||
    !password_cofirm ||
    !first_name ||
    !last_name
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }
  if (password !== password_cofirm) {
    return res.status(422).json({ message: "Passwords do not match" });
  }

  const userExists = await User.exists({ email }).exec();

  if (userExists) return res.sendStatus(409);

  try {
    hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      username,
      password: hashedPassword,
      last_name,
      first_name,
    });
    return res.status(201).json({ message: "Successful registration" });
  } catch (e) {
    return res.status(422).json({ message: "Could not register" });
  }
}
async function login(req, res) {
  res.sendStatus(200);
}
async function logout(req, res) {
  res.sendStatus(200);
}
async function refresh(req, res) {
  res.sendStatus(200);
}
async function user(req, res) {
  res.sendStatus(200);
}

module.exports = { register, login, logout, refresh, user };
