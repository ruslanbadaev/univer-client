<template>
  <div>
    <Header :isMobile="isMobile" />
    <About class="mt-6" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/common/Header'
import About from '@/components/common/About'

export default {
  name: 'Home',
  components: {
    Header,
    About
  },
  computed: {
    isMobile () {
      return ['xs', 'sm'].indexOf(this.$vuetify.breakpoint.name) !== -1
    }
  }
}
</script>
