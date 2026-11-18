const Theatre = require('../models/thearers.model');

const createTheatre = async (data) => {
    const theatre = await Theatre.create(data);
    return theatre;
};

const fetchTheatres = async (filter) => {
    const query = {};

    if (filter.name) {
        query.name = filter.name;
    }

    if (filter.pincode) {
        query.pincode = filter.pincode;
    }

    if (filter.city) {
        query.city = filter.city;
    }

    const theatres = await Theatre.find(query);
    return theatres;
};

const getTheatreById = async (id) => {
    const theatre = await Theatre.findById(id);

    if (!theatre) {
        throw new Error('Theatre not found');
    }

    return theatre;
};

const updateTheatre = async (id, data) => {
    const theatre = await Theatre.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!theatre) {
        throw new Error('Theatre not found');
    }

    return theatre;
};

const updateMoviesInTheatre = async (theatreId, movieId, insert) => {
    const theatre = await Theatre.findById(theatreId);

    if (!theatre) {
        throw new Error('Theatre not found');
    }

    const alreadyAdded = theatre.movies.some(id => id.toString() === movieId.toString());

    if (insert) {
        // do not add if movie is already present
        if (alreadyAdded) {
            throw new Error('Movie is already added to this theatre');
        }
        theatre.movies.push(movieId);
    } else {
        // do not remove if movie is not present
        if (!alreadyAdded) {
            throw new Error('Movie is not present in this theatre');
        }
        theatre.movies = theatre.movies.filter(id => id.toString() !== movieId.toString());
    }

    await theatre.save();
    return theatre.populate('movies');
};

const deleteTheatre = async (id) => {
    const theatre = await Theatre.findByIdAndDelete(id);

    if (!theatre) {
        throw new Error('Theatre not found');
    }

    return theatre;
};

module.exports = {
    createTheatre,
    fetchTheatres,
    getTheatreById,
    updateTheatre,
    deleteTheatre,
    updateMoviesInTheatre,
};
