<template>
  <v-container fluid>
    <h1 class="container">Admin Page 🙌</h1>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  beforeRouteEnter (to, from, next) {
    console.log(firebase.auth().currentUser.emailVerified)
    if(!firebase.auth().currentUser) {
      this.$router.push('login')
    } else {
      console.log('yaKnoDeG');
    }
    next()
  },
  methods: {
    // beforeRouteEnter() {
    //   console.log(firebase.auth().currentUser.emailVerified)
      // if(!firebase.auth().currentUser) {
      //   this.$router.push('login')
      // } else {
      //   console.log('yaKnoDeG');
      // }
    // }
  }
};
</script>

<style scoped>

</style>