import {
  DisconnectCallbackArgs,
  ErrorCallbackArgs,
  ReconnectCallbackArgs,
} from 'https://connections-sdk.codat.io';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accessToken = '';
  connectionsOpen = false;

  openConnections() {
    if (this.accessToken) {
      this.connectionsOpen = true;
    }
  }

  closeConnections() {
    this.connectionsOpen = false;
  }

  onDisconnect(connection: DisconnectCallbackArgs) {
    alert(`On disconnect callback : ${connection.connectionId}`);
  }

  onReconnect(connection: ReconnectCallbackArgs) {
    alert(`On reconnect callback : ${connection.connectionId}`);
  }

  onError(error: ErrorCallbackArgs) {
    alert(`On error callback : ${error.message}`);
  }
}
