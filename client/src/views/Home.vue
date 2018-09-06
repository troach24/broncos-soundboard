<template>
  <v-container fluid>
    <!-- <v-slide-y-transition mode="out-in"> -->
      <v-layout column align-center>
        <img
          src="https://s3.amazonaws.com/freebiesupply/large/2x/denver-broncos-logo-transparent.png"
          alt="Vuetify.js"
          class="mb-1"
          width="300px"
        >
        <h5 class="headline">Team</h5>
        <ul>
          <SoundButton
          :key="index"
          v-for="(sound, index) in sounds"
          :playSound="playSound"
          :sound="sound"
          :sounds="sounds" />
        </ul>
        <!-- <blockquote>
          &#8220; It takes 20 years to build a reputation and 5 minutes to ruin it.&#8221;
          <footer>
            <small>
              <em>&mdash;Peyton Manning</em>
            </small>
          </footer>
        </blockquote> -->
      </v-layout>
    <!-- </v-slide-y-transition> -->
  </v-container>
</template>

<script>
import SoundButton from '@/components/SoundButton';
const API_URL = 'https://broncos-soundboard.herokuapp.com/sounds';

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
      console.log(this.sounds)
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
