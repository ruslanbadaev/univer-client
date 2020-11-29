<template>
  <v-card>
    <v-card-title>
      <v-list-item>
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>СКФ МТУСИ</v-list-item-title>
          <v-list-item-subtitle class="font-weight-light">{{publishDate}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-list v-if="user.role === 'admin' && !preview">
          <v-list-item>
            <v-btn icon color="blue darken-3" @click="editFeed($props.id)">
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
            <v-btn icon color="red darken-3" @click="$emit('delete-feed', $props.id)">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-list-item>
    </v-card-title>
    <v-card-text>
      <div class="title">{{title}}</div>
      <v-container fluid class="pa-0" v-if="images.length > 0">
        <image-template
          @show-full-image="showFullImage"
          :images="images"
          :preview="preview"
        />
      </v-container>
      <div class="text--primary" v-if="showFullText">
       <v-md-editor mode="preview" v-model="fullText"></v-md-editor>
      </div>
      <div class="text--primary" v-else>
        <v-md-editor mode="preview" v-model="introText"></v-md-editor>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        color="blue darken-2"
        @click="showFullText = !showFullText"
        v-if="!showFullText"
      >
        Подробнее
      </v-btn>
      <v-btn
        text
        v-else
        color="blue darken-2"
        @click="showFullText = !showFullText"
      >
        Скрыть
      </v-btn>
    </v-card-actions>
    <template>
      <v-dialog
        v-model="dialog"
        :width="$vuetify.breakpoint.mobile ? '90%' : '720px'"
      >
      <v-carousel
      hide-delimiters
      v-model="fullImage"
      height="auto"
      max-height="90%"
      cycle
      >
        <v-carousel-item
        v-for="(e, i) in images"
        :key="i"
        :src="e"
        contain
        ></v-carousel-item>
      </v-carousel>
      </v-dialog>
    </template>
  </v-card>
</template>

<script>
import ImageTemplate from './FeedImageTemplate'

export default {
  props: {
    id: String,
    date: Number,
    title: String,
    fullText: String,
    introText: String,
    images: Array,
    preview: Boolean
  },
  components: {
    'image-template': ImageTemplate
  },
  data: () => ({
    breakpoint: '',
    dialog: false,
    fullImage: 0,
    showFullText: false
  }),
  methods: {
    editFeed (props) {
      this.$router.push({ name: 'admin-router', params: { route: 'feed' }, query: { id: props } })
    },
    showFullImage (e) {
      this.fullImage = e
      this.dialog = true
    }
  },
  computed: {
    publishDate () {
      const date = new Date(this.date)
      return date.toLocaleString('ru-RU')
    },
    user () {
      return this.$store.getters.user ? this.$store.getters.user.role : 'guest'
    }
  }
}
</script>

<style>
  .v-md-editor-preview.github-markdown-body {
    padding: 0 !important;
  }

  .v-application p {
    word-wrap: normal !important;
  }

  .github-markdown-body {
    word-break: normal !important;
  }
</style>
