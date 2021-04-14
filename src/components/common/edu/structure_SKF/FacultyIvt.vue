<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-list-item>
          <v-header>09.03.01</v-header>
          <v-list-item-content class="text-center">
            <v-list-item-title class="headline">«Информатика и вычислительная техника»</v-list-item-title>
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
  </v-row>
</template>

<script>
export default {
  name: 'faculty-ivt',
  data () {
    return {
      features: [
        { icon: 'star-circle-outline', name: 'более 800 научных работ' },
        { icon: 'star-circle-outline', name: 'научно-технические конференций и семинары' },
        { icon: 'star-circle-outline', name: 'более 250 авторских свидетельств и патентов на изобретения' },
        { icon: 'star-circle-outline', name: 'более 80 внедренных программных разработок' }
      ]
    }
  },
  head() {
    return {
      title: 'Информатика и вычислительная техника',
      meta: [
        {
          hid: 'faculty-ivt',
          name: 'Информатика и вычислительная техника',
          content: 'Информатика и вычислительная техника'
        }
      ]
    }
  }
}
</script>
