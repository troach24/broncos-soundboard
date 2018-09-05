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
