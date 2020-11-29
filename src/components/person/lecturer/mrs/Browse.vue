<template>
  <v-row justify="center">
    <v-col cols="3">
      <v-select
        v-model="currentDirection"
        :items="direction"
        item-text="name"
        item-value="direction"
        label="Направление подготовки"
        outlined
        @change="autofillDataFiled"
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-select
        :disabled="currentDirection === ''"
        v-model="currentGroup"
        :items="group"
        item-text="name"
        item-value="group"
        label="Группа"
        outlined
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-select
        :disabled="currentDirection === ''"
        v-model="currentDiscipline"
        :items="discipline"
        item-text="name"
        item-value="direction"
        label="Дисциплина"
        outlined
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Browse',
  data: () => ({
    currentDirection: '',
    currentGroup: '',
    currentDiscipline: ''
  }),
  methods: {
    autofillDataFiled () {
      this.currentGroup = this.group.filter(g => g.direction === this.currentDirection)[0].group
      this.currentDiscipline = this.discipline.filter(d => d.direction === this.currentDirection)[0]
      this.setDataField()
    },
    setDataField () {
      this.$store.dispatch('setStudentsByData', { direction: this.currentDirection, group: this.currentGroup })
    }
  },
  computed: {
    direction () {
      return this.$store.getters.directions
    },
    discipline () {
      return this.$store.getters.disciplines.filter(d => d.direction === this.currentDirection)
    },
    group () {
      return this.$store.getters.groups.filter(g => g.direction === this.currentDirection)
    }
  }
}
</script>
