import { CodatConnections } from "https://connections-sdk.codat.io";

let accessToken = "";
const connectionsSdkTarget = document.getElementById("target");
const submitButton = document.getElementById("modal-button");
const accessTokenInput = document.getElementById("access-token-input");

const closeCallback = () => {
  connectionsSdkTarget.style.pointerEvents = "none";
  connectionsSdkTarget.removeChild(connectionsSdkTarget.children[0]);
};

const onClose = () => closeCallback();
const onDisconnect = (connection) =>
  alert(`On disconnect callback  = ${connection.connectionId}`);
const onReconnect = (connection) =>
  alert(`On reconnect callback  = ${connection.connectionId}`);
const onError = (error) => alert(`On error callback : ${error.message}`);

const openModal = () => {
  connectionsSdkTarget.style.pointerEvents = "initial";
  new CodatConnections({
    target: connectionsSdkTarget,
    props: {
      accessToken,
      onDisconnect,
      onReconnect,
      onClose,
      onError,
    },
  });
};

const handleTextInput = (e) => {
  accessToken = e.target.value;
};

accessTokenInput.addEventListener("change", handleTextInput);
submitButton.addEventListener("click", openModal);
