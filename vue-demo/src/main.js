import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { router } from './router/index'
import 'amfe-flexible';
import { Button } from 'vant';
Vue.use(Button);
//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
