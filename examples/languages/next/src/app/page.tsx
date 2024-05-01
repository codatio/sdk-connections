"use client";

import {
  DisconnectCallbackArgs,
  ErrorCallbackArgs,
  ReconnectCallbackArgs,
} from "@codat/sdk-connections";

import { CodatConnections } from "./components/CodatConnections";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
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
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <header>
        <h1 className={styles.mainHeader}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/codatio/sdk-connections/tree/main/examples/next/README.md"
          >
            Connections SDK x NextJS
          </a>
        </h1>
      </header>
      <div className={styles.content}>
        <p>
          An example of embedding Connections SDK within a brand new
          create-next-app project
        </p>
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
        <div className={styles.inputWrapper}>
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
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
        {modalOpen && (
          <div className={styles.modalWrapper}>
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
    </main>
  );
}
