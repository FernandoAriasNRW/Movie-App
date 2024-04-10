import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  public movies: Movie[] = [];
  public term: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.term = params['term'];
      this.moviesService.searchMovies(params.term).subscribe(movies => {
        this.movies = movies.results;
      });
    });
  }

}
