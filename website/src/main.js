import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Users from '@/components/Users.vue';

Vue.component('Users', Users)

Vue.use(VueAxios, axios) // https://www.npmjs.com/package/vue-axios

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
