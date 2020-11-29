<template>
  <v-navigation-drawer app clipped width="340" v-model="drawer" class="scrollbar">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Сведения об образовательной организации</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
      <div v-for="(e, i) in menuLinks" :key="i">
        <v-list-item link :to="{ name: e.path.name, params: { route: e.path.params } }" v-if="!e.hasSubmenu">
          <v-list-item-icon>
            <v-icon>mdi-{{e.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{e.title}}</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-else
          :prepend-icon="`mdi-${e.icon}`"
          :value="false"
        >
          <template v-slot:activator>
            {{e.title}}
          </template>

          <div v-for="(ex, i) in e.submenu" :key="i">
            <v-list-item
              v-if="!ex.submenu"
              link
              :to="{ name: ex.path.name, params: { route: ex.path.params } }"
            >
              <v-list-item-title>{{ex.title}}</v-list-item-title>
            </v-list-item>
            <v-list-group v-else :value="false" sub-group>
              <template v-slot:activator>
                  <v-list-item-title>
                    {{ex.title}}
                  </v-list-item-title>
              </template>
              <div v-for="(exx, i) in ex.submenu" :key="i">
                <v-list-item
                  v-if="!exx.submenu"
                  link
                  :to="{ name: exx.path.name, params: { route: exx.path.params } }"
                >
                  <v-list-item-title>{{exx.title}}</v-list-item-title>
                </v-list-item>
                <v-list-group v-else :value="false" sub-group>
                  <template v-slot:activator>
                      <v-list-item-title>
                        {{exx.title}}
                      </v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="(exxx, i) in exx.submenu"
                    :key="i"
                    link
                    :to="{ name: exxx.path.name, params: { route: exxx.path.params }, query: { chair: exxx.path.chair, uid: exxx.path.uid }}"
                  >
                    <v-list-item-title>{{exxx.title}}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </div>
            </v-list-group>
          </div>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import links from './MenuLinks'
export default {
  name: 'main-navigation-drawer',
  data () {
    return {
      drawer: false,
      menuLinks: links
    }
  },
  mounted () {
    this.$bus.$on('change-drawer', () => (this.drawer = !this.drawer))
  }
}
</script>
