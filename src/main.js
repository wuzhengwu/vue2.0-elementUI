import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import App from './App'
import router from './router'
import Mock from './mock/mock';

Vue.config.productionTip = false
// Vue.config.productionTip设置为 false 以阻止 vue 在启动时生成生产提示

Vue.use(Element)
Vue.prototype.$http = axios;
Mock.mockData();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
