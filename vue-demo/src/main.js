import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import 'amfe-flexible';
import config from './config'
import  plugins from '../plugins/vant'
import router from './router'
//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
