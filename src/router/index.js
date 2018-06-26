import Router from 'vue-router'

import Login from '../pages/Login'
import IndexPage from '../pages/index'

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
