const MovieService = require("../services/movie.services");

const createMovie = async (req, res) => {
    try {
        const movie = await MovieService.createMovie(req.body);
        res.status(201).json({
            success: true,
            error: {},
            message: "Movie created successfully",
            data: movie
        });
    } catch (err) {
        console.error("Error creating movie:", err);
        res.status(500).json({
            success: false,
            message: "Error creating movie",
            error: err.message
        });
    }
};

const getMovies = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await MovieService.getMovieById(id);

        res.status(200).json({
            success: true,
            error: {},
            message: "Movie fetched successfully",
            data: movie
        });
    } catch (err) {
        console.error("Error fetching movie:", err);
        const statusCode = err.message === 'Movie not found' ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await MovieService.deleteMovieById(id);

        res.status(200).json({
            success: true,
            error: {},
            message: "Movie deleted successfully",
            data: movie
        });
    } catch (err) {
        console.error("Error deleting movie:", err);
        const statusCode = err.message === 'Movie not found' ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
    }
};

const getAllMovies = async (req, res) => {
    try {
        const movies = await MovieService.getAllMovies();

        if (movies.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No movies found",
                error: "No movies found"
            });
        }

        res.status(200).json({
            success: true,
            error: {},
            message: "Movies fetched successfully",
            data: movies
        });
    } catch (err) {
        console.error("Error fetching movies:", err);
        res.status(500).json({
            success: false,
            message: "Error fetching movies",
            error: err.message
        });
    }
};

module.exports = { createMovie, getMovies, deleteMovie, getAllMovies };
