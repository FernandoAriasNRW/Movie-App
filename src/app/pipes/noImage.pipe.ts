import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/billboard-response';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(value: Movie[]): Movie[] {

    if (value.every(movie => movie.poster_path?.length > 0)) {
      return value
    };

    return value.map(movie => {
      if (movie.poster_path?.length > 0) return movie;
      return {
        ...movie,
        poster_path: 'http://localhost:4200/assets/img/no-image.jpg',
      }
    });

  }
}
