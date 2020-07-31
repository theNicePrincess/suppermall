import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.prototype.$bus = new Vue();  // vue 实例可以作为事件总线


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
