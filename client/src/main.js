import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import HammerJS from 'hammerjs';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD
import API from './API.js';
=======
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781

const VueTouch = require('vue-touch');

Vue.config.productionTip = false;

const config = {
<<<<<<< HEAD
  apiKey: API.API_KEY,
=======
  apiKey: 'AIzaSyBm_736-aqs_rO6-Y96r4LCiBtymlmu_80',
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781
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
<<<<<<< HEAD
}).$mount('#app');
=======
}).$mount('#app');
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781
