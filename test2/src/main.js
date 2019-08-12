import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/permission' // 路由的权限控制

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
