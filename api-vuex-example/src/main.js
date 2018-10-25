import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as api from './api/api'

import Blaze from 'blaze-vue'
import 'blaze-vue/dist/blaze-vue.css'

Vue.use(Blaze)

Vue.config.productionTip = false

api.initialize({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
