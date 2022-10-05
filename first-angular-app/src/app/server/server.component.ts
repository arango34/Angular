import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online {color: white;}'],
})
export class ServerComponent {
  serverStatus = 'offline';
  serverId: number;

  constructor() {
    this.serverStatus = Math.random() >= 0.5 ? 'Online' : 'Offline';
    this.serverId = Math.ceil(Math.random() * 20);
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
