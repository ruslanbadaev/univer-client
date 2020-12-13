<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-subheader>Информация об объёме образовательной деятельности</v-subheader>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:item.value="{ item }">
            <span class="headline">{{item.value}} <v-icon right>mdi-currency-rub</v-icon></span>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'cash-activity',
  data () {
    return {
      headers: [
        { text: 'Счет', sortable: false, value: 'subject' },
        { text: 'Количество', sortable: true, value: 'value' }
      ],
      items: [
        { subject: 'бюджетные ассигнования федерального бюджета', value: '21815100' },
        { subject: 'бюджет субъектов Российской Федерации', value: '0' },
        { subject: 'местные бюджеты', value: '0' },
        { subject: 'средствв физических и (или) юридических лиц', value: '33656100' }
      ]
    }
  }
}
</script>
