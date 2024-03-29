// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import * as echarts from 'echarts';
Vue.prototype.echarts = echarts;
import 'vue-block/dist/block.css';
import block from 'vue-block';
Vue.use(block);
import WbTools from 'wb-tools';
Vue.use(WbTools);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
