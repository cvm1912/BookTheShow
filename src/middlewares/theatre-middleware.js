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

const validateUpdateMovies = (req, res, next) => {
    // validate movieId is present
    if (!req.body.movieId) {
        return res.status(400).json({
            success: false,
            err: "The movieId is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate movieIds is an array
    if (!(req.body.movieId instanceof Array)) {
        return res.status(400).json({
            success: false,
            err: "The movieId must be an array of movie ids",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate movieId array is not empty
    if (req.body.movieId.length === 0) {
        return res.status(400).json({
            success: false,
            err: "The movieId array cannot be empty",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate insert flag is present
    if (!req.body.insert) {
        return res.status(400).json({
            success: false,
            err: "The insert flag is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    


    next();
};

module.exports = { validateCreateTheatreRequest, validateUpdateMovies };
