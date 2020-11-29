<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <v-row>
        <v-col cols="3" class="pa-1">
          <v-card>
            <v-img
              contain
              :src="lecturer.photo"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-row>
            <v-col cols="12" class="pa-1">
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{lecturer.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{lecturer.chairFullName}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="3" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Общий стаж работы</v-list-item-subtitle>
                        <v-list-item-title>{{yearsComputed(lecturer.general_experience)}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="4" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Стаж по специальности</v-list-item-subtitle>
                        <v-list-item-title>{{yearsComputed(lecturer.edu_experience)}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="5" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Должность</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(p, i) in lecturer.position" :key="i">{{p}}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="6" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Образование</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(e, i) in lecturer.edu" :key="i">{{e}}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="6" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Тип образования</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(t, i) in lecturer.edu_type" :key="i">{{t}}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Интересы</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(interest, i) in lecturer.interests" :key="i">{{interest}}{{lecturer.interests.length === ++i ? '.' : ', '}}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Дисциплины</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(disciplin, i) in lecturer.disciplines" :key="i">{{disciplin}}{{lecturer.disciplines.length === ++i ? '.' : ', '}}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" class="pa-1">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle>Повышение квалификации</v-list-item-subtitle>
                        <v-list-item-title><span v-for="(up, i) in lecturer.edu_qualification_up" :key="i"><v-chip label class="ma-1">{{up}}</v-chip></span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" style="overflow-y: auto;" class="pt-0">
          <v-row>
            <v-col cols="12" v-for="(sp, i) in lecturer.edu_specialty" :key="i" class="pa-1">
              <v-card>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>{{sp.type}}</v-list-item-title>
                    <v-list-item-subtitle>{{sp.direction}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>{{sp.organization_type}}</v-list-item-title>
                    <v-list-item-title>{{sp.organization_name}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="10">
      <v-row class="flex-nowrap" style="overflow-x: auto;">
        <v-col
          class="pt-0"
          cols="3"
          v-for="(l, i) in allLecturers"
          :key="i"
        >
          <v-card link :to="{ name: 'edu', params: { route: 'lecturers' }, query: { chair: l.chair, uid: l.uid }}">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="l.photo"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle><span v-for="(p, i) in l.position" :key="i">{{p}}</span></v-list-item-subtitle>
                <v-list-item-title>{{l.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'lecturers',
  data () {
    return {}
  },
  methods: {
    yearsComputed (year) {
      const date = new Date().getFullYear()
      const total = ((date - year) % 100)
      if (total >= 5 && total <= 20) {
        return `${date - year} лет`
      } else if (total >= 2 && total <= 4) {
        return `${date - year} года`
      } else if (total >= 21 && total <= 24) {
        return `${date - year} года`
      } else {
        return `${date - year} лет`
      }
    }
  },
  computed: {
    lecturer () {
      return this.$store.getters[this.$route.query.chair].filter(lecturer => this.$route.query.uid === lecturer.uid).shift()
    },
    allLecturers () {
      return this.$store.getters[this.$route.query.chair]
    }
  }
}
</script>
