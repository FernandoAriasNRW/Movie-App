import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
})
export class AveragePipe implements PipeTransform {

  transform(value: number): number {

    if (isNaN(value)) return 0;

    return Number(value.toFixed(1))*10

  }
}
