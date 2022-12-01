const { check } = require("express-validator");
const User = require("../models/User");
const handleValidationErrors = require('./handleValidationErrors');

const validateFollowUniquePairing = [
    check('userFollowed')
        .exists({checkFalsy: true})
        .custom((value, {req}) => {
            return value !== req.body.userFollowing
        })
        .withMessage("followed user DNE OR user cannot follow themselves"),
    check('userFollowing')
        .exists({checkFalsy: true})
        .withMessage("must have a user following"),
    handleValidationErrors
]

module.exports = validateFollowUniquePairing;