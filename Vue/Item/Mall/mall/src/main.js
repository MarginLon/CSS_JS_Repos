import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant'
import './assets/common.less'
import myTabBar from './components/common/tabBar.vue'

Vue.component('my-tab-bar', myTabBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
