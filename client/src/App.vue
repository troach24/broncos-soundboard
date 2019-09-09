<template>
  <v-app dark>
    <NavBar :user="user"/>
    <v-content>
      <router-view :user="user" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data () {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>
