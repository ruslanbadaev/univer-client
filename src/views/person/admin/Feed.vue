<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="text-center headline">Создание новости</v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field hide-details solo label="Заголовок" required v-model="title"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-md-editor mode="edit" v-model="introText" height="200px" placeholder="Вступление"></v-md-editor>
                    </v-col>
                    <v-col cols="12">
                      <v-md-editor mode="edit" v-model="fullText" height="300px" placeholder="Основной текст"></v-md-editor>
                    </v-col>
                    <v-col cols="1">
                      <v-file-input hide-input accept="image/*" multiple v-model="images" @change="setBlobImage"></v-file-input>
                    </v-col>
                    <v-col cols="11" class="d-flex">
                      <div class="preview" v-for="(image, i) in images" :key="image.name" :style="{ background: `url(${image.preview})`, backgroundSize: 'contain' }">
                        <v-btn @click="onDeleteImage(i)" color="error" x-small>x</v-btn>
                      </div>
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
                <v-btn outlined color="success" @click="!isEdit ? sendFeed() : editFeed()" :loading="loading"><v-icon left>mdi-plus</v-icon>Опубликовать</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="text-center headline">Предпросмотр</v-col>
          <v-col cols="12">
            <feed-component
              :id="id"
              :date="Date.parse(new Date(`${datePicker}T${timePicker}`))"
              :title="title"
              :introText="introText"
              :fullText="fullText"
              :images="images"
              :preview="true"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'lk-admin-feed',
  components: {
    'feed-component': () => import('@/components/common/feed/FeedComponent')
  },
  data () {
    return {
      isEdit: false,
      id: null,
      title: '',
      introText: '',
      fullText: '',
      images: [],
      isDatePicked: false,
      datePicker: new Date().toISOString().substring(0, 10),
      timePicker: null,
      preview: true
    }
  },
  methods: {
    sendFeed () {
      const { timePicker, datePicker, title, introText, fullText, images } = this
      const time = Date.parse(new Date(`${datePicker}T${timePicker}`))
      this.$store.dispatch('sendFeed', { title, introText, fullText, images, time }).then(() => {
        this.restoreAll()
      }).catch(e => this.$setSystemMessage(e))
    },
    editFeed () {
      const { id, title, introText, fullText, images, timePicker, datePicker } = this
      const time = Date.parse(new Date(`${datePicker}T${timePicker}`))
      this.$store.dispatch('editFeed', { title, introText, fullText, images, id, time }).then(() => {
        this.restoreAll()
      }).catch(e => this.$setSystemMessage(e))
    },
    restoreAll () {
      this.isEdit = false
      this.id = null
      this.title = ''
      this.introText = ''
      this.fullText = ''
      this.images = []
      this.timePicker = null
    },
    setBlobImage () {
      this.images.forEach((image, index) => {

        const src = URL.createObjectURL(image)
        image.preview = src
        
      })
    },
    onDeleteImage (index) {
      this.images.splice(index, 1)
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'feed'
    ])
  },
  mounted () {
    if (this.$route.query.id !== undefined) {
      this.isEdit = true
      const { _id, title, introText, fullText, images, date } = this.feed.filter(feed => feed._id === this.$route.query.id)[0]
      this.id = _id
      this.title = title
      this.introText = introText
      this.fullText = fullText
      const _date = new Date(date).toLocaleString('ru').split(' ')
      this.datePicker = new Date(date).toISOString().substring(0, 10)
      this.timePicker = _date[1]
      images.forEach(async image => {
        const blob = await fetch(`${process.env.VUE_APP_SERVER}/img/news/${image}`).then(r => r.blob())
        const f = new File([blob], image, { type: blob.type })
        f.preview = image
        this.images.push(f)
      })
    }
  }
}
</script>

<style scoped>
  .preview {
    width: 80px;
    height: 50px;
    margin: 5px;
    border-radius: .25rem;
    text-align: right;
  }
</style>
