<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-list-item>
          <v-header>11.03.02</v-header>
          <v-list-item-content class="text-center">
            <v-list-item-title class="headline">«Инфокоммуникационные технологии и системы связи»</v-list-item-title>
            <v-list-item-subtitle>Руководит кафедрой кандидат технических наук, доцент Юхнов Василий Иванович</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" md="4" v-for="(f, i) in features" :key="i">
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-{{f.icon}}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{f.name}}</v-list-item-title>
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
  name: 'faculty-itss',
  data () {
    return {
      features: [
        { icon: 'star-circle-outline', name: 'современные технические средства' },
        { icon: 'star-circle-outline', name: 'учебный центр компании «Unify Communications»' },
        { icon: 'star-circle-outline', name: 'активно занимаемся научными исследованиями' },
        { icon: 'star-circle-outline', name: 'практика на базе операторов фиксированной и подвижной связи' },
        { icon: 'star-circle-outline', name: 'штатные преподаватели кафедры ИТСС' },
        { icon: 'star-circle-outline', name: 'специалисты из ПАО «Ростелеком», ПАО «Вымпелком»' }
      ]
    }
  },
  head() {
    return {
      title: 'Инфокоммуникационные технологии и системы связи',
      meta: [
        {
          hid: 'faculty-itss',
          name: 'Инфокоммуникационные технологии и системы связи',
          content: 'Инфокоммуникационные технологии и системы связи'
        }
      ]
    }
  }
}

</script>
