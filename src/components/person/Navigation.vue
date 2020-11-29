<template>
  <v-col cols="12">
    <v-tabs
    fixed-tabs
    show-arrows
    center-active
    >
      <v-tab
      v-for="link in links"
      :key="link.name"
      :to="{
        name: link.path
      }"
      :disabled="!link.active"
      >
        {{link.name}}
      </v-tab>
    </v-tabs>
  </v-col>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    links: Array
  }
}
</script>
