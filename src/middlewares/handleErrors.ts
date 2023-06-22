import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { z } from "zod";

const handleErrors = (error: unknown, req: Request, res: Response, nex: NextFunction): Response => {
  if(error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message })
  };

  if(error instanceof z.ZodError) {
    return res.status(400).json(error.flatten().fieldErrors)
  };
  console.error(error);
  return res.status(500).json({ message: "Internal server error" })
};

export { handleErrors }