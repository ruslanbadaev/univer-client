<template>
  <v-row justify="center" v-if="feed.length">
    <v-col cols="12" md="9" xl="7" v-if="loading">
      <v-row v-for="i in 4" :key="i">
        <v-col cols="12">
          <v-skeleton-loader
            class="mb-6"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" xl="7" class="mb-2" v-for="(e, i) in feed" :key="e.id">
      <feed-component
      v-intersect.once="(i+1) % 5 === 0 ? onIntersect : null"
      :id="e._id"
      :date="e.date"
      :title="e.title"
      :fullText="e.fullText"
      :introText="e.introText"
      :images="e.images"
      :views="e.views"
      :preview="false"
      @delete-feed="deleteFeed"
      />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col class="text-center display-1">Новостей еще нет...</v-col>
  </v-row>
</template>

<script>
import FeedComponent from '@/components/common/feed/FeedComponent'
import { mapGetters } from 'vuex'

export default {
  name: 'Feed',
  inject: ['theme'],
  data: () => ({
    feedVisible: 5,
    feedImplimenter: 5
  }),
  components: {
    'feed-component': FeedComponent
  },
  methods: {
    deleteFeed (id) {
      this.$store.dispatch('deleteFeed', id)
    },
    onIntersect (entries, observer, isIntersecting) {
      if (isIntersecting) {
        this.feedVisible += this.feedImplimenter
        this.$store.commit('sharedFeed', this.feedVisible)
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('loadFeed')
  },
  computed: {
    ...mapGetters([
      'feed',
      'loading'
    ])
  }
}
</script>
