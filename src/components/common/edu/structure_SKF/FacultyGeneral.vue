<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title class="headline">«Общенаучная подготовка»</v-list-item-title>
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
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" md="3" v-for="(s, i) in certificate" :key="i">
          <v-card>
            <v-img :src="s"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'faculty-general',
  data () {
    return {
      features: [
        { icon: 'star-circle-outline', name: '11 преподавателей' },
        { icon: 'star-circle-outline', name: 'Математическое моделирование систем и процессов' },
        { icon: 'star-circle-outline', name: 'Повышение безопасности на предприятиях ЮФО' }
      ],
      certificate: [
        'http://www.skf-mtusi.ru/images/kaf/onp1_1.jpg',
        'http://www.skf-mtusi.ru/images/kaf/onp2_1.jpg',
        'http://www.skf-mtusi.ru/images/kaf/onp3_1.jpg',
        'http://www.skf-mtusi.ru/images/kaf/onp4_1.jpg'
      ]
    }
  },
  head() {
    return {
      title: 'Общенаучная подготовка',
      meta: [
        {
          hid: 'science',
          name: 'Общенаучная подготовка',
          content: 'Общенаучная подготовка'
        }
      ]
    }
  }

}
</script>
