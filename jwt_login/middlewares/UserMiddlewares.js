const Joi = require("joi");
const ExpressError = require("../utils/expressError");

const signupValidating = (req, res, next) => {
  const Schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      .required(),
  });

  let { error } = Schema.validate(req.body);

  if (error) {
    return next(new ExpressError(400, error.details[0].message));
  }
  next();
};
const loginValidating = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      .required(),
  });

  let { error } = Schema.validate(req.body);

  if (error) {
    return next(new ExpressError(400, error.details[0].message));
  }
  next();
};

module.exports = { signupValidating, loginValidating };
