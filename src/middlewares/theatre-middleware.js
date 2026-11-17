const validateCreateTheatreRequest = (req, res, next) => {
    // validate the theatre name
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            err: "The name of the theatre is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the city
    if (!req.body.city) {
        return res.status(400).json({
            success: false,
            err: "The city of the theatre is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the pincode
    if (!req.body.pincode) {
        return res.status(400).json({
            success: false,
            err: "The pincode of the theatre is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    next();
};

module.exports = { validateCreateTheatreRequest };
