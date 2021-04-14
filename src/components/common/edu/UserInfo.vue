<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12">
          <v-card>
            Ваша должность:
            <v-select
              v-model="select"
              :items="items"
              label="Сделайте выбор из списка"
              menu-props="auto"
              hide-details
              prepend-icon="mdi-map"
              single-line
            ></v-select>

            <div v-if="select === 'Студент'">
            <br>
              Ваша группа:
              <v-select
                v-model="select"
                :items="items"
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
export default {
  name: "userinfo",
  data() {
    return {
      select: "",
      items: ["Студент", "Преподаватель", "Персонал", "Администратор"],
    };
  },
  methods: {
    getGroups() {},
  },
};
</script>

<style lang="css">
.v-card {
 padding: 15px;
}

</style>