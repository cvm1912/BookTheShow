const validateCreateMovieRequest = (req, res, next) => {
    // validate the movie name
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            err: "The name of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie description
    if (!req.body.description) {
        return res.status(400).json({
            success: false,
            err: "The description of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie cast
    if (!req.body.cast || req.body.cast.length === 0) {
        return res.status(400).json({
            success: false,
            err: "The cast of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie trailer URL
    if (!req.body.trailerUrl) {
        return res.status(400).json({
            success: false,
            err: "The trailer URL of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie language
    if (!req.body.language || req.body.language.length === 0) {
        return res.status(400).json({
            success: false,
            err: "The language of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie release date
    if (!req.body.releaseDate) {
        return res.status(400).json({
            success: false,
            err: "The release date of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie director
    if (!req.body.director) {
        return res.status(400).json({
            success: false,
            err: "The director of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate the movie release status
    if (!req.body.releaseStatus) {
        return res.status(400).json({
            success: false,
            err: "The release status of the movie is not present in the request",
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    // validate releaseStatus is one of the allowed values
    const allowedStatuses = ["RELEASED", "UPCOMING", "BLOCKED"];
    if (!allowedStatuses.includes(req.body.releaseStatus)) {
        return res.status(400).json({
            success: false,
            err: `The release status must be one of: ${allowedStatuses.join(", ")}`,
            data: {},
            message: "Malformed Request | Bad Request"
        });
    }

    next();
};

module.exports = { validateCreateMovieRequest };
