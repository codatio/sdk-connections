<script setup lang="ts">
import CodatConnections from './components/CodatConnections.vue'
import { ref } from 'vue'
import type { DisconnectCallbackArgs, ReconnectCallbackArgs, ErrorCallbackArgs } from 'https://connections-sdk.codat.io'

const accessToken = ref('')
const modalOpen = ref(false)

const handleCloseModal = () => {
  modalOpen.value = false
}

const handleOnDisconnect = (connection: DisconnectCallbackArgs) => {
  alert(`On disconnect callback - ${connection.connectionId}`)
}

const handleOnReconnect = (connection: ReconnectCallbackArgs) => {
  alert(`On disconnect callback - ${connection.connectionId}`)
}

const handleOnClose = () => {
  handleCloseModal()
}

const handleOnError = (error: ErrorCallbackArgs) => {
  alert(`On error callback -${error.message}`)
  handleCloseModal()
}
</script>

<template>
  <main class="main">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <h1 class="title">
        <a target="_blank" rel="noreferrer" href="https://github.com/codatio/sdk-connections/tree/main/examples/vue/README.md">
          Connections SDK x Vue
        </a>
      </h1>
    </header>
    <div class="content">
      <p>An example of embedding Connections SDK within a brand new create-vue project</p>
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
          <a href="https://github.com/codatio/sdk-connections/tree/main#generate-access-token" target="_blank" rel="noreferrer">
            Generate an access token
          </a>
        </li>
        <li>Paste the access token below</li>
      </ol>
      <div class="inputWrapper">
        <textarea v-model="accessToken" placeholder="Provide a valid JWT"></textarea>
        <button @click="modalOpen = !modalOpen">
          {{ modalOpen ? 'Exit' : 'Start managing connections' }}
        </button>
      </div>

    </div>
    <div v-if="modalOpen" class="modalWrapper">
      <CodatConnections :access-token="accessToken" :on-disconnect="handleOnDisconnect" :on-close="handleOnClose"
        :on-reconnect="handleOnReconnect" :on-error="handleOnError" />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  gap: 1rem;
  min-height: 100vh;
  box-sizing: border-box;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.modalWrapper {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 2;
}

.inputWrapper {
  display: flex;
  gap: .5rem
}
</style>
