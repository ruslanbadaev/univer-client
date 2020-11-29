<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" v-for="(standart, i) in standarts" :key="i">
          <v-card>
            <v-list-item>
              <v-list-item-avatar size="64">
                <v-icon size="48" color="error">
                  mdi-pdf-box
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{standart.name}}</v-list-item-title>
                <v-list-item-subtitle>{{standart.code}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-actions>
                <v-btn icon :href="standart.link">
                  <v-icon>
                    mdi-download-outline
                  </v-icon>
                </v-btn>
              </v-list-item-actions>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'standarts',
  data () {
    return {
      standarts: [
        { name: 'Информатика и вычислительная техника', code: '09.03.01', link: 'http://www.skf-mtusi.ru/files/info/fgosvo/090301.pdf' },
        { name: 'ФГОС-3++ Информатика и вычислительная техника', code: '09.03.01', link: 'http://www.skf-mtusi.ru/files/info/fgosvo/2017_09_03_01_N_929.pdf' },
        { name: 'Инфокоммуникационные технологии и системы связи', code: '11.03.02', link: 'http://www.skf-mtusi.ru/files/info/fgosvo/110302.pdf' },
        { name: 'ФГОС-3++ Инфокоммуникационные технологии и системы связи', code: '11.03.02', link: 'http://www.skf-mtusi.ru/files/info/fgosvo/2017_11_03_02_N_930.pdf' }
      ]
    }
  }
}
</script>
