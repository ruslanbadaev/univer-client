<template>
  <v-row>
    <v-toolbar
    elevation="1"
    dense
    >
      <v-toolbar-title class="title">{{name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="role === 'lecturer'" class="font-weight-bold"><v-chip color="success" outlined class="ma-2"><v-icon left>mdi-chart-areaspline</v-icon> 1.0</v-chip></span>
      <v-spacer></v-spacer>
      <v-btn icon>
          <v-badge
          color="red"
          overlap
          dot
          >
          <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      <v-btn icon>
        <v-badge
        color="blue darken-1"
        content="+1"
        overlap
        >
          <v-icon>mdi-email</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
  </v-row>
</template>

<script>
export default {
  name: 'toolbar',
  props: {
    name: String,
    role: String
  }
}
</script>
