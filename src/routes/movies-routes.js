const { Router } = require("express");
const MovieController = require("../controllers/movies-controller");
const movieRouter = Router();

movieRouter.post("/movies", MovieController.createMovie);


module.exports = movieRouter;
