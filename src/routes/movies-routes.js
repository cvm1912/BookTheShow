const { Router } = require("express");
const MovieController = require("../controllers/movies-controller");
const MovieMiddleware = require("../middlewares/movie-middleware");
const movieRouter = Router();

movieRouter.post("/movies", MovieMiddleware.validateCreateMovieRequest, MovieController.createMovie);
movieRouter.get("/movies/:id", MovieController.getMovies);
movieRouter.delete("/movies/:id", MovieController.deleteMovie);
movieRouter.get("/movies", MovieController.getAllMovies);
movieRouter.put("/movies/:id", MovieController.updateMovie);
movieRouter.patch("/movies/:id", MovieController.updateMovie);

module.exports = movieRouter;
