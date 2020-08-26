import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

let data = {
  user: null
}

new Vue({
  data,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
