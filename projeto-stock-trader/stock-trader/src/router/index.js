import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/index.vue'
import Portfolio from '../components/portfolio/index.vue'
import Stocks from '../components/stocks/index.vue'


Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    component: Stocks
  },
  ]
  })

export default router