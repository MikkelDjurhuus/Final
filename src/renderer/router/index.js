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
      {
        path: '/kontroller',
        name: 'kontroller',
        component: require("@/components/Kontroller")
      },
      {
        path: '/kontroller/form',
        name: 'kontroller-new',
        component: require("@/components/KontrollerForm")
      },
      {
        path: '/kontroller/form/:id',
        name: 'kontroller-edit',
        component: require("@/components/KontrollerForm")
      },
      {
        path: '/hændelser',
        name: 'hændelser',
        component: require("@/components/Hændelser")
      },
      {
        path: '/hændelser/form',
        name: 'hændelser-new',
        component: require("@/components/HændelserForm")
      },
      {
        path: '/hændelser/form/:id',
        name: 'hændelser-edit',
        component: require("@/components/HændelserForm")
      },
      {
        path: '/henvendelser',
        name: 'henvendelser',
        component: require("@/components/Henvendelser")
      },
      {
        path: '/henvendelser/form',
        name: 'henvendelser-new',
        component: require("@/components/HenvendelserForm")
      },
      {
        path: '/henvendelser/form/:id',
        name: 'henvendelser-edit',
        component: require("@/components/HenvendelserForm")
      },

      { path: '*', redirect: '/login' }
    ]
  })
