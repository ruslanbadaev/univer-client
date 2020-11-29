<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center">
        <p class="display-2">Страница не найдена!</p>
        <v-btn color="primary" @click="$router.go(-1)">
        Назад в будущее!
        <v-icon right dark>mdi-car-hatchback</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
