<template>
  <div>
    <header>
      <v-btn
        v-if="showSched"
        @click="getSchedAll(), (checkedGroup = '')"
        color="warning"
        dark
      >
        Назад
      </v-btn>

      <v-card class="card">
        <v-banner sticky class="text-center">
          <span :class="!$vuetify.breakpoint.mobile ? 'display-1' : null">
            Расписание
            {{ checkedGroup !== "" ? `группы ${checkedGroup}  ` : "" }}
          </span>
        </v-banner>
      </v-card>
    </header>
    <div class="sched-container">
      <div v-if="showSched">
        <div
          class="sched-card"
          v-for="gsched in groupSchedByDays"
          :key="JSON.stringify(gsched)"
        >
          {{ gsched[0].DATE }}
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">№</th>
                    <th class="text-left">Аудитория</th>
                    <th class="text-left">Предмет</th>
                    <th class="text-left">Тип</th>
                    <th class="text-left">Преподаватель</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in gsched"
                    :key="`${item.SUBJECT}-${item.LES}-${item.SUBG}`"
                  >
                    <td>{{ item.LES }}</td>
                    <td>{{ item.AUD }}</td>
                    <td>{{ item.SUBJECT }}</td>
                    <td>{{ item.SUBJ_TYPE }}</td>
                    <td>{{ item.NAME }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
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
        <v-card
          class="group-card"
          @click="getSchedByGroup(key, sched), (checkedGroup = key)"
          >{{ key }}
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "edu-schedule",
  data() {
    return {
      keys: [],
      showSched: false,
      checkedGroup: "",
      sched: [],
      groupSched: [],
      groupSchedByDays: [],
    };
  },
  methods: {
    sortBy(arr) {
      const output = [];
      let last = 0;
      for (let i = 1; i <= arr.length; i++) {
        if (arr[i]?.DAY !== arr[i - 1]?.DAY) {
          output.push(arr.slice(last, i));
          last = i;
        }
      }
      return output;
    },
    getSchedByGroup(name) {
      this.groupSched = [];
      let sortSchedByDays = [];
      this.sched.forEach((element) => {
        if (element.GROUP === name) this.groupSched.push(element);
      });
      this.groupSchedByDays = this.sortBy(this.groupSched);
      console.log(this.groupSchedByDays);
      this.showSched = true;
    },

    getSchedAll() {
      this.groupSched = [];
      let obj = {};
      this.sched.forEach((element) => {
        obj[element.GROUP] = element;
      });
      this.keys = [...new Set(this.sched.map(({ GROUP }) => GROUP))];
      this.showSched = false;
    },
    async fetchSchedule() {
      try {
        const result = await axios.get("http://localhost:3000/timetable/all");
        console.log(result);
        this.sched = result.data.result;
        this.getSchedAll();
      } catch (error) {
        alert(error);
      }
    },
  },
  created: function () {
    this.fetchSchedule();
  },
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
header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
header .card {
  margin: 12px;
}
.sched-card {
  text-align: center;
  padding: 12px;
  margin-bottom: 8px;
}
.group-card {
  padding: 24px;
  margin: 12px;
}
</style>
