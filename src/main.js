import Vue from 'vue';
import App from './App.vue';

import { default as RepairComponents, i18n } from '../lib/main';

import './assets/css/app.css';
import './assets/css/index.css';

Vue.use(RepairComponents);

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
