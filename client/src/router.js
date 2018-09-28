import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
    },
    // {
    //   path: '/expand',
    //   name: 'expand',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './components/ExpansionPanel.vue'),
    // },
  ],
});
