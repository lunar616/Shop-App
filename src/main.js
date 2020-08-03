import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';

import router from'./routes'
import store from './store'

// Plugins
Vue.use(Vuelidate)
Vue.use(VueCarousel)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')