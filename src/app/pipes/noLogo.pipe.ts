import { Pipe, PipeTransform } from '@angular/core';
import { ProductionCompany } from '../interfaces/billboard-response';

@Pipe({
  name: 'noLogo',
})
export class NoLogoPipe implements PipeTransform {
  transform(value: ProductionCompany[] | undefined): ProductionCompany[] {

    if (!value) return [];

    if (value.every(credit => credit.logo_path?.length > 0)) {
      return value
    };

    return value.map(credit => {
      if (credit.logo_path?.length > 0) return credit;
      return {
        ...credit,
        logo_path: 'http://localhost:4200/assets/img/no-image.jpg',
      }
    });

  }
}
