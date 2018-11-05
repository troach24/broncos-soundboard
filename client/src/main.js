import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import HammerJS from 'hammerjs';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import API from './API';

const VueTouch = require('vue-touch');

Vue.config.productionTip = false;

const config = {
  apiKey: API.API_KEY,
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
