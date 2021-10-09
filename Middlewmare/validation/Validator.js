const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("name", "name is required").notEmpty(),
  check("email", "Invalid email").isEmail(),
  check("password", "password is required").notEmpty(),
  check("password", "The password must contain min 6  characters, at least one Upper case, at least one lower case, and at least one special character")
  .isLength({ min: 6 })
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
),
];
exports.loginValidate = () => [
  check("email", "Invalid email").isEmail(),
  check("password", "invalid password").exists(),

];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()
  })
  }
  next();
};