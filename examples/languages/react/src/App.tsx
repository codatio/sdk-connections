import "./App.css";

import {
  DisconnectCallbackArgs,
  ErrorCallbackArgs,
  ReconnectCallbackArgs,
} from "@codat/sdk-connections";

import { CodatConnections } from "./components/CodatConnections";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onDisconnect = (connection: DisconnectCallbackArgs) =>
    alert(`On disconnect callback - ${connection.connectionId}`);
  const onReconnect = (connection: ReconnectCallbackArgs) =>
    alert(`On reconnect callback - ${connection.connectionId}`);
  const onClose = () => setModalOpen(false);
  const onError = (error: ErrorCallbackArgs) =>
    alert(`On error callback - ${error.message}`);

  return (
    <div className="App">
      <header>
        <h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/codatio/sdk-connections/tree/main/examples/react/README.md"
          >
            Connections SDK x Create React App
          </a>
        </h1>
        <p>
          An example of embedding Connections SDK within a brand new
          create-react-app project
        </p>
      </header>

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
        <div className="input-wrapper">
          <textarea
            value={accessToken}
            placeholder="Provide a valid access token"
            onChange={(e) => {
              setAccessToken(e.target.value);
            }}
          ></textarea>
          <button onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen ? "Exit" : "Start managing connections"}
          </button>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      {modalOpen && (
        <div className="modal-wrapper">
          <CodatConnections
            accessToken={accessToken}
            onDisconnect={onDisconnect}
            onReconnect={onReconnect}
            onError={onError}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
}

export default App;
