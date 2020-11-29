<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <span class="display-2 font-weight-light">Контрольные даты приема</span>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="10">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(t, i) in timeline"
              :key="i"
              :color="t.color"
              :icon="t.icon"
              fill-dot
            >
              <span slot="opposite" class="display-1">{{t.date}}</span>
              <v-card>
                <v-card-title class="title">{{t.title}}</v-card-title>
                <v-card-text class="text--primary">
                  <b v-if="!isMobile">{{t.date}}</b>
                  <p>{{t.description}}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'timeline',
  data: () => ({
    timeline: [
      { color: 'green darken-3', icon: 'mdi-clock-start', title: 'Начало приема документов', description: 'Подача документов в формате копия (заявление на поступление + сканы подтверждающих документов + согласие на обработку персональных данных) + согласие на зачисление (вместо оригинала)', date: '15 июня' },
      { color: 'light-green darken-3', icon: 'mdi-camera-timer', title: 'Звершение приема документов от поступающих по ВИ', description: 'Завершается прием документов от лиц, поступающих по результатам вступительных испытаний на бюджетные места очной формы обучения', date: '10 августа' },
      { color: 'lime darken-3', icon: 'mdi-camera-timer', title: 'Завершение приема документов от поступающих по ЕГЭ', description: 'Завершается прием документов от лиц, поступабщих по результатам ЕГЭ на бюджетные места очной формы обучения', date: '18 августа' },
      { color: 'yellow darken-3', icon: 'mdi-altimeter', title: 'Размещение ранжированных списков поступающих', description: 'На официальном сайте СКФ МТУСИ размещаются ранжированные списки поступающих на бюджетные места очной формы обучения', date: '19 августа' },
      { color: 'amber darken-3', icon: 'mdi-account-multiple-plus', title: 'Этап приоритетного зачисления', description: '20 и 21 августа осуществляется прием осуществляется прием заявлений о согласии на зачисление от лиц, поступающих на места в пределах квот и без вступительных испытаний, если эти заявления не были поданы ранее при подаче заявления на поступление', date: '20-21 августа' },
      { color: 'orange darken-3', icon: 'mdi-account-multiple-plus', title: 'Первый этап зачисления', description: '22 и 23 августа осуществляется прием заявлений о согласии на зачисление от лиц, желающих быть зачисленными на первом этапе, до заполнения 80% основных конкурсных  мест', date: '22-23 августа' },
      { color: 'deep-orange darken-3', icon: 'mdi-account-multiple-plus', title: 'Второй этап зачисления', description: '24 и 25 августа осуществляется прием заявлений о согласии на зачисление до заполнения оставшихся 20% основных конкурсных мест', date: '24-25 августа' },
      { color: 'red darken-3', icon: 'mdi-star', title: 'Приказы о зачислении', description: '22, 24 и 26 августа издаются приказы о зачислении на места в пределах квот/без вступительных испытаний, на 80% основных конкурсных мест и 20% оставшихся мест соответсвенно', date: '26 августа' }
    ]
  }),
  computed: {
    isMobile () {
      return ['xs', 'sm'].indexOf(this.$vuetify.breakpoint.name) === -1
    }
  }
}
</script>

<style lang="scss">
.v-card__title {
  word-break: normal !important;
}
</style>
