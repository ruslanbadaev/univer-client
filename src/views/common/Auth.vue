<template>
  <v-row justify="center" align="center">
    <v-col cols="6" class="text-center"><p class="title font-weight-light">Авторизация</p></v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col md="3" cols="10" class="text-right">
          <v-form
          v-model="valid"
          ref="authForm"
          >
            <v-text-field
            :counter="20"
            label="Логин"
            v-model="login"
            :rules="loginRules"
            required
            ></v-text-field>
            <v-text-field
            :counter="20"
            label="Пароль"
            v-model="password"
            type="password"
            :rules="passwordRules"
            required
            ></v-text-field>
            <v-btn class="mt-4" rounded color="primary" @click="authUser" :disabled="!valid" :loading="loading">Вход</v-btn>
         </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Authorization',
  data: () => ({
    valid: true,
    login: '',
    loginRules: [
      v => !!v || 'Логин должен быть заполнен',
      v => (v && v.length <= 20) || 'Логин не может содержать более 10 символов'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Пароль должен быть заполнен',
      v => (v && v.length <= 20) || 'Пароль не может содержать более 10 символов'
    ]
  }),
  methods: {
    validate () {
      this.$refs.authForm.validate()
    },
    resetValidation () {
      this.$refs.authForm.resetValidation()
    },
    async authUser () {
      await this.validate()
      if (this.valid) {
        this.$store.dispatch('authUser', { login: this.login, password: this.password })
          .then(() => this.$router.push(`/${this.$store.getters.user.role}`))
          .catch(e => this.$setSystemMessage(e))
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  beforeMount () {
    this.$store.dispatch('logout')
  }
}
</script>
