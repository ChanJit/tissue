// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'hchs-vue-charts/dist/vue-charts.min'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueCharts) //eslint-disable-line
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
