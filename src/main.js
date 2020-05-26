import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;

// 引入全局样式表
import './assets/css/global.css'

/*ElementUI引入下面三行*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
