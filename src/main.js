import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './network/request'
//导入全局样式
import './assets/css/global.css'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入element-ui
import './components/common/plugins/element'


Vue.config.productionTip = false
Vue.prototype.$axios = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')