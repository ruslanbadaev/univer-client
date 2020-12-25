<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-banner sticky class="text-center">
          <span :class="!$vuetify.breakpoint.mobile ? 'display-1' : null">
            <div v-html="html"></div>{{info}}
          </span>
        </v-banner>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: "html-render",
  data() {
    return {
      html: '<p> Загрузка.. </p>',
      info: '',
    };
  },
  methods: {

  },
  created: function(){
    axios
  .get(`${process.env.VUE_APP_SERVER}/render?route=${this.$route.params.route}`)
  .then(response => (this.html = response.data[0].data));
    console.log(this.$route.params.route)
  }
};
</script>
