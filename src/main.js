import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'
import FastClick from 'fastclick'
import toast from 'components/common/toast'

import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

Vue.prototype.$http = axios

// 添加事件总线 $bus
Vue.prototype.$bus = new Vue();  // vue 实例可以作为事件总线

// 安装toast插件
Vue.use(toast)

// 解决移动端的300ms的延迟
FastClick.attach(document.body)


//使用图片懒加载插件
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
