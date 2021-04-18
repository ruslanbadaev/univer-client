<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-subheader>Информация профиля</v-subheader>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-select
                v-model="role"
                @change="checkRoleSelect()"
                :items="roles"
                :rules="roleRules"
                label="Ваша должность:"
                required
              ></v-select>
              <div v-if="role === 'Студент'">
                <br />

                <v-select
                  v-model="group"
                  :items="groups"
                  :rules="groupRules"
                  label="Ваша группа:"
                  item-text="name"
                  item-value="_id"
                  return-object
                  required
                ></v-select>
              </div>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Номер телефона"
                prefix="+7"
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Отправить
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Сббросить
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
//axios.defaults.headers.common["Authorization"] = "Bearer" + this.$store.getters.user.token;
export default {
  name: "userinfo",

  data() {
    return {
      role: "",
      roles: ["Студент", "Преподаватель", "Персонал", "Администратор"],
      groups: [],
      group: "",
      phone: "",
      valid: false,
      phoneRules: [
        (v) => !!v || "Введите номер телефона",
        (v) =>
          /^\+?[0-9]{3}-?[0-9]{6,12}$/.test(v) ||
          "Номер телефона не соответствует маске",
      ],
      roleRules: [(v) => !!v || "Укажите свою должность"],
      groupRules: [(v) => !!v || "Укажите свою группу"],
    };
  },
  methods: {
    translateRoleToRu() {
      return {
        student: "Студент",
        lecturer: "Преподаватель",
        staff: "Персонал",
        admin: "Администратор",
      };
    },
    translateRoleToEn() {
      return {
        Студент: "student",
        Преподаватель: "lecturer",
        Персонал: "staff",
        Администратор: "admin",
      };
    },
    validate() {
      this.$refs.form.validate();
      if (this.group !== "") this.setGroup();
      if (this.phone !== "") this.setPhone();
      if (this.role !== "") this.setRole();
    },
    reset() {
      console.log(this.$store.getters.user);
      this.$refs.form.reset();
    },
    getGroups() {
      axios
        .get(`${process.env.VUE_APP_SERVER}/groups/all`)
        .then((response) => {
          this.groups = response.data.result;
        })
        .catch((error) => alert(error));
    },
    getUserData() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.getters.user.token;
      axios
        .get(`${process.env.VUE_APP_SERVER}/profile`)
        .then((response) => {
          console.log(response.data);
          if (response.data.result.role === "student") {
            this.getGroups();
          }

          this.role = !!response.data.result.role
            ? this.translateRoleToRu()[response.data.result.role]
            : "";
          this.group = !!response.data.result.group_id
            ? response.data.result.group_id
            : "";
          this.phone = !!response.data.result.phone
            ? response.data.result.phone
            : "";
          console.log(this.group);
        })
        .catch((error) => alert(error));
    },
    setGroup() {
      axios
        .patch(
          `${process.env.VUE_APP_SERVER}/users/${this.$store.getters.user._id}/group`,
          { group_id: this.group },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.user.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => alert(error));
    },
    setPhone() {
      axios
        .patch(
          `${process.env.VUE_APP_SERVER}/users/${this.$store.getters.user._id}/phone`,
          { phone: this.phone },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.user.token}`,
            },
          }
        )
        .then((response) => {
          this.groups = response.data.result;
        })
        .catch((error) => alert(error));
    },
    setRole() {
      axios
        .patch(
          `${process.env.VUE_APP_SERVER}/users/${this.$store.getters.user._id}/role`,
          { group_id: this.translateRoleToEn()[this.role] },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.user.token}`,
            },
          }
        )
        .then((response) => {
          this.groups = response.data.result;
        })
        .catch((error) => alert(error));
    },
    checkRoleSelect() {
      switch (this.role) {
        case "Студент":
          this.getGroups();
          break;

        default:
          break;
      }
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style lang="css">
.v-card {
  padding: 15px;
}
</style>
