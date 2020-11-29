<template>
  <v-row>
    <v-col cols=12>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item class="overline">{{itss.code}}</v-list-item>
                <v-list-item class="headline">{{itss.name}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-text class="d-flex flex-wrap">
              <div v-for="e in itss.consist" :key="e" class="ma-1">
                <v-chip label>{{e}}</v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item class="overline">{{ivt.code}}</v-list-item>
                <v-list-item class="headline">{{ivt.name}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-text class="d-flex flex-wrap">
              <div v-for="e in ivt.consist" :key="e" class="ma-1">
                <v-chip label>{{e}}</v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="12" md="10" v-for="e in staff" :key="e.name">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-img
                    :src="e.image"
                    position="center 20%"
                    cover
                    height="200"
                  ></v-img>
                </v-col>
                <v-divider vertical inset></v-divider>
                <v-col cols="9">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline">{{e.name}}</v-list-item-title>
                      <v-list-item-subtitle class="overline mt-1">{{e.position}}</v-list-item-subtitle>
                      <v-list-item-subtitle class="mt-2">
                        <v-chip label>
                          <v-icon left>mdi-card-account-phone-outline</v-icon>
                          {{e.phone}}
                        </v-chip>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <div v-if="e.directions">
                    <v-card v-for="(d, i) in e.directions" :key="i" class="mb-2">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class="headline">{{d.code}} {{d.name}}</v-list-item-title>
                          <v-list-item-subtitle class="overline">{{d.typeTraining}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="primary--text">{{d.profile}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'edu-faculty-infocomunication',
  data () {
    return {
      itss: {
        code: '11.03.02',
        name: 'Инфокоммуникационные технологии и системы связи',
        consist: [
          'Многоканальные телекоммуникационные системы',
          'Сети связи и системы коммутации',
          'Защищенные системы и сети связи',
          'Системы радиосвязи и радиодоступа'
        ]
      },
      ivt: {
        code: '09.03.01',
        name: 'Информатика и вычислительная техника',
        consist: [
          'Вычислительные машины, комплексы, системы и сети',
          'Программное обеспечение и интеллектуальные системы'
        ]
      },
      staff: [{
        position: 'Декан факультета',
        name: 'Сосновский Иван Александрович',
        phone: '8(863) 310-69-71',
        directions: false,
        image: 'http://www.skf-mtusi.ru/images/prep/Sosnovskiy.jpg'
      },
      {
        position: 'Заместитель декана факультета',
        name: 'Коршун Анна Михайловна',
        phone: '8(863) 310-69-66',
        directions: false,
        image: 'http://www.skf-mtusi.ru/images/prep/korshun.jpg'
      },
      {
        position: 'Заместитель декана факультета',
        name: 'Ефимов Сергей Викторович',
        phone: '8(863) 310-69-66',
        directions: false,
        image: 'http://www.skf-mtusi.ru/images/prep/efimov.jpg'
      },
      {
        position: 'Специалист по работе с молодёжью',
        name: 'Павленко Светлана Евгеньевна',
        phone: '8(863) 310-69-66',
        directions: false,
        image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
      },
      {
        position: 'Методист',
        name: 'Гуденко Олеся Александровна',
        phone: '8(863) 310-69-66',
        directions: [
          { typeTraining: 'Заочная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Защищенные системы и сети связи' },
          { typeTraining: '', code: '', name: '', profile: 'Занимается решением вопросов трудоустройства студентов' }
        ],
        image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
      },
      {
        position: 'Методист',
        name: 'Гуденко Ирина Юрьевна',
        phone: '8(863) 310-69-66',
        typeTraining: 'Очная форма обучения',
        directions: [
          { typeTraining: 'Очная форма обучения', code: '09.03.01', name: 'Информатика и вычислительная техника', profile: 'Вычислительные машины, комплексы, системы и сети' },
          { typeTraining: 'Заочная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Многоканальные телекоммуникационные системы' },
          { typeTraining: 'Заочная форма обучения', code: '09.03.01', name: 'Информатика и вычислительная техника', profile: 'Вычислительные машины, комплексы, системы и сети' }
        ],
        image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
      },
      {
        position: 'Методист',
        name: 'Петухова Татьяна Анатольевна',
        phone: '8(863) 310-69-66',
        directions: [
          { typeTraining: 'Очная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Сети связи и системы коммутации' },
          { typeTraining: 'Очная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Многоканальные телекоммуникационные системы' },
          { typeTraining: 'Очная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Защищенные системы и сети связи' },
          { typeTraining: 'Заочная форма обучения', code: '11.03.02', name: 'Инфокоммуникационные технологии и системы связи', profile: 'Сети связи и системы коммутации' }
        ],
        image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
      },
      {
        position: 'Техник факультета',
        name: 'Коломиец Елена Анатольевна',
        phone: '8(863) 310-69-66',
        directions: false,
        image: 'https://static10.tgstat.ru/channels/_0/2d/2da6c1a6824ad9f0bdb16cf5027a2d78.jpg'
      }]
    }
  }
}
</script>

<style scoped>
.shadow {
  background: rgba(0, 0, 0, 0.411);
}
</style>
