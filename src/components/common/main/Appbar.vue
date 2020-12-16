<template>
  <v-app-bar app dense flat clipped-left :color="!$vuetify.theme.dark ? '#ffffff' : '#272727'">
    <v-app-bar-nav-icon @click="$bus.$emit('change-drawer')"></v-app-bar-nav-icon>
    <v-badge color="light-blue darken-3" :content="user.role" overlap v-if="user !== null">
      <v-toolbar-title class="px-0" @click="$router.push('/')" style="cursor: pointer;">СКФ МТУСИ</v-toolbar-title>
    </v-badge>
    <v-toolbar-title class="px-0" @click="$router.push('/')" style="cursor: pointer;" v-else>СКФ МТУСИ</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn
        v-for="(e, i) in fastLinks"
        :key="i"
        text
        :to="e.path"
        active-class="blue--text"
      >
        <span class="overline">{{e.title}}</span>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>{{$vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'}}</v-icon>
    </v-btn>
    <v-btn icon @click="$setSystemMessage('Данная функция появится в ближайшем времени')">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
    <v-menu v-if="user === null && !$vuetify.breakpoint.mobile" left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/auth">
          <v-list-item-title>Авторизация</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu v-else-if="!$vuetify.breakpoint.mobile">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link :to="{ path: `/${user.role}` }">
          <v-list-item-title>Личный кабинет</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logoutUser">
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'main-app-bar',
  data () {
    return {
      fastLinks: [{
        title: 'Главная',
        path: '/'
      },
      {
        title: 'Новости',
        path: '/feed'
      },
      {
        title: 'Расписание',
        path: '/sveden/schedule'
      },
      {
        title: 'Основные сведения',
        path: '/sveden/about'
      }]
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    logoutUser () {
      this.logout().then(() => this.$router.push('/auth'))
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
