import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/markdown'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { bus } from './bus'

Vue.config.productionTip = false

Vue.prototype.$setSystemMessage = property => bus.$emit('system-message', property)
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
