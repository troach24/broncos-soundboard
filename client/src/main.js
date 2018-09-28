import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import HammerJS from 'hammerjs';
import App from './App.vue';
import router from './router';

const VueTouch = require('vue-touch');

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4',
}, HammerJS, VueTouch, { name: 'v-touch' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
