import { Component, OnInit } from '@angular/core';
import { MoviePagination } from '../datamodel/moviePagination';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pagination: MoviePagination;
  movieImg: any[];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.getTopMovies().subscribe((pagination: MoviePagination) => {
      this.pagination = pagination;
      console.log('Response', this.pagination);
    })
  }

  getImage(backDrop: string){
    return `https://image.tmdb.org/t/p/w220_and_h330_face/${backDrop}`
  }

  onScroll() {
    if(this.pagination.total_pages > this.pagination.page) this.moviesService.getTopMovies(this.pagination.page++).subscribe(response =>
      console.log("Response 2", response)
    )
  }

}
