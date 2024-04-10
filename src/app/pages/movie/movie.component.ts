import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Credit, Movie } from '../../interfaces/billboard-response';
import { MoviesService } from '../../services/movies.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  public id: number = 0;
  public movie: Movie | null = null;
  public credits: Credit[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];

      combineLatest([

        this.moviesService.getMovieById(this.id),
        this.moviesService.getCastingByMovieId(this.id),

      ]).subscribe(([movie, result]) => {
        if (movie) {
          console.log('Movie: ', movie);
          this.movie = movie;
        }

        this.credits = result.cast.slice(0, 5);

      });

    });
  }

  OnBack() {
    this.location.back()
  }

}
