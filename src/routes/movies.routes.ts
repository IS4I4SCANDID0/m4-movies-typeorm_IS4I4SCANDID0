import { Router } from "express";
import { createMovieController, eraseMoviesController, readMoviesController, retrieveMoviesController, updateMoviesController } from "../controllers/movies.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movieSchema";
import { verifyId } from "../middlewares/verifyMovieId";
import { verifyName } from "../middlewares/verifyMovieName";
import { pagination } from "../middlewares/pagesHandle.middleware";

const moviesRouter = Router();

moviesRouter.post("", validateBody(movieCreateSchema), verifyName, createMovieController)
moviesRouter.get("", pagination, readMoviesController) 

moviesRouter.use("/:id", verifyId)
moviesRouter.get("/:id", retrieveMoviesController)
moviesRouter.patch("/:id", validateBody(movieUpdateSchema), verifyName, updateMoviesController)
moviesRouter.delete("/:id", eraseMoviesController)

export default moviesRouter 