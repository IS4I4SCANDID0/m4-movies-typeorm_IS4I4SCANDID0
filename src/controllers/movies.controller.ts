import { Request, Response } from "express";
import { createMovie, eraseMovies, readMovies, updateMovies } from "../services/movieServices";
import { Movie } from "../entities";
import { TMovieUpdate, TMoviesRead } from "../interfaces/movie.interfaces";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await createMovie(req.body);
  return res.status(201).json(movie);
};

const readMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const movies: TMoviesRead = await readMovies()
  return res.status(200).json(movies);
};


const retrieveMoviesController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.movie);
};

const updateMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const payload: TMovieUpdate = req.body; 
  const foundMovie: Movie = res.locals.movie
  const movie: Movie = await updateMovies(foundMovie, payload)
  return res.status(200).json(movie);
};

const eraseMoviesController = async (req: Request, res: Response): Promise<Response> => {
  await eraseMovies(res.locals.movie)
  return res.status(204).json();
};

export { createMovieController, readMoviesController, retrieveMoviesController, 
  updateMoviesController, eraseMoviesController
}
  
