<template>
  <v-app>
    <app-bar />

    <navigation-drawer />

    <!-- Sizes your content based upon application components -->
    <v-main :style="{ background: !$vuetify.theme.dark ? '#E0E0E0' : '#121212' }">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pt-0">
        <system-alert />
        <!-- If using vue-router -->
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </v-container>
    </v-main>

    <bottom-navigation />

  </v-app>
</template>

<script>
// import Weather from './components/Weather'
export default {
  name: 'App',
  components: {
    'system-alert': () => import('@/components/common/systemAlert'),
    'app-bar': () => import('@/components/common/main/Appbar'),
    'navigation-drawer': () => import('@/components/common/main/navigation/navigationDrawer'),
    'bottom-navigation': () => import('@/components/common/main/navigation/bottomNavigation')
  },
  mounted () {
    this.$store.dispatch('loadChairAll')
    this.$store.dispatch('isUserAuth')
  }
}
</script>

<style lang="scss">
  .v-list-item__title {
    white-space: normal !important;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(216, 216, 228);
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(171, 171, 175);
    border-radius: .25rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    width: 12px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .30s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .child-view {
    position: absolute;
    transition: all .30s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
