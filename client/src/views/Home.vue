<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img
          src="https://s3.amazonaws.com/freebiesupply/large/2x/denver-broncos-logo-transparent.png"
          alt="Vuetify.js"
          class="mb-1"
          width="300px"
        >
        <blockquote>
          &#8220;Fuck em till they dead.&#8221;
          <footer>
            <small>
              <em>&mdash;Blaze Huega</em>
            </small>
          </footer>
        </blockquote>
        <SoundButton :playSound="playSound" :sounds="sounds" />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import SoundButton from '@/components/SoundButton';
const API_URL = 'http://localhost:3000/sounds';

export default {
  name: 'Home',
  components: {
    SoundButton
  },
  data: () => {
    return {
      sounds: [],
    }
  },
  mounted() {
    fetch(API_URL).then(response => response.json()).then(result => {
      this.sounds = result
    })
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
