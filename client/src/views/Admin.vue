<template>
  <v-container fluid>
    <v-layout column align-center>
      <h1>Welcome Web Master, you are the greatest Broncos Fan in the world! 🙌</h1>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  beforeRouteEnter (to, from, next) {
    if(!firebase.auth().currentUser) {
      next('login')
    } else {
      next()
    }
  },
  methods: {

  }
};
</script>

<style scoped>

</style>