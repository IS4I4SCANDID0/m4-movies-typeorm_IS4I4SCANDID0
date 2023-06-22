import { z } from "zod";
import { movieCreateSchema, movieSchema, moviesReadSchema, movieUpdateSchema } from "../schemas/movieSchema";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

// type TMovies = z.infer<typeof movieSchema>
type TMovieCreate = z.infer<typeof movieCreateSchema>
type TMoviesRead = z.infer<typeof moviesReadSchema>
type TMovieUpdate = DeepPartial<TMovieCreate>

type TMovieRepo = Repository<Movie> 

export { TMovieCreate, TMovieUpdate, TMoviesRead, TMovieRepo }