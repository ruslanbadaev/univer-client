<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12">
          <v-card>
            Ваша должность:
            <v-select
              v-model="role"
              :items="roles"
              label="Сделайте выбор из списка"
              menu-props="auto"
              hide-details
              prepend-icon="mdi-map"
              single-line
            ></v-select>

            <div v-if="role === 'Студент'">
              <br />
              Ваша группа:
              <v-select
                v-model="group"
                :items="groups"
                label="Сделайте выбор из списка"
                menu-props="auto"
                hide-details
                prepend-icon="mdi-map"
                single-line
              ></v-select>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "userinfo",

  data() {
    return {
      role: "",
      roles: ["Студент", "Преподаватель", "Персонал", "Администратор"],
      groups: [],
      group: "",
    };
  },
  methods: {
    getGroups() {
      axios
        .get(
          `${process.env.VUE_APP_SERVER}/groups/all`
        )
        .then(
          (response) =>
            (this.groups = response.data.result)
        );
    },
  },
};
</script>

<style lang="css">
.v-card {
  padding: 15px;
}
</style>
