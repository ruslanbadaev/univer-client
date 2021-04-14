<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-card-text>
          <v-header>Основные задачи</v-header>
          <v-row>
            <v-col cols="6">
              <v-card>
                <v-card-text class="black--text">
                  <span>полное и оперативное библиотечно-информационное обслуживание</span>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-text class="black--text">
                  <span>формирование библиотечного фонда соответственно профилю вуза</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card>
        <v-card-text>
          <v-header>Библиотека СКФ МТУСИ сотрудничает с несколькими Электронно-библиотечными системами</v-header>
          <v-row>
            <v-col cols="12" md="6">
              <v-card href="http://www.skf-mtusi.ru/www.iprbookshop.ru">
                <v-card-title>
                  <span class="mx-auto">«IPRbooks»</span>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card href="http://znanium.com/">
                <v-card-title>
                  <span class="mx-auto">ЭБС Znanium.com</span>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" md="4" v-for="(c, i) in contact" :key="i">
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-star-circle-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{c.name}}</v-list-item-title>
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
  name: 'library',
  data () {
    return {
      contact: [
        { icon: '', name: '(863)262-45-29' },
        { icon: '', name: 'bibskfmtyci@mail.ru' },
        { icon: '', name: '344002 г.Ростов-на-Дону, ул. Серафимовича,62' },
        { icon: '', name: 'каб.309/311, 3 этаж' }
      ]
    }
  },
  head() {
    return {
      title: 'Библиотека',
      meta: [
        {
          hid: 'library',
          name: 'Библиотека',
          content: 'Библиотека СКФ МТУСИ'
        }
      ]
    }
  }
}
</script>
