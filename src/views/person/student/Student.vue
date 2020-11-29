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
  name: 'lk-student',
  data: () => ({
    links: [
      { name: 'Расписание занятий',  path: 'student-schedule', active: true },
      { name: 'Успеваемость',  path: 'student-progress', active: true },
      { name: 'Портфолио', path: '', active: false }
    ]
  }),
  components: {
    toolbar: () => import('@/components/person/Toolbar'),
    navigation: () => import('@/components/person/Navigation')
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
