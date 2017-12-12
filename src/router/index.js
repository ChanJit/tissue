import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/Pages/Styles/components/HelloWorld'
import LandingPage from '@/Pages/LandingPage/LandingPage'
import DetailPage from '@/Pages/DetailPage/DetailPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/details',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})
