import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import firebase from 'firebase';
=======
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
=======
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      meta: {
        requiresAuth: true,
      },
    },
<<<<<<< HEAD
  ],
});

Router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
});
=======
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
  ],
});
>>>>>>> 32c0506cc3ca967239584ea7fbf9a12adce3f781
