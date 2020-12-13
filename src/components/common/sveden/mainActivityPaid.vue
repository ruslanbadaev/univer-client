<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-list-item>
          <v-subheader>Основная образовательная деятельность</v-subheader>
        </v-list-item>
        <v-row>
          <v-col cols="12" v-for="(m, i) in mainActivity" :key="i">
            <v-list-item>
              <v-list-item-avatar size="64">
                <v-icon size="48" :color="m.color">mdi-{{m.icon}}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{m.name}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon :href="m.link">
                  <v-icon>mdi-download-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card>
        <v-list-item>
          <v-subheader>Дополнительная образовательная деятельность</v-subheader>
        </v-list-item>
        <v-row>
          <v-col cols="4" v-for="(a, i) in additionActivity" :key="i">
            <v-card tile elevation="2" outlined :href="a.link">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{a.name}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon :href="a.link">
                    <v-icon>mdi-share-outline</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'main-activity-paid',
  data () {
    return {
      mainActivity: [
        { color: 'primary', icon: 'file-word-box', link: 'http://www.skf-mtusi.ru/files/info/docs/dog/Dogovor_platn_obraz_uslug.docx', name: 'Образец договора об оказании платных образовательных услуг' },
        { color: 'error', icon: 'pdf-box', link: 'http://www.skf-mtusi.ru/files/info/docs/Stoimost_obuch_2020-2021.pdf', name: 'Об утверждении стоимости платных образовательных услуг ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждение высшего образования «Московский технический университет связи и информатики» (МТУСИ) по образовательным программам высшего и среднего профессионального образования – программам бакалавриата, специалитета, магистратуры, аспирантуры очной и заочной форм обучения на 2020-2021 учебный год' },
        { color: 'error', icon: 'pdf-box', link: 'http://www.skf-mtusi.ru/files/info/docs/prikaz_29-05_29.06.20.pdf', name: 'Приказ об установлении стоимости платных государственных образовательных услуг по программам высшего образования в СКФ МТУСИ' }
      ],
      additionActivity: [
        { link: 'http://www.skf-mtusi.ru/?page_id=1184', name: 'Дополнительная образовательная деятельность' },
        { link: 'http://www.skf-mtusi.ru/?page_id=604', name: 'Курсы повышения квалификации' },
        { link: 'http://www.skf-mtusi.ru/?page_id=606', name: 'Локальная сетевая академия Cisco' },
        { link: 'http://www.skf-mtusi.ru/?page_id=608', name: 'Учебный центр Unify Communications' },
        { link: 'http://www.skf-mtusi.ru/?page_id=610', name: 'Компьютерные курсы' },
        { link: 'http://www.skf-mtusi.ru/?page_id=571', name: 'Подготовительные курсы' }
      ]
    }
  }
}
</script>
