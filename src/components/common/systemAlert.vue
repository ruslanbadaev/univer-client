<template>
  <v-snackbar
    v-model="isSystemMessage"
    :color="systemMessageColor"
    :timeout="6000"
    bottom
    right
    tile
    vertical>
    <v-icon left>mdi-alert-circle-outline</v-icon>
    {{systemMessage}}
    <template v-slot:action="{ attrs }">
      <v-btn
      text
      v-bind="attrs"
      @click="isSystemMessage = false">
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { bus } from '@/bus'
export default {
  name: 'system-alert',
  data () {
    return {
      isSystemMessage: false,
      systemMessage: '',
      systemMessageColor: 'blue-grey darken-3'
    }
  },
  mounted () {
    bus.$on('system-message', data => {
      this.isSystemMessage = true
      if (typeof data === 'object') {
        this.systemMessage = data.message || 'Неизвестная ошибка...'
        this.systemMessageColor = data.color || 'blue-grey darken-3'
      } else {
        this.systemMessage = data
      }
    })
  }
}
</script>
