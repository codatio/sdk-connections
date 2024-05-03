<script lang="ts">
  import welcome from "./assets/svelte-welcome.webp";
  import Header from "./lib/Header.svelte";
  import welcome_fallback from "./assets/svelte-welcome.png";
  import "./styles.css";
  import CodatConnections from "./lib/CodatConnections.svelte";
  import type {
    DisconnectCallbackArgs,
    ReconnectCallbackArgs,
    ErrorCallbackArgs,
  } from "https://connections-sdk.codat.io";

  let modalOpen = false;
  let accessToken = "";

  const onDisconnect = (connection: DisconnectCallbackArgs) =>
    alert(`On disconnect callback - ${connection.connectionId}`);
  const onReconnect = (connection: ReconnectCallbackArgs) =>
    alert(`On reconnect callback - ${connection.connectionId}`);
  const onClose = () => (modalOpen = false);
  const onError = (error: ErrorCallbackArgs) =>
    alert(`On error callback - ${error.message}`);
</script>

<div class="app">
  <Header />
  <main>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>
    <h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/codatio/sdk-connections/blob/main/examples/svelte/README.md"
      >
        Connections SDK x Svelte
      </a>
    </h1>
    <p>An example of embedding Connections SDK within a Svelte App</p>
    <div>
      <ol>
        <li>
          <a
            href="https://github.com/codatio/sdk-connections/tree/main#set-cors-domains"
            target="_blank"
            rel="noreferrer"
          >
            Set CORS domains
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codatio/sdk-connections/tree/main#generate-access-token"
            target="_blank"
            rel="noreferrer"
          >
            Generate an access token
          </a>
        </li>
        <li>Paste the access token below</li>
      </ol>
      <div class="input-wrapper">
        <textarea bind:value={accessToken} placeholder="Provide a valid JWT"
        ></textarea>
        <button
          on:click={() => {
            modalOpen = true;
          }}>Start managing connections</button
        >
      </div>
    </div>
    {#if modalOpen}
      <div class="modal-wrapper">
        <CodatConnections
          {accessToken}
          {onDisconnect}
          {onReconnect}
          {onClose}
          {onError}
        />
      </div>
    {/if}
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    margin: 0;
  }

  main {
    flex: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
    padding: 0 0 min(200px, calc(100% * 495 / 2048)) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
  .modal-wrapper {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: fixed;
    inset: 0;
  }
</style>
