import { z } from "zod";

const movies = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string(),
  duration: z.number().positive(),
  price: z.number().positive()
});

const moviesCreate = movies.omit({ id: true }).partial({ description: true });
const moviesUpdate = moviesCreate.partial({ name: true, duration: true, price: true });
const moviesReturn = movies.array();

export { moviesCreate, moviesUpdate, moviesReturn }