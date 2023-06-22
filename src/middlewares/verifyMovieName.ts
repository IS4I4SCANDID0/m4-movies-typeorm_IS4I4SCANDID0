import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import AppError from "../errors/AppError";
import { TMovieRepo } from "../interfaces/movie.interfaces";

const verifyName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movieName: string = req.body.name;
  const movie: Movie | null = await repo.findOneBy({ name: movieName })
  
  // if(!movie) return next()

  if(movie) throw new AppError("Movie already exists.", 409)
  
  return next()
}

export { verifyName }