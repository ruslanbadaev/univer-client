<template>
  <v-row>
    <v-col cols="12">
     <v-expansion-panels>
       <v-expansion-panel v-for="e in progress" :key="e.id">
         <v-expansion-panel-header>{{e.subject}}</v-expansion-panel-header>
         <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" class="d-flex mb-1">
              <div class="headline">Преподаватель: {{e.teacher}}</div>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap " style="overflow-x: auto">
            <v-col md="4" cols="10">
              <v-card class="text-center">
                <v-card-text>
                  <div class="title">Завершенность предмета</div>
                  <v-progress-circular
                  size="100"
                  :value="e.value"
                  width="8"
                  color="light-blue"
                  >{{e.value}}%</v-progress-circular>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-sheet
                class="d-flex pa-2 mb-2"
                elevation="1"
                v-for="modules in e.modules"
                :key="modules.title"
              >
              <div class="title">{{modules.title}}</div>
              <v-spacer></v-spacer>
              <v-chip
              :color="!getVuetifyTypeTheme ? 'green lighten-3' : 'green darken-3'"
              >{{modules.score}} из 50</v-chip>
              </v-sheet>
              <v-sheet
                class="d-flex pa-2 mb-2"
                elevation="1"
              >
              <div class="title">Пропущено</div>
              <v-spacer></v-spacer>
              <v-chip
              :color="!getVuetifyTypeTheme ? 'green lighten-3' : 'green darken-3'"
              >{{e.lostTime['time']}} из {{e.lostTime['total']}} часов</v-chip>
              </v-sheet>
            </v-col>
            <v-col md="4" cols="11">
              <v-sheet
                class="d-flex pa-2 mb-2"
                elevation="1"
                v-for="rating in e.rating"
                :key="rating.type"
              >
              <div class="title">Отметка {{rating.type}}</div>
              <v-spacer></v-spacer>
              <v-chip
              :color='!getVuetifyTypeTheme ? rating.color + " lightent-3" : rating.color + " darken-3"'
              >{{Math.floor(rating.count * 100 / rating.total)}}%</v-chip>
              </v-sheet>
            </v-col>
          </v-row>
         </v-expansion-panel-content>
       </v-expansion-panel>
     </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    name: 'student-progress',
    progress: [
      {
        id: 1,
        subject: 'ИНО',
        teacher: 'Светличная Наталья Олеговная',
        value: 100,
        modules: [
          { title: 'Модуль 1', score: 49 },
          { title: 'Модуль 2', score: 49 }
        ],
        lostTime: { time: 1, total: 20 },
        rating: [
          { type: '5', count: 60, total: 100, color: 'green' },
          { type: '4', count: 30, total: 100, color: 'yellow' },
          { type: '3', count: 10, total: 100, color: 'orange' },
          { type: '2', count: 0, total: 100, color: 'red' }
        ]
      }
    ]
  }),
  computed: {
    getVuetifyTypeTheme () {
      return this.$vuetify.theme.dark
    }
  }
}
</script>
