import { z } from "zod";
import { moviesCreate, moviesReturn, moviesUpdate } from "../schemas/movieSchema";

type TMovieCreate = z.infer<typeof moviesCreate>
type TMovieUpdate = z.infer<typeof moviesUpdate>
type TMoviesReturn = z.infer<typeof moviesReturn>

export {TMovieCreate, TMovieUpdate, TMoviesReturn}