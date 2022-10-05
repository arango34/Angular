import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: usersService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }
}
