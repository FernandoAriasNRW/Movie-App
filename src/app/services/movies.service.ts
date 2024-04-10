import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BillboardResponse, Credit, CreditSearch, Movie } from '../interfaces/billboard-response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public cargando: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  getBillboardMovies(page: number = 1): Observable<BillboardResponse> {
    this.cargando = true;
    return this.http.get<BillboardResponse>(`${environment.apiUrl}now_playing?api_key=${environment.apiKey}&page=${page}`).pipe((movies) => {
      this.cargando = false;
      return movies;
    });
  }

  searchMovies(term: string, page: number = 1): Observable<BillboardResponse> {
    return this.http.get<BillboardResponse>(`${environment.searchUrl}movie?api_key=${environment.apiKey}&query=${term}&include_adult=false&page=${page}`).pipe((movies) => {
      this.cargando = false;
      return movies;
    });
  }

  // https://api.themoviedb.org/3/search/movie?query=gta%24&include_adult=false&language=en-US&page=1
  getPosterUrl(path: string): string {
    if (path === null) return '';
    return `${environment.imgUlr}${path}`;
  }

  getMovieById(id: number): Observable<Movie | null> {
    this.cargando = true;
    return this.http.get<Movie | null>(`${environment.apiUrl}${id}?api_key=${environment.apiKey}`).pipe((movie) => {
      this.cargando = false

      if (!movie) return of(null);

      return movie;
    });
  }

  getLogoUrl(path: string) {
    if (path === null) return '';
    return `${environment.logoPath}${path}`;
  }

  getCastingByMovieId(id: number) {
    return this.http.get<CreditSearch>(`${environment.castingUrl}${id}/credits?api_key=${environment.apiKey}`).pipe((credits) => {
      return credits;
    });
  }

}
