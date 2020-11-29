<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="students"
        sort-by="name"
        class="elevation-1"
        hide-default-footer
      >
       <template v-slot:item.exame="props">
        <v-edit-dialog
          persistent
          large
          @save="save(props.item)"
          @cancel="props.item.exame = props.item._exame || props.item.exame"
          @open="props.item._exame = props.item.exame"
          :return-value.sync="props.item.exame"
        >
        <div>{{props.item.exame}}</div>
          <template v-slot:input>
            <v-text-field
              type="number"
              v-model="props.item.exame"
              label="Экзамен"
              :rules="[v => (v >= 0 && v <= 100) || 'Превышено количество баллов']"
              single-line
              autofocus
              @keydown.enter="()=>{}"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.isExame="props">
        <v-simple-checkbox
          :ripple="false"
          v-model="props.item.isExame"
          @input="save(props.item)"
        ></v-simple-checkbox>
      </template>
      <template v-slot:item.theory1="props">
        <v-edit-dialog
          persistent
          large
          @save="save(props.item)"
          @cancel="props.item.theory1 = props.item._theory1 || props.item.theory1"
          @open="props.item._theory1 = props.item.theory1"
          :return-value.sync="props.item.theory1"
        >
        <div>{{props.item.theory1}}</div>
          <template v-slot:input>
            <v-text-field
              type="number"
              v-model="props.item.theory1"
              label="Теория модуль 1"
              :rules="[v => (v >= 0 && v <= 50 - props.item.practice1) || 'Превышено количество баллов']"
              single-line
              autofocus
              @keydown.enter="()=>{}"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.practice1="props">
        <v-edit-dialog
          persistent
          large
          @save="save(props.item)"
          @cancel="props.item.practice1 = props.item._practice1 || props.item.practice1"
          :return-value.sync="props.item.practice1"
        >{{props.item.practice1}}
          <template v-slot:input>
            <v-text-field
              type="number"
              v-model="props.item.practice1"
              label="Практика модуль 1"
              :rules="[v => (v >= 0 && v <= 50 - props.item.theory1) || 'Превышено количество баллов']"
              single-line
              @keydown.enter="()=>{}"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.practice2="props">
        <v-edit-dialog
          persistent
          large
          @save="save(props.item)"
          @cancel="props.item.practice2 = props.item._practice2 || props.item.practice2"
          :return-value.sync="props.item.practice2"
        >{{props.item.practice2}}
          <template v-slot:input>
            <v-text-field
              type="number"
              v-model="props.item.practice2"
              label="Практика модуль 2"
              :rules="[v => (v >= 0 && v <= 50 - props.item.theory2) || 'Превышено количество баллов']"
              single-line
              @keydown.enter="()=>{}"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.theory2="props">
        <v-edit-dialog
          persistent
          large
          @save="save(props.item)"
          @cancel="props.item.theory2 = props.item._theory2 || props.item.theory2"
          :return-value.sync="props.item.theory2"
        >{{props.item.theory2}}
          <template v-slot:input>
            <v-text-field
              type="number"
              v-model="props.item.theory2"
              label="Теория модуль 2"
              :rules="[v => (v >= 0 && v <= 50 - props.item.practice2) || 'Превышено количество баллов']"
              single-line
              @keydown.enter="()=>{}"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'field',
  data: () => ({
    headers: [
      {
        text: 'ФИО',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Теория модуль 1',
        sortable: false,
        value: 'theory1'
      },
      {
        text: 'Практика модуль 1',
        sortable: false,
        value: 'practice1'
      },
      {
        text: 'Теория модуль 2',
        sortable: false,
        value: 'theory2'
      },
      {
        text: 'Практика модуль 2',
        sortable: false,
        value: 'practice2'
      },
      {
        text: 'Экзамен',
        sortable: false,
        value: 'exame'
      },
      {
        text: 'Учитывать экзамен',
        sortable: false,
        value: 'isExame'
      },
      {
        text: 'Итого баллов',
        sortable: false,
        value: 'CountRate'
      },
      {
        text: 'Оценка',
        sortable: false,
        value: 'rate'
      }
    ]
  }),
  methods: {
    reduceCountRate () {
      this.students.forEach(element => {
        element.CountRate = parseInt(element.theory1) + parseInt(element.theory2) + parseInt(element.practice1) + parseInt(element.practice2)
        if (!element.isExame) {
          if (element.CountRate > 80) {
            element.rate = 5
          } else if (element.CountRate > 60) {
            element.rate = 4
          } else if (element.CountRate > 40) {
            element.rate = 3
          } else {
            element.rate = 2
          }
        } else {
          element.CountRate = element.exame
          if (element.exame > 80) {
            element.rate = 5
          } else if (element.exame > 60) {
            element.rate = 4
          } else if (element.exame > 40) {
            element.rate = 3
          } else {
            element.rate = 2
          }
        }
      })
    },
    save ({ theory1, theory2, practice1, practice2 }) {
      console.log('asd')
      const t1 = parseInt(theory1)
      const t2 = parseInt(theory2)
      const p1 = parseInt(practice1)
      const p2 = parseInt(practice2)
      if ((t1 + p1 <= 50 && t1 + p1 > 0) &&
          (t2 + p2 <= 50 && t2 + p2 > 0)) {
        this.reduceCountRate()
      } else {
        this.$store.dispatch('setError', { text: 'Количество баллов за модуль превышено, данные не сохранены', color: 'error' })
      }
    }
  },
  computed: {
    students () {
      return this.$store.getters.students
    }
  }
}
</script>
