<template>
  <v-row justify="center" no-gutters>
    <v-col cols="10" lg="12" class="text-center">
      <span class="display-2 font-weight-light">Почему я выбираю <span class="blue--text">СКФ МТУСИ</span></span>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-carousel
          cycle
          min-height="350"
          show-arrows-on-hover
          hide-delimiters
          :light="!$vuetify.theme.dark"
        >
          <v-carousel-item
            v-for="(v, i) in vatages"
            :key="v.title"
          >
              <v-row class="fill-height" justify="center" align="center">
                <v-col cols="12" lg="11">
                  <v-card min-height="300px" raised class="d-flex justify-center align-center">
                    <v-row class="fill-height">
                      <v-col cols="12" lg="2" class="d-flex justify-center align-center">
                        <span class="display-4">0{{i+1}}</span>
                      </v-col>
                      <v-col cols="11" lg="10">
                        <p class="display-1 text--primary px-1">
                          {{v.title}}
                        </p>
                        <div class="text-primary px-1">
                          {{v.description}}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'vatages',
  data: () => ({
    vatages: [
      { title: 'Московский диплом', description: 'Наши студенты проходят полный курс обучения в г.Ростов-на-Дону и получают диплом Московского технического университета связи и информатики' },
      { title: 'Ведомственный вуз', description: 'Учредителем СКФ МТУСИ является Федеральное агенство связи, что гарантирует высокую востребованность выпускников на рынке труда' },
      { title: 'Уникальное оборудование', description: 'Наши студенты проходят обучение на самом современном оборудовании, многие образцы которого не имеют аналогов в Южном федеральном округе' },
      { title: 'Индивидуальное обучение', description: 'Малая численность групп обучающихся, позволяющая приблизить процесс обучения к индивидульному и выстроить для каждого студента свою образовательную траекторию' },
      { title: 'Образовательные программы', description: 'Студенты СКФ МТУСИ в процессе обучения имеют возможность выбрать в рамках данного направления подготовки одну или несколько образовательных программ, наиболее полно соответсвующих их склонностям и интересам' },
      { title: 'Преподавательский состав', description: 'Учебный процесс в СКФ МТУСИ обеспечивают высококвалифицированные преподаватели, работающие на штатной основе' },
      { title: 'Бюджетные места', description: 'Большое колличество бюджетных мест на очной и заочной формах обучения, которое увеличивается с каждым годом' },
      { title: 'Умный внебюджет', description: 'Абитурьенты, набравшие по результатам ЕГЭ и/или втупительных испытаний не менее 160 баллов, получают скидку при оплате за обучение до 25%' }
    ]
  })
}
</script>
