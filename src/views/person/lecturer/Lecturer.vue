<template>
  <v-container fluid>
    <toolbar
      :name="user.name"
      :role="user.role"
    />
    <v-row>
      <navigation 
        :links="links"
      />
    </v-row>
    <v-row>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'lk-lecturer',
  data: () => ({
    links: [
      { name: 'Расписание занятий', path: 'lecturer-schedule', active: true },
      { name: 'МРС', path: 'lecturer-mrs', active: true }
    ]
  }),
  components: {
    toolbar: () => import('@/components/person/Toolbar'),
    navigation: () => import('@/components/person/Navigation')
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    isMobile () {
      return ['xs', 'sm'].indexOf(this.$vuetify.breakpoint.name) === -1
    }
  }
}
</script>
