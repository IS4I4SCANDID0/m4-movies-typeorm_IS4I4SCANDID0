import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import AppError from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { TMovieRepo } from "../interfaces/movie.interfaces";

const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieId: number = Number(req.params.id);
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  
  const movie: Movie | null = await repo.findOneBy({ id: movieId })
  if(!movie) throw new AppError("Movie not found", 404)
  
  res.locals = { ...res.locals, movie }

  return next()
}

export { verifyId }