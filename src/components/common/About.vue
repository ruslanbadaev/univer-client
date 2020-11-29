<template>
  <v-row>
    <v-col cols="12">
      <vatages/>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="text-center">
          <span class="display-2 font-weight-light">Правила подачи документов</span>
        </v-col>
        <v-col cols="12">
          <docs />
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <timeline />
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="text-center">
          <span class="display-2">Направления</span>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols>
              <v-card shaped raised>
                <v-card-title> <v-icon>mdi-directions-fork</v-icon> 09.03.01 «Информатика и вычислительная техника»</v-card-title>
              </v-card>
            </v-col>
            <v-col cols>
              <v-card shaped raised>
                <v-card-title> <v-icon>mdi-directions-fork</v-icon> 11.03.02 «Инфокоммуникационные технологии и системы связи»</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Vatages from './Vatages'
import Timeline from './Timeline'
import Docs from './Docs'

export default {
  name: 'home-about',
  components: {
    vatages: Vatages,
    timeline: Timeline,
    docs: Docs
  },
  data: () => ({})
}
</script>
