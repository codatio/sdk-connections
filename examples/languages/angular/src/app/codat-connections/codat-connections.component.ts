import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  DisconnectCallbackArgs,
  ErrorCallbackArgs,
  ReconnectCallbackArgs,
} from 'https://connections-sdk.codat.io';

@Component({
  selector: 'app-codat-connections',
  templateUrl: './codat-connections.component.html',
  styleUrls: ['./codat-connections.component.css'],
})
export class CodatConnectionsComponent implements AfterViewInit {
  @ViewChild('target') target: ElementRef | undefined;
  @Input() accessToken: string | undefined;
  @Output() close = new EventEmitter<void>();
  @Output() disconnect = new EventEmitter<DisconnectCallbackArgs>();
  @Output() reconnect = new EventEmitter<ReconnectCallbackArgs>();
  @Output() error = new EventEmitter<ErrorCallbackArgs>();

  ngAfterViewInit() {
    if (this.target && this.accessToken) {
      const target = this.target.nativeElement;
      const accessToken = this.accessToken;

      // webpackIgnore is a magic comment that prevents webpack from
      //   parsing this dynamic import. The build will fail otherwise.
      // See https://webpack.js.org/api/module-methods/#magic-comments
      import(/* webpackIgnore: true */ 'https://connections-sdk.codat.io').then(
        ({ CodatConnections }) => {
          new CodatConnections({
            target,
            props: {
              accessToken,
              onClose: () => this.close.emit(),
              onDisconnect: (connection) => this.disconnect.emit(connection),
              onReconnect: (connection) => this.reconnect.emit(connection),
              onError: (error) => {
                this.error.emit(error);
                this.close.emit();
              },
            },
          });
        }
      );
    }
  }
}
