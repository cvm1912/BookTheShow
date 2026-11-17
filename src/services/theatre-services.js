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
};
