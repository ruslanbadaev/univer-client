<template>
  <div>
    <v-card>
      <v-banner sticky class="text-center">
        <span :class="!$vuetify.breakpoint.mobile ? 'display-1' : null">
          Расписание группы В-31
        </span>
      </v-banner>
    </v-card>
    <div class="sched-container">
      <div v-if="showSched">
        <div v-for="gsched in groupSched" :key="gsched">
          {{ gsched }}
        </div>
      </div>
      <div
        v-else
        v-for="key in keys"
        cols="12"
        md="10"
        offset-md="1"
        :key="key"
      >
        <v-card @click="getSchedByGroup(key, sched), showSched=false">{{ key }} </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edu-schedule",
  data() {
    return {
      keys: [],
      showSched: false,
      sched: [
        {
          GROUP: " ДВ-11",
          DAY: " 1",
          LES: " 2",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Устименко Д.Л.",
          POST: "История",
          NAME: " лек.",
          SUBJECT: "7-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 1",
          LES: " 3",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Устименко Д.Л.",
          POST: "История",
          NAME: " ПЗ",
          SUBJECT: "7-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 2",
          LES: " 2",
          AUD: " 218",
          WEEK: " 2",
          SUBG: " Ткачук Е.О.",
          POST: " Инж. и комп. граф",
          NAME: " лек.",
          SUBJECT: "8-09-2020 каф. ИВТ"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 2",
          LES: " 3",
          AUD: " 218",
          WEEK: " 2",
          SUBG: " Ткачук Е.О.",
          POST: " Инж. и комп. граф",
          NAME: " лек.",
          SUBJECT: "8-09-2020 каф. ИВТ"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 3",
          LES: " 2",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Ефимов С.В.",
          POST: " Алгебра и геометрия",
          NAME: " лек.",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 3",
          LES: " 3",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Ефимов С.В.",
          POST: " Алгебра и геометрия",
          NAME: " ПЗ",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 4",
          LES: " 1",
          AUD: " 305",
          WEEK: " 2",
          SUBG: " Швидченко С.А.",
          POST: "Информатика",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ИВТ"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 4",
          LES: " 2",
          AUD: " 305",
          WEEK: " 2",
          SUBG: " Швидченко С.А.",
          POST: "Информатика",
          NAME: " ПЗ",
          SUBJECT: "10-09-2020каф. ИВТ"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 4",
          LES: " 3",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Ефимов С.В.",
          POST: " Алгебра и геометрия",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 5",
          LES: " 2",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Светличная Н.О.",
          POST: " ИНО",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 5",
          LES: " 2",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Колдынская Л.М.",
          POST: " ИНО",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 5",
          LES: " 3",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Светличная Н.О.",
          POST: " ИНО",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 5",
          LES: " 3",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Колдынская Л.М.",
          POST: " ИНО",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 6",
          LES: " 2",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Светличная Н.О.",
          POST: " ИНО 2",
          NAME: " ПЗ",
          SUBJECT: "12-09-2020каф. ОНП"
        },
        {
          GROUP: " ДВ-11",
          DAY: " 6",
          LES: " 3",
          AUD: " 308",
          WEEK: " 2",
          SUBG: " Светличная Н.О.",
          POST: " ИНО 2",
          NAME: " ПЗ",
          SUBJECT: "12-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 3",
          LES: " 2",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Конкин Б.Б.",
          POST: " Физика",
          NAME: "лек.",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 3",
          LES: " 3",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Конкин Б.Б.",
          POST: " Физика",
          NAME: "лек.",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 4",
          LES: " 1",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Ефимов С.В.",
          POST: " ТВ и МС",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 4",
          LES: " 2",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Константинова Я.Б.",
          POST: "Теор. эл. цепей",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 5",
          LES: " 2",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Гаевская Л.А.",
          POST: " Физ. культура",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-21",
          DAY: " 5",
          LES: " 3",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Гаевская Л.А.",
          POST: " Физ. культура",
          NAME: " ПЗ",
          SUBJECT: "11-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 1",
          LES: " 2",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Бородин А.В.",
          POST: "Физ. осн. электроники",
          NAME: " лек.",
          SUBJECT: "7-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 1",
          LES: " 3",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Бородин А.В.",
          POST: "Физ. осн. электроники",
          NAME: " лек.",
          SUBJECT: "7-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 2",
          LES: " 1",
          AUD: " 302",
          WEEK: " 2",
          SUBG: " Гаевская Л.А.",
          POST: " Физ. культура",
          NAME: " ПЗ",
          SUBJECT: "8-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 2",
          LES: " 2",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Гаевская Л.А.",
          POST: " Физ. культура",
          NAME: " лек.",
          SUBJECT: "8-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 2",
          LES: " 3",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Константинова Я.Б.",
          POST: "Теор. эл. цепей",
          NAME: " лек.",
          SUBJECT: "8-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 3",
          LES: " 2",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Конкин Б.Б.",
          POST: " Физика",
          NAME: "лек.",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 3",
          LES: " 3",
          AUD: " ДО",
          WEEK: "2",
          SUBG: " Конкин Б.Б.",
          POST: " Физика",
          NAME: "лек.",
          SUBJECT: "9-09-2020 каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 4",
          LES: " 1",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Ефимов С.В.",
          POST: " ТВ и МС",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 4",
          LES: " 2",
          AUD: " 220",
          WEEK: " 2",
          SUBG: " Константинова Я.Б.",
          POST: "Теор. эл. цепей",
          NAME: " лек.",
          SUBJECT: "10-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 6",
          LES: " 2",
          AUD: " 310",
          WEEK: " 2",
          SUBG: " Бородин А.В.",
          POST: "Физ. осн. электроники",
          NAME: " ЛР",
          SUBJECT: "12-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 6",
          LES: " 2",
          AUD: " +",
          WEEK: " 2",
          SUBG: " Коршун А.М.",
          POST: " Физ. осн. электроники",
          NAME: " ЛР",
          SUBJECT: "12-09-2020каф. ОНП"
        },
        {
          GROUP: " ДИ-22",
          DAY: " 6",
          LES: " 3",
          AUD: " 310",
          WEEK: " 2",
          SUBG: " Бородин А.В.",
          POST: "Физ. осн. электроники",
          NAME: " ЛР",
          SUBJECT: "12-09-2020каф. ОНП"
        }
      ],
      groupSched: []
    };
  },
  methods: {
    getSchedByGroup: (name, sched) => {
      console.log(sched);

      sched.forEach(element => {
        if (element.GROUP === name) this.groupSched.push(element);
      });
    }
  },
  created: function() {
    let obj = {};
    this.sched.forEach(element => {
      obj[element.GROUP] = element;
    });
    console.log("==========================");
    //console.log(obj)
    this.keys = [...new Set(this.sched.map(({ GROUP }) => GROUP))];
    console.log([...new Set(this.sched.map(({ GROUP }) => GROUP))]);
    console.log("==========================");
  }
};
</script>

<style lang="css">
.sched-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.sched-container v-col {
  width: 150px;
}
v-card {
  width: 150px;
}
</style>
