import { TMovieCreate, TMovieRepo, TMovieUpdate, TMoviesRead, } from "../interfaces/movie.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IPagination, IPaginationParams } from "../interfaces/pagination.interface";


const createMovie = async (payload: TMovieCreate): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie = await repo.save(payload);

  return movie;
};

const readMovies = async ({ page, perPage, order,  sort, prevPage, nextPage }: IPaginationParams): Promise<IPagination> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const [movies, count]: [Movie[], number] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies
  };
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