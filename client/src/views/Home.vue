<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img
          src="https://s3.amazonaws.com/freebiesupply/large/2x/denver-broncos-logo-transparent.png"
          alt="Vuetify.js"
          class="mb-1"
          width="250px"
        >
        <ExpansionPanel 
          :playSound="playSound"
          :sounds="sounds"
          :loading="loading"
        />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import SoundButton from '@/components/SoundButton';
import ExpansionPanel from '@/components/ExpansionPanel';

const API_URL = 'https://broncos-soundboard.herokuapp.com/sounds';

export default {
  name: 'Home',
  props: ['user'],
  components: {
    SoundButton,
    ExpansionPanel,
  },
  data: () => {
    return {
      sounds: [],
      team: [],
      offense: [],
      defense: [],
      loading: false,
    };
  },
  async mounted() {
    if(this.sounds.length < 1) {
      this.loading = true;
      this.sounds = await this.filterSounds()
      this.sounds.reverse()
    }
    this.loading = false
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    sortArr(arr) {
      return arr.sort((a, b) => {
        var categoryA = a.category.toUpperCase()
        var categoryB = b.category.toUpperCase()
        if(categoryA < categoryB) {
          return -1
        } if(categoryA > categoryB) {
          return 1
        }
        return 0
      })
    },
    async getSounds() {
      const res = await fetch(API_URL)
      return res.json()
    },
    async filterSounds() {
      const allSounds = await this.getSounds()
      return allSounds.filter(sound => sound.archived !== true)
    }
  },
}
</script>

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
#john-button {
  color: #FB4F14;
}
</style>
