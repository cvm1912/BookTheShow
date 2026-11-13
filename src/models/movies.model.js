const mongoose = require('mongoose');

// define the movie schema
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"movie name is required"]
    },
    description:{
        type:String,
        required: [true,"movie description is required"]
    },
    cast:{
        type:[String],
        required: [true,"movie cast is required"]
    },
    trailerUrl:{
        type:String,
        required: [true,"movie trailer url is required"]
    },

    language:{
        type:[String],
        required: [true,"movie language is required"], 
        default: "Hindi"
    },

    releaseDate:{
        type:Date,
        required: [true,"movie release date is required"]
    },

    director:{
        type:String,
        required: [true,"movie director is required"]
    },

    releaseStatus:{
        type:String,
        required: [true,"movie release status is required"],
        enum:["RELEASED","UPCOMING","BLOCKED"],
        default:"UPCOMING"
    },

},{timestamps:true});

module.exports = mongoose.model('Movies', movieSchema);