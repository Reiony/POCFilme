import {Router} from "express";
import * as movieController from '../controllers/movieController';

const movieRouter = Router();

movieRouter.get("/movies", movieController.getAllMovies);
movieRouter.get("/movies/:id", movieController.getMovieById);
movieRouter.post("/movies", movieController.createMovie);
movieRouter.put("/movies/:id", movieController.updateMovie);
movieRouter.delete("/movies/:id", movieController.deleteMovie);

export default movieRouter;