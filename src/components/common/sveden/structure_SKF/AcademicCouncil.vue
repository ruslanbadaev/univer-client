<template>
  <v-row>
    <v-col cols="12" v-if="user !== null && user.role === 'admin'">
      <v-btn text>Сохранить</v-btn>
      <v-btn text>Добавить</v-btn>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="3" v-for="counch in counchers" :key="counch.name">
          <v-card outlined>
            <v-img
              :src="counch.image"
              cover
              position="center 20%"
              height="320px"
              class="align-end white--text"
            >
              <v-card-title class="shadow">{{counch.name}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{counch.status}}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{counch.position}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text>Подробнее</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'edu-academic-council',
  data () {
    return {
      dialog: false,
      counchers: [
        {
          name: 'Манин Александр Анатольевич',
          status: 'председатель Ученого совета',
          position: 'директор СКФ МТУСИ',
          image: 'http://www.skf-mtusi.ru/images/us/DSC_0738_300.jpg'
        },
        {
          name: 'Жуковский Александр Георгиевич',
          status: 'заместитель председателя Ученого совета',
          position: 'заместитель директора по УВР',
          image: 'http://www.skf-mtusi.ru/images/ruk/Zhukovskiy.jpg'
        },
        {
          name: 'Сосновский Иван Александрович',
          status: '',
          position: 'декан факультета ИК',
          image: 'http://www.skf-mtusi.ru/images/prep/Sosnovskiy.jpg'
        },
        {
          name: 'Конкин Борис Борисович',
          status: '',
          position: 'заведующий кафедрой ОНП',
          image: 'http://www.skf-mtusi.ru/images/prep/Konkin.jpg'
        },
        {
          name: 'Соколов Сергей Викторович',
          status: '',
          position: 'заведующий кафедрой ИВТ',
          image: 'http://www.skf-mtusi.ru/images/prep/sokolov.jpg'
        },
        {
          name: 'Юхнов Василий Иванович',
          status: '',
          position: 'заведующий кафедрой ИТСС',
          image: 'http://www.skf-mtusi.ru/images/prep/Yuhnov_.jpg'
        },
        {
          name: 'Шустова Виктория Владимировна',
          status: '',
          position: 'начальник ОК',
          image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
        },
        {
          name: 'Янкина Надежда Александровна',
          status: '',
          position: 'начальник ОТО',
          image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
        },
        {
          name: 'Докучаев Сергей Аркадьевич',
          status: '',
          position: 'старший преподаватель кафедры ОНП',
          image: 'http://www.skf-mtusi.ru/images/prep/dok.jpg'
        },
        {
          name: 'Светличная Наталия Олеговна',
          status: '',
          position: 'доцент кафедры ОНП',
          image: 'http://www.skf-mtusi.ru/images/prep/svetl.jpg'
        },
        {
          name: 'Устименко Дмитрий Леонидович',
          status: '',
          position: 'доцент кафедры ОНП',
          image: 'http://www.skf-mtusi.ru/images/prep/ustim.jpg'
        },
        {
          name: 'Головина Ирина Витальевна',
          status: '',
          position: 'доцент кафедры ОНП',
          image: 'http://www.skf-mtusi.ru/images/prep/golovina_01.jpg'
        },
        {
          name: 'Чикалов Андрей Николаевич',
          status: '',
          position: 'доцент кафедры ИВТ',
          image: 'http://www.skf-mtusi.ru/images/prep/chik.jpg'
        },
        {
          name: 'Ершов Валерий Васильевич',
          status: '',
          position: 'доцент кафедры ИТСС',
          image: 'http://www.skf-mtusi.ru/images/prep/ershov.jpg'
        },
        {
          name: 'Енгибарян Ирина Алешаевна',
          status: 'секретарь Ученого совета',
          position: 'доцент кафедры ИТСС',
          image: 'http://www.skf-mtusi.ru/images/prep/Engiboryan.jpg'
        },
        {
          name: 'Алиев Мустафа Иссаевич',
          status: '',
          position: 'студент гр. ДЗ-31',
          image: 'https://sun9-36.userapi.com/c857620/v857620419/183847/gA6-QPurqn8.jpg'
        },
        {
          name: 'Аверин Артемий Викторович',
          status: '',
          position: 'студент гр. ДП-31',
          image: 'https://sun1-28.userapi.com/c858520/v858520308/118661/2ofwA5GCPxY.jpg'
        },
        {
          name: 'Моногаров Олег Валерьевич',
          status: '',
          position: 'студент гр. ДС-31',
          image: 'https://sun9-48.userapi.com/c845123/v845123361/1f98eb/HTF_mragw-E.jpg'
        }
      ]
    }
  },
  methods: {
    add () {
      this.dialog = true
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style scoped>
.shadow {
  background: rgba(0, 0, 0, 0.411);
}
</style>
