import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import user from './user'
import feed from './feed'
import teacher from './teacher'
import mrs from './mrs'
import chair from './chair'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    user,
    feed,
    teacher,
    mrs,
    chair
  }
})
