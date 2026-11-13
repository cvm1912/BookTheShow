const Movie = require('../models/movies.model');

const createMovie = async (movieData) => {
    const movie = await Movie.create(movieData);
    return movie;
};

const getMovieById = async (id) => {
    const movie = await Movie.findById(id);

    if (!movie) {
        throw new Error('Movie not found');
    }

    return movie;
};

const deleteMovieById = async (id) => {
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
        throw new Error('Movie not found');
    }

    return movie;
};

const getAllMovies = async () => {
    const movies = await Movie.find();
    return movies;
};

module.exports = {
    createMovie,
    getMovieById,
    deleteMovieById,
    getAllMovies,
};
