<template>
  <v-bottom-navigation v-if="$vuetify.breakpoint.mobile" color="teal" app>
    <v-btn v-for="e in siteRoutes" :key="e.title" :to="e.path">
      <span>{{e.title}}</span>
      <v-icon>mdi-{{e.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'main-bottom-navigation',
  data () {
    return {
      siteRoutes: [{
        title: 'Главная',
        path: '/',
        icon: 'compass-outline'
      },
      {
        title: 'Новости',
        path: '/feed',
        icon: 'newspaper-variant-outline'
      },
      {
        title: 'Расписание',
        path: '/sveden/schedule',
        icon: 'newspaper-variant-outline'
      },
      {
        title: 'О нас',
        path: '/sveden/about',
        icon: 'access-point'
      }]
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
