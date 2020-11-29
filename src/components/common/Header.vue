<template>
  <v-row justify="center" align-content="center" class="header">
    <v-col xl="9" md="9" cols="11">
      <v-row>
        <v-col xl="9" cols="12">
          <v-row justify="space-between">
            <v-col
            cols="12"
            :class="isMobile ? 'headline' : 'display-2'"
            class="font-weight-light"
            >Московский Технический Университет <br/> Связи и Информатики</v-col>
            <v-col
            cols="12"
            :class="isMobile ? 'title' : 'display-1'"
            class="font-weight-light py-0"
            >Северо-Кавказский филиал</v-col>
            <v-col
            cols="12"
            class="mb-2 font-weight-light"
            >Специализированный университет связи и информатики в ЮФО</v-col>
              <v-col cols="12" md="11">
                <v-row>
                  <v-btn large outlined :block="isMobile" class="blue--text ma-1" disabled>
                    <v-icon left>mdi-cast-education</v-icon>Направления
                  </v-btn>
                  <v-btn large outlined :block="isMobile" class="my-1" dark href="https://abitur.mtuci.ru/#!register_skf">
                    <v-icon left>mdi-account-group</v-icon>Подача документов онлайн
                  </v-btn>
                </v-row>
              </v-col>
          </v-row>
        </v-col>
        <v-col  xl="3" class="d-none d-xl-block">
          <v-img contain src="https://www.skf-mtusi.ru/images/logo_skf.png"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'common-header',
  props: {
    isMobile: Boolean
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: url('/img/bg.png') no-repeat;
  background-size: cover;
  color: #fff;
  height: 70vh;
}
</style>
