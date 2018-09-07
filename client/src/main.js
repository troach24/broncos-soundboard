import '@babel/polyfill';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
