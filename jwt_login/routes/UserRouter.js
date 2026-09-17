const express = require("express");
const router = express.Router();
const {
  signupValidating,
  loginValidating,
} = require("../middlewares/UserMiddlewares");
const { signup, login } = require("../controllers/UserControllers");

router.post("/signup", signupValidating, signup);
router.post("/login", loginValidating, login);

module.exports = router;
