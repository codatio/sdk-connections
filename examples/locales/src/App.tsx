import "./App.css";

import {
  CodatTextOptions,
  DisconnectCallbackArgs,
  ErrorCallbackArgs,
  ReconnectCallbackArgs,
} from "@codat/sdk-connections";

import { CodatConnections } from "./components/CodatConnections";
import { useState } from "react";

type localeType = {
  default: CodatTextOptions;
  fr: CodatTextOptions;
  es: CodatTextOptions;
};

const locales: localeType = {
  default: {
    "banking.connectionDetails.dataTypes": [""],
  },
  fr: {
    "banking.connectionDetails.dataTypes": [""],
  },
  es: {
    "banking.connectionDetails.dataTypes": [""],
  },
};

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [locale, setLocale] = useState("default");

  const changeLocale = (event: any) => {
    setLocale(event.target.value);
  };

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
        <label>
          Select locale
          <select value={locale} onChange={changeLocale}>
            {Object.keys(locales).map((key) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        </label>
        <ol>
          <li>
            <a
              href="https://github.com/codatio/sdk-connections/tree/main#generate-an-access-token"
              target="_blank"
              rel="noreferrer"
            >
              Generate an access token
            </a>
          </li>
          <li>
            <a>Paste the access token below</a>
          </li>
        </ol>
        <div className="input-wrapper">
          <input
            value={accessToken}
            placeholder="Provide a valid JWT"
            onChange={(e) => {
              setAccessToken(e.target.value);
            }}
          />
          <button onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen ? "Exit" : "Start managing connections"}
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-wrapper">
          <CodatConnections
            accessToken={accessToken}
            onDisconnect={onDisconnect}
            onReconnect={onReconnect}
            onError={onError}
            onClose={onClose}
            options={{
              text: locales[locale as keyof localeType],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
