<script lang="ts">
  import type {
    ConnectionCallbackArgs,
    ErrorCallbackArgs,
  } from "https://connections-sdk.codat.io";
  import type {
    DisconnectCallbackArgs,
    ReconnectCallbackArgs,
  } from "https://connections-sdk.codat.io";

  export let accessToken: string;
  export let onDisconnect: (connection: DisconnectCallbackArgs) => void;
  export let onReconnect: (connection: ReconnectCallbackArgs) => void;
  export let onClose: () => void;
  export let onError: (error: ErrorCallbackArgs) => void;

  const CodatConnectionsAction = (node: HTMLElement) => {
    const target = node;
    import("https://connections-sdk.codat.io").then(({ CodatConnections }) => {
      new CodatConnections({
        target,
        props: {
          accessToken,
          onDisconnect,
          onReconnect,
          onClose,
          onError,
        },
      });
    });
  };
</script>

<!-- Inline styles suggest recommended dimensions -->
<div
  style="width: 460px; height:840px;  maxHeight: 95%"
  use:CodatConnectionsAction
/>
