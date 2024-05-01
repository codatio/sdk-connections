import { CodatConnections } from "https://connections-sdk.codat.io";

const target = document.querySelector("#target");

const onClose = () => alert("On close callback");
const onDisconnect = () =>
  alert(`On disconnect callback : ${connection.connectionId}`);
const onReconnect = () =>
  alert(`On reconnect callback : ${connection.connectionId}`);
const onError = (error) => alert(`On error callback : ${error.message}`);

new CodatConnections({
  target,
  props: {
    accessToken: "",
    onClose,
    onDisconnect,
    onReconnect,
    onError,
  },
});
