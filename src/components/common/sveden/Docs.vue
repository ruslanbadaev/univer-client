<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="3" class="text-center">
          <v-text-field
          label="Документ"
          solo
          v-model="filter"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="7" v-for="e in docs" :key="e.id">
      <v-card tile>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon size="48" color="error">mdi-pdf-box</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{e.text}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-actions>
              <v-btn icon :href="e.href">
                <v-icon>mdi-download-outline</v-icon>
              </v-btn>
            </v-list-item-actions>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
const axios = require('axios')
export default {
  data: () => ({
    files: [],
    filter: ''
  }),
  beforeMount () {
    axios.get('/data/docs.json').then(r => { this.files = r.data })
  },
  computed: {
    docs () {
      return this.files.filter(elem => elem.text.indexOf(this.filter) > -1)
    }
  }
}
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
    color: #000;
  }
  .file {
    width: 100%;
    height: 250px;
    border-radius: 0.25rem;
    box-shadow: 0 0 10px 0 #000;
  }
</style>
