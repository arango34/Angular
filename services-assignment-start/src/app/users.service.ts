import { Injectable } from '@angular/core';
import { counterService } from './counter.service';

@Injectable()
export class usersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: counterService) {}

  setToActive(id: number) {
    // this.activeUsers = [...this.activeUsers, this.inactiveUsers[id]];
    this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers = this.inactiveUsers.filter((item, i) => i !== id);
    this.inactiveUsers.splice(id, 1);

    this.counterService.toActiveCount++;
    this.counterService.onToActive(this.counterService.toActiveCount);
  }

  setToInactive(id: number) {
    // this.inactiveUsers = [...this.inactiveUsers, this.activeUsers[id]];
    this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers = this.activeUsers.filter((item, i) => i !== id);
    this.activeUsers.splice(id, 1);

    this.counterService.toInactiveCount++;
    this.counterService.onToInactive(this.counterService.toInactiveCount);
  }
}
