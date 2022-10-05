import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class counterService {
  toInactiveCount = 0;
  toActiveCount = 0;

  onToInactive(count: number) {
    console.log('active to inactive ' + count);
  }

  onToActive(count: number) {
    console.log('inactive to active ' + count);
  }
}
