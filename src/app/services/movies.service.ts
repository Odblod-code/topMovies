import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { MoviePagination } from '../datamodel/moviePagination';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getTopMovies(page?: number): Observable<MoviePagination> {
    return this.httpClient
      .get('https://api.themoviedb.org/3/movie/top_rated', {
        params: { api_key: environment.apiUrl, language: navigator.language, page: page ?? 1 },
      })
      .pipe(map((response) => MoviePagination.transform(response)));
  }
}
