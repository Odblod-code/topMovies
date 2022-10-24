import { MoviePagination } from './datamodel/moviePagination';
import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'top-movies';
}
