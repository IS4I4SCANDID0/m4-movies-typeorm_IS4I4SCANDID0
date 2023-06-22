import { TMovieCreate, TMovieRepo, TMovieUpdate, TMoviesRead, } from "../interfaces/movie.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import AppError from "../errors/AppError";


const createMovie = async (payload: TMovieCreate): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie = await repo.save(payload);

  return movie;
};

const readMovies = async (): Promise<TMoviesRead> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movies: Movie[] = await repo.find();

  return movies;
};

const updateMovies = async (movie: Movie, payload: TMovieUpdate): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  
  return await repo.save({ ...movie, ...payload });
};
  

const eraseMovies = async (movie: Movie): Promise<void> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);

  await repo.remove(movie);
  
  return
};



export { createMovie, readMovies, updateMovies, eraseMovies };
