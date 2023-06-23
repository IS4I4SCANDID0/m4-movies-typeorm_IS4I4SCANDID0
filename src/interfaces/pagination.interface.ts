import { Movie } from "../entities";

interface IPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<Movie>
};

interface IPaginationParams {
  page: number;
  perPage: number;
  order: string,
  sort: string,
  prevPage: string | null;
  nextPage: string | null;
};

export { IPagination, IPaginationParams }