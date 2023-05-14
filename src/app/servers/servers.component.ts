import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus: string = 'No server is created';
  serverName = 'Test server';
  serverStatus = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 6000);
  }
  onCreateServer() {
    this.serverStatus = true;
    return (this.serverCreationStatus = 'Server created: Name is: '+ this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
