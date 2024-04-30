declare module 'https://connections-sdk.codat.io' {
  export interface DisconnectCallbackArgs {
    connectionId: string;
  }

  export interface ReconnectCallbackArgs {
    connectionId: string;
  }

  export interface ErrorCallbackArgs {
    correlationId?: string;
    message?: string;
    errorCode?: number;
    userRecoverable: boolean;
  }

  type IntegrationSourceTypeKeys = 'accounting' | 'banking' | 'commerce';

  type CodatTextOptionsKeys =
    `${IntegrationSourceTypeKeys}.connectionDetails.dataTypes`;

  export type CodatConnectionsOptions = {
    text?: CodatTextOptionsKeys;
  };

  export type CodatConnectionsProps = {
    accessToken: string;
    onClose: () => void;
    onError: (args: ErrorCallbackArgs) => void;
    onDisconnect: (args: DisconnectCallbackArgs) => void;
    onReconnect: (args: ReconnectCallbackArgs) => void;
    options?: CodatConnectionsOptions;
  };

  export class CodatConnections {
    constructor(args: { target: HTMLElement; props: CodatConnectionsProps });
  }
}
