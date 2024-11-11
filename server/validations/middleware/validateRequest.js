const { TaskValidationSchema } = require('../schema/taskValidation');

const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            // Validate the request body using Zod's .parse() method
            schema.parse(req.body);  // If validation passes, nothing happens
            next();  // Proceed to the next middleware/controller
        } catch (error) {
            // If validation fails, Zod throws an error, and we send a 400 response with the error details
            return res.status(400).json({
                error: error.errors[0].message, // Return the first validation error message
            });
        }
    };
};

module.exports = validateRequest;
