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

const getAllMovies = async (filter) => {
    let query= {};
    if(filter.name){
        query.name = filter.name;
    }

    const movies = await Movie.find(query);
    if(!movies){
        return {
            err:'Not able to find the query movie',
            code:404
        }
    }
    return movies;
};

const updateMovie = async (id, data) => {
    const movie = await Movie.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!movie) {
        throw new Error('Movie not found');
    }

    return movie;
};

module.exports = {
    createMovie,
    getMovieById,
    deleteMovieById,
    getAllMovies,
    updateMovie,
};
