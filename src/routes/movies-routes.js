const { Router } = require("express");
const MovieController = require("../controllers/movies-controller");
const movieRouter = Router();

movieRouter.post("/movies", MovieController.createMovie);
movieRouter.get("/movies/:id", MovieController.getMovies);
movieRouter.delete("/movies/:id", MovieController.deleteMovie);
movieRouter.get("/movies", MovieController.getAllMovies);

module.exports = movieRouter;
