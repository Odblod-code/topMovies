import { Movie } from './movie';

export class MoviePagination {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;

  static transform(response: any): MoviePagination {
    let moviePagination: MoviePagination = { ...response };
    moviePagination.results.map((movie: Movie) => {
      if (movie.vote_average) movie.score = movie.vote_average * 10;
      return movie;
    });
    return moviePagination;
  }
}
