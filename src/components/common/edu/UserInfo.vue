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
                Validate
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
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
    /*     	acceptNumber() {
    	var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }, */
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    getGroups() {
      console.log("1");
      axios.get(`${process.env.VUE_APP_SERVER}/groups/all`).then((response) => {
        console.log(response.data);
        this.groups = response.data.result;
      });
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
};
</script>

<style lang="css">
.v-card {
  padding: 15px;
}
</style>
