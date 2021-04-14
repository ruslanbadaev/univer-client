<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-subheader>Академическая стипендия</v-subheader>
        <v-card-text class="text--primary pt-0">
          <div class="overline">кто получает</div>
          <v-list>
            <v-list-item v-for="(grant, i) in grantAcadem" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{++i}}. {{grant}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <v-subheader>Социальная стипендия</v-subheader>
        <v-card-text class="text--primary pt-0">
          <div class="overline">кто получает</div>
          <v-list>
            <v-list-item v-for="(grant, i) in grantSocial" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{++i}}. {{grant}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="grantSocialCategoryDialog"
            width="600"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-on="on"
                v-bind="attrs"
              >Категории</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
                Категории для назначения социальной стипендии
              </v-card-title>
              <v-card-text>
                <v-list-item v-for="(grant, i) in grantSocialCategory" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{++i}}. {{grant}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="grantSocialCategoryDialog = false">Закрыть</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="12" md="8" v-for="(doc, i) in docs" :key="i">
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon size="48" color="error">mdi-pdf-box</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{doc.name}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon :href="doc.link">
                  <v-icon>mdi-download-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'grants',
  data () {
    return {
      grantSocialCategoryDialog: false,
      grantAcadem: [
        'Студенты очной формы',
        'Бюджетная основа обучения',
        'Сдать сессию в установленные сроки с оценками не ниже "хорошо"',
        '1 курс, 1 семестр'
      ],
      grantSocial: [
        'Студенты очной формы',
        'Бюджетная основа обучения',
        'Студенты, предоставившие письменное заявление и документ, подтверждающий принадлежность хотя бы к одной из категорий'
      ],
      grantSocialCategory: [
        'дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей',
        'лица, потерявшие в период обучения обоих родителей или единственного родителя',
        'дети-инвалиды (до 18 лет), инвалиды I и II групп, инвалиды с детства',
        'студенты, подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне',
        'студенты, являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий',
        'студенты из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» — «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» — «в» пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ «О воинской обязанности и военной службе»',
        'студенты, получивше государственную социальную помощь (справка органа социальной защиты населения по месту постоянной регистрации)'
      ],
      docs: [
        { name: 'Постановление Правительства Российской Федерации от 17.12.2016 № 1390 «О формировании стипендиального фонда»', link: 'http://www.skf-mtusi.ru/files/info/stip/0001201612210031.pdf' },
        { name: 'Приказ Министерства образования и науки Российской Федерации от 27.12.2016 г. № 1663 «Об утверждении Порядка назначения государственной академической стипендии и (или) государственной социальной стипендии студентам, обучающимся по очной форме обучения за счет бюджетных ассигнований федерального бюджета, государственной стипендии аспирантам, ординаторам, ассистентам-стажерам, обучающимся по очной форме обучения за счет бюджетных ассигнований федерального бюджета, выплаты стипендий слушателям подготовительных отделений федеральных государственных образовательных организаций высшего образования, обучающимся за счет бюджетных ассигнований федерального бюджета»', link: 'http://www.skf-mtusi.ru/files/info/stip/45376.pdf' },
        { name: 'Положение о стипендиальной комиссии СКФ МТУСИ', link: 'http://www.skf-mtusi.ru/files/info/stip/stip_kom_skf-mtusi_19.pdf' },
        { name: 'Приказ о размере государственных академических стипендий для студентов и государственных стипендий для аспирантов', link: 'http://www.skf-mtusi.ru/files/info/stip/703-c_stip_stud-asp.pdf' },
        { name: 'Информация о наличии общежития, интерната', link: 'http://www.skf-mtusi.ru/files/info/stip/internat.pdf' }
      ]
    }
  },
  head() {
    return {
      title: 'Категории для назначения социальной стипендии',
      meta: [
        {
          hid: 'grants',
          name: 'Категории для назначения социальной стипендии',
          content: 'Категории для назначения социальной стипендии'
        }
      ]
    }
  }
}
</script>
