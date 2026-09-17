const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/expressError");
const isAuthentication = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return next(new ExpressError(401, "JWT token is required"));
  }

  try {
    // const token = auth.split(" ")[1];
    let decoded = jwt.verify(auth, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return next(
      new ExpressError(401, "unauthorized ,JWT token is wrong or expired"),
    );
  }
};

module.exports = { isAuthentication };
