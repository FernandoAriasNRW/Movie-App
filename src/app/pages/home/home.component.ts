import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit  {

  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getBillboardMovies()
    .subscribe(movies => {
      this.movies = movies.results.map(movie => {
        return {
          ...movie,
          poster_path: this.moviesService.getPosterUrl(movie.backdrop_path)
        }
      });
      console.log(this.movies);
    });

  }



}
