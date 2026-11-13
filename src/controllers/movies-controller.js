const express = require("express");
const Movies = require("../models/movies.model");

const createMovie = async (req, res)=>{
    try{
        const {name, description, cast, trailerUrl, language, releaseDate, director, releaseStatus} = req.body;
        const movie = await Movies.create(req.body);
        res.status(201).json({
            success: true,
            error: {},
            message: "Movie created successfully",
            data: movie
        });

    }catch(err){
        console.error("Error creating movie:", err);
        res.status(500).json({
            success: false,
            message: "Error creating movie",
            error: err.message
        });
    }
}

module.exports = {createMovie};