<template>
  <div class="panel-container">
    <div class="d-flex justify-between align-center mb-3">
      <v-btn @click="all">Show All</v-btn>
      <v-btn @click="none">Hide All</v-btn>
    </div>
    <v-expansion-panel
      v-model="panel"
      expand
    >
      <v-expansion-panel-content
        v-for="(item,i) in items"
        :key="i"
      >
        <h5 class="headline align-content-center" v-if="i == 0" slot="header">Team</h5>
        <h5 class="headline" v-if="i == 1" slot="header">Offense</h5>
        <h5 class="headline" v-if="i == 2" slot="header">Defense</h5>
        <v-card class="panel">
            <SoundButton
              :key="index"
              v-for="(sound, index) in sounds"
              v-if="sound.category === 'Team' && i == 0"
              :playSound="playSound"
              :sound="sound"
              :sounds="sounds"
            />
            <SoundButton
              :key="index"
              v-for="(sound, index) in sounds"
              v-if="sound.category === 'Offense' && i == 1"
              :playSound="playSound"
              :sound="sound"
              :sounds="sounds"
            />
            <SoundButton
              :key="index"
              v-for="(sound, index) in sounds"
              v-if="sound.category === 'Defense' && i == 2"
              :playSound="playSound"
              :sound="sound"
              :sounds="sounds"
            />
          <!-- <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text> -->
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import SoundButton from '@/components/SoundButton';

export default {
  components: {
    SoundButton,
  },
  props: ['playSound', 'sounds', 'sound'],
  data () {
    return {
      panel: [],
      items: 3
    }
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all () {
      this.panel = [...Array(this.items).keys()].map(_ => true)
    },
    // Reset the panel
    none () {
      this.panel = []
    }
  }
}
</script>

<style scoped>
.panel-container {
  width: 60%;
}
.panel {
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-around; */
}
</style>