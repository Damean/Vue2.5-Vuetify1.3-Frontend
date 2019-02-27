import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Projects from './views/Projects'
import Team from './views/Team'

import Home from './views/Home'
import Flexbox from './views/Flexbox'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: Flexbox
    }
  ]
})
