<template>
  <v-row>
    <v-col cols="12">
      <browse />
    </v-col>
    <v-col cols="12">
      <filed />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'lecturer-mrs',
  data: () => ({}),
  components: {
    browse: () => import('@/components/person/lecturer/mrs/Browse'),
    filed: () => import('@/components/person/lecturer/mrs/Field')
  }
}
</script>
