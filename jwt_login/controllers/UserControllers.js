const wrapAsync = require("../utils/wrapAsync");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = wrapAsync(async (req, res) => {
  let { username, email, password } = req.body;

  let existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      message: "User already has an account",
      success: false,
    });
  }

  let hashPassword = await bcrypt.hash(password, 10);

  let createUser = new User({
    username,
    email,
    password: hashPassword,
  });

  await createUser.save();

  return res.status(201).json({
    message: "Signup successful",
    success: true,
  });
});

const login = wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Email or Password is wrong",
      success: false,
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Email or Password is wrong",
      success: false,
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
      _id: user._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "24h",
    },
  );

  return res.status(200).json({
    message: "Login successful",
    success: true,
    username: user.username,
    token,
  });
});

module.exports = { signup, login };
