<template>
  <v-container fluid>
    <h1 class="container">Admin Page 🙌</h1>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  beforeRouteEnter (to, from, next) {
    // check if user is logged in before loading admin view
    if(firebase.auth().currentUser === null) {
      this.$router.push('login')
    }
  }
};
</script>

<style scoped>

</style>