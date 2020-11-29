<template>
  <v-row justify="center">
    <v-col class="text-center">
      <v-btn
        outlined
        color="blue darken-2"
        @click="showDialog = true"
      > <v-icon left>mdi-plus</v-icon> Добавить новость</v-btn>
    </v-col>
    <v-dialog
      v-model="showDialog"
      persistent=""
      max-width="700px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{isEdit ? 'Редактировать новость' : 'Добавить новость'}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field hide-details solo label="Заголовок" required v-model="title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea hide-details solo label="Вступление" required v-model="introText"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-md-editor mode="edit" v-model="fullText" height="400px"></v-md-editor>
                <!-- <v-textarea hide-details solo label="Основной текст" required v-model="fullText"></v-textarea> -->
              </v-col>
              <v-col cols="12">
                <v-file-input hide-details chips solo multiple accept="image/*" label="Фотографии" v-model="images"></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-date-picker
                  v-if="!isDatePicked"
                  landscape
                  elevation="15"
                  full-width
                  locale="ru-ru"
                  v-model="datePicker"
                />
                <v-time-picker
                  v-else
                  elevation="15"
                  full-width
                  landscape
                  format="24hr"
                  v-model="timePicker"
                />
                <v-btn block @click="isDatePicked = !isDatePicked">Выбрать {{ !isDatePicked ? 'время' : 'дату' }}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined @click="restoreAll" :loading="loading"><v-icon left>mdi-close</v-icon>Отмена</v-btn>
          <v-btn outlined color="success" @click="!isEdit ? sendFeed() : editFeed()" :loading="loading"><v-icon left>mdi-plus</v-icon>{{isEdit ? 'Редактировать' : 'Добавить'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { bus } from '@/bus'

export default {
  name: 'adminAddNewFeed',
  data: () => ({
    isEdit: false,
    showDialog: false,
    isDatePicked: false,
    datePicker: new Date().toISOString().substring(0, 10),
    timePicker: null,
    id: '',
    title: '',
    introText: '',
    fullText: '',
    images: []
  }),
  methods: {
    sendFeed () {
      const { timePicker, datePicker, title, introText, fullText, images } = this
      const time = Date.parse(new Date(`${datePicker}T${timePicker}`))
      this.$store.dispatch('sendFeed', { title, introText, fullText, images, time }).then(() => {
        this.restoreAll()
      })
    },
    editFeed () {
      const { id, title, introText, fullText, images, timePicker, datePicker } = this
      const time = Date.parse(new Date(`${datePicker}T${timePicker}`))
      this.$store.dispatch('editFeed', { title, introText, fullText, images, id, time }).then(() => {
        this.restoreAll()
      })
    },
    restoreAll () {
      this.isEdit = false
      this.showDialog = false
      this.id = ''
      this.title = ''
      this.introText = ''
      this.fullText = ''
      this.images = []
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  mounted () {
    bus.$on('editFeed', data => {
      this.isEdit = true
      this.showDialog = true
      this.id = data.id
      this.title = data.title
      this.introText = data.introText
      this.fullText = data.fullText
      data.images.forEach(async image => {
        const blob = await fetch(image).then(r => r.blob())
        const f = new File([blob], image, { type: blob.type })
        this.images.push(f)
      })
    })
  }
}
</script>
