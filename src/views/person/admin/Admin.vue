<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" xl="3" v-for="m in modules" :key="m.title">
        <v-card class="pa-4" :to="{ name: 'lk-admin-view', params: { path: m.route }}" :disabled="!m.active">
          <v-row>
            <v-col cols="8">
              <v-card-title class="headline pt-0" v-text="m.title"></v-card-title>
              <v-card-subtitle class="pb-0" v-text="m.subtitle"></v-card-subtitle>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-icon size="40">{{m.icon}}</v-icon>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'lk-admin',
  data: () => ({
    modules: [
      { route: 'feed', icon: 'mdi-newspaper-variant-multiple-outline', title: 'Новости', subtitle: 'Добавление новостей', active: true },
      { route: 'schedule', icon: 'mdi-archive-alert-outline', title: 'Расписание', subtitle: 'Управление расписанием', active: false },
      { route: 'lecturers', icon: 'mdi-account-tie', title: 'Преподаватели', subtitle: 'Просмотр преподавателей', active: false },
      { route: '/', icon: 'mdi-account-group-outline', title: 'Аккаунты', subtitle: 'Управление аккаунтами', active: false }
    ]
  })
}
</script>
