import { Pipe, PipeTransform } from '@angular/core';
import { Credit } from '../interfaces/billboard-response';

@Pipe({
  name: 'noProfile',
})
export class NoProfilePipe implements PipeTransform {
  transform(value: Credit[]): Credit[] {

    if (value.every(credit => credit.profile_path?.length > 0)) {
      return value
    };

    return value.map(credit => {
      if (credit.profile_path?.length > 0) return credit;
      return {
        ...credit,
        profile_path: 'http://localhost:4200/assets/img/no-image.jpg',
      }
    });

  }
}
