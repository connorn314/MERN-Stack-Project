const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateRegisterInput is a combination Express middleware that uses the 
// `check` middleware to validate the keys in the body of a request to 
// register a user
const validateLike = [
  check('user')
    .exists({ checkFalsy: true })
    .withMessage('Already Liked'),
  handleValidationErrors
];

module.exports = validateLike;