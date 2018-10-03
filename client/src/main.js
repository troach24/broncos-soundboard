import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import HammerJS from 'hammerjs';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';

const VueTouch = require('vue-touch');

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBm_736-aqs_rO6-Y96r4LCiBtymlmu_80',
  authDomain: 'https://broncos-soundboard.now.sh/#/',
  databaseURL: 'https://broncos-soundboard.firebaseio.com',
  projectId: 'broncos-soundboard',
  storageBucket: 'broncos-soundboard.appspot.com',
  messagingSenderId: '155759961349',
};

firebase.initializeApp(config);

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4',
}, HammerJS, VueTouch, { name: 'v-touch' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
