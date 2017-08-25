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
        path: '/dokumenter/form',
        name: 'dokumenter-new',
        component: require("@/components/DokumenterForm")
      },
      {
        path: '/dokumenter/form/:id',
        name: 'dokumenter-edit',
        component: require("@/components/DokumenterForm")
      },
      {
        path: '/procedurer',
        name: 'procedurer',
        component: require("@/components/Procedurer")
      },
      {
        path: '/procedurer/form',
        name: 'procedurer-new',
        component: require("@/components/ProcedurerForm")
      },
      {
        path: '/procedurer/form/:id',
        name: 'procedurer-edit',
        component: require("@/components/ProcedurerForm")
      },

      { path: '*', redirect: '/login' }
    ]
  })
