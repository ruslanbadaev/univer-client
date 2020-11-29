<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card tile>
        <v-data-table
          hide-default-footer
          :items-per-page="itemsPerPage"
          :page.sync="page"
          @page-count="pageCount = $event"
          :headers="headers"
          :items="items"
        ></v-data-table>
        <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    name: 'student-schedule',
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: 'Дата', value: 'date', sortable: true },
      { text: 'Пара', value: 'couple', sortable: false },
      { text: 'Предмет', value: 'lesson', sortable: false },
      { text: 'Тип занятия', value: 'type', sortable: false },
      { text: 'Аудитория', value: 'room', sortable: false },
      { text: 'Преподаватель', value: 'teacher', sortable: false }
    ]
  }),
  computed: {
    items () {
      return this.$store.getters.sh
    }
  },
  beforeMount () {
    this.$store.dispatch('getSchedule')
  }
}
</script>
