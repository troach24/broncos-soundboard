<template>
  <v-app dark>
    <NavBar />
    <v-content>
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
// import firebase from 'firebase';

// const user = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data () {
    return {
    }
  }
}
</script>
