<script setup lang="ts">
import type { ConnectionCallbackArgs, DisconnectCallbackArgs, ErrorCallbackArgs, ReconnectCallbackArgs } from 'https://connections-sdk.codat.io'

import { ref, onMounted } from 'vue'

const props = defineProps<{
  accessToken: string
  onDisconnect: (args: DisconnectCallbackArgs) => void
  onReconnect: (args: ReconnectCallbackArgs) => void
  onError: (args: ErrorCallbackArgs) => void
  onClose: () => void
}>()

const target = ref()

onMounted(() => {
  if (target.value && target.value.children.length === 0) {
    import('https://connections-sdk.codat.io').then(({ CodatConnections }) => {
      new CodatConnections({
        target: target.value,
        props: {
          accessToken: props.accessToken,
          onDisconnect: props.onDisconnect,
          onReconnect: props.onReconnect,
          onClose: props.onClose,
          onError: props.onError
        }
      })
    })
  }
})
</script>

<template>
<!-- Inline styles suggest recommended dimensions -->
  <div style="width: 460px; height: 840px; max-height: 95%;" ref="target"></div>
</template>
