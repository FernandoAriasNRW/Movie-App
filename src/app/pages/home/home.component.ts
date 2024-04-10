import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesScroll: Movie[] = [];
  public page: number = 1;
  public starring: number = 0;


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;


    if (position > max) {

      if (this.moviesService.cargando) return;

      const result = this.moviesService.getBillboardMovies(this.page).pipe(
        tap(() => this.page += 1)
      );

      result.subscribe(movies => {

        const newMovies = movies.results;

        this.moviesScroll = [...this.moviesScroll, ...newMovies];

      });
    }

  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getBillboardMovies()
      .subscribe(movies => {

        this.movies = movies.results;
        this.moviesScroll = movies.results;

      });

  }


}
