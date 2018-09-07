import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4',
}, Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  swipeTolerance: 30,
  longTapTimeInterval: 400,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
