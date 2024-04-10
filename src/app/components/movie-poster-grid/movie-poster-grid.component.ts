import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-movie-poster-grid',
  templateUrl: './movie-poster-grid.component.html',
  styleUrl: './movie-poster-grid.component.css'
})
export class MoviePosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];
  // @Input() starring: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
