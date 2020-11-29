<template>
  <v-card
  outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline">СКФ МТУСИ</div>
        <v-list-item-title class="headline">{{name}}</v-list-item-title>
        <v-list-item-subtitle><v-icon>mdi-account-tie</v-icon> {{rank}}</v-list-item-subtitle>
        <v-list-item-subtitle><v-icon>mdi-book-open</v-icon> <span v-for="(e, i) in desciplines" :key="i">{{e}}<span v-if="i+1 !== desciplines.length">,</span></span></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="150"
        height="200"
        color="white"
        class="mt-4"
      >
      <v-img
        contain
        :src="!isErrorLoadImage ? photo : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp'"
        @error="isErrorLoadImage = true"
      ></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn text @click="showFullInfo(_id)">Подробнее</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bus } from '@/bus'

export default {
  name: 'lecturer-component',
  props: {
    _id: String,
    name: String,
    photo: String,
    rank: String,
    desciplines: Array
  },
  data: () => ({
    isErrorLoadImage: false,
    showFullInfo (_id) {
      bus.$emit('show-full-info', _id)
    }
  })
}
</script>
