<template>
  <v-row justify="center">
    <v-col cols="11">
      <v-card>
        <v-card-title>Загрузка расписания</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-select
                solo
                @change="setValue"
                :items="directions"
                item-text="name"
                item-value="value"
                label="Направление"
                v-model="direction"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                :disabled="direction === ''"
                solo
                :items="_entityes"
                item-text="name"
                item-value="direction"
                v-model="entity"
                label="Сущность"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-file-input
                :disabled="direction === '' && entity.length === 0"
                show-size
                label="Выберите файл"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined>Сброс</v-btn>
          <v-btn outlined color="success">Загрузить</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'lk-admin-schedule',
  data: () => ({
    direction: '',
    entity: [],
    directions: [
      { name: 'ИТСС', value: 'itss' },
      { name: 'ИВТ', value: 'ivt' }
    ],
    entityes: [
      { name: 'Группа ИТСС', direction: ['itss'], uid: '' },
      { name: 'Группа ИВТ', direction: ['ivt'], uid: '' },
      { name: 'Преподаватель ИВТ и ИТСС', direction: ['itss', 'ivt'], uid: '' }
    ],
    _entityes: []
  }),
  methods: {
    setValue () {
      this._entityes = this.entityes.filter(a => a.direction.includes(this.direction))
      this.entity = this._entityes[0]
    }
  }
}
</script>
