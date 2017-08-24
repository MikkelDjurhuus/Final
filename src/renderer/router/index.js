import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: '/login',
        name: 'login',
        component: require("@/components/LoginPage")
      },
      {
        path: '/home',
        name: 'home',
        component: require("@/components/HomePage")
      },
      {
        path: '/kortlægning',
        name: 'kortlægning',
        component: require("@/components/Kortlægning")
      },
      {
        path: '/dokumenter',
        name: 'dokumenter',
        component: require("@/components/Dokumenter")
      },
      {
        path: '/dokumenter/new',
        name: 'dokumenter-new',
        component: require("@/components/DokumenterForm")
      },

      { path: '*', redirect: '/login' }
    ]
  })
