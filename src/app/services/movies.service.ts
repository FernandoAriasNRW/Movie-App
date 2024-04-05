import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BillboardResponse } from '../interfaces/billboard-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getBillboardMovies(): Observable<BillboardResponse> {
    // console.log('API_KEY: ', environment.apiKey);
    return this.http.get<BillboardResponse>(`${environment.apiUrl}now_playing?api_key=${environment.apiKey}`);
  }

  getPosterUrl(path: string): string {
    return `${environment.imgUlr}${path}`;
  }

}
