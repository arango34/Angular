import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Server1', 'Server2'];
  showParagraph = false;
  btnClicks: Date[] | [] = [];
  showBackground: boolean;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onInput(e: Event) {
    const event = e.target as HTMLInputElement;
    this.serverName = event.value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers = [...this.servers, this.serverName];
    this.serverCreationStatus = `Server(${this.serverName}) was created`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    this.showParagraph = !this.showParagraph;
    this.btnClicks = [...this.btnClicks, new Date()];
  }
}
