const theatreService = require('../services/theatre-services');

const createTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.createTheatre(req.body);
        res.status(201).json({
            success: true,
            error: {},
            message: "Theatre created successfully",
            data: theatre
        });
    } catch (err) {
        console.error("Error creating theatre:", err);
        res.status(500).json({
            success: false,
            message: "Error creating theatre",
            error: err.message
        });
    }
};

const fetchTheatres = async (req, res) => {
    try {
        const theatres = await theatreService.fetchTheatres(req.query);

        if (theatres.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No theatres found",
                error: "No theatres found"
            });
        }

        res.status(200).json({
            success: true,
            error: {},
            message: "Theatres fetched successfully",
            data: theatres
        });
    } catch (err) {
        console.error("Error fetching theatres:", err);
        res.status(500).json({
            success: false,
            message: "Error fetching theatres",
            error: err.message
        });
    }
};

const getTheatreById = async (req, res) => {
    try {
        const theatre = await theatreService.getTheatreById(req.params.id);

        res.status(200).json({
            success: true,
            error: {},
            message: "Theatre fetched successfully",
            data: theatre
        });
    } catch (err) {
        console.error("Error fetching theatre:", err);
        const statusCode = err.message === 'Theatre not found' ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
    }
};

const updateTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.updateTheatre(req.params.id, req.body);

        res.status(200).json({
            success: true,
            error: {},
            message: "Theatre updated successfully",
            data: theatre
        });
    } catch (err) {
        console.error("Error updating theatre:", err);
        const statusCode = err.message === 'Theatre not found' ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
    }
};

const deleteTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.deleteTheatre(req.params.id);

        res.status(200).json({
            success: true,
            error: {},
            message: "Theatre deleted successfully",
            data: theatre
        });
    } catch (err) {
        console.error("Error deleting theatre:", err);
        const statusCode = err.message === 'Theatre not found' ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
    }
};

module.exports = {
    createTheatre,
    fetchTheatres,
    getTheatreById,
    updateTheatre,
    deleteTheatre,
};
