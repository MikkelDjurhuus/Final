import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false


global.$ = global.jQuery = window.$ = window.jQuery = require('jquery');
import alterClass from '@/assets/js/alterClass'
$.fn.alterClass = alterClass;
global._ = window._ = require('underscore');
global.moment = window.moment = require('moment');
global.fs = require('fs')
global.path = require('path');
const electron = require('electron').remote.app;
const electronPath = electron.getAppPath();
global.app_path = electronPath.substring(0, electronPath.length - 17);
global.data_path = app_path + "/data/";
global.Database = require('../main/DatabaseAPI.js').default;
require('bootstrap');

export const bus = new Vue();


import Page from '@/components/page/Page';
import FormPage from '@/components/page/FormPage';
import Archive from '@/components/archive/Archive';
import Form from '@/components/form/Form';
import Slider from '@/components/slider/Slider';
import TwoColumns from '@/components/form/input/templates/TwoColumns';

Vue.component("page", Page);
Vue.component("form-page", FormPage);
Vue.component("archive", Archive);
Vue.component("slider", Slider);
Vue.component("form-helper", Form);
Vue.component("two-columns", TwoColumns);

Vue.directive('focus', {
  inserted: function (el, binding, vnode) {
    Vue.nextTick(function () {
      el.focus()
    })
  }
})

console.log(Database, data_path);
Database.LoadDatabase(data_path).then(() => {
  /* eslint-disable no-new */
  new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
});