const { validationResult } = require("express-validator");

// handleValidationErrors is an Express middleware used with the `check`
// middleware to format the validation errors. 
const handleValidationErrors = async (req, res, next) => {
    const validationErrors = await validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errorFormatter = ({ msg }) => console.log(msg);
        const errors = validationErrors.formatWith(errorFormatter).mapped();

        const err = Error("Validation Error");
        err.errors = errors;
        err.statusCode = 400;
        err.title = "Validation Error";

        next(err);
    }
    next();
};

module.exports = handleValidationErrors;