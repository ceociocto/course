import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Element from 'element-ui'
import './element-variables.scss'
import echarts from 'echarts'
import VCharts from 'v-charts'
import '@/filters/index.js'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Element)
Vue.use(VCharts)
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
