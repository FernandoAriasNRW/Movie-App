import { Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {

  constructor(
    private moviesService: MoviesService,
  ){}

  transform(value: string, type?: string): string {

    

    if (value.includes('http:')) return value;

    if (type === 'logo') {
      return this.moviesService.getLogoUrl(value);
    }

    return this.moviesService.getPosterUrl(value);

  }
}
