<template>
  <div class="panel-container">
    <div class="d-flex justify-between align-center mb-3">
      <v-btn class="body-1 font-weight-regular" @click="all">Show All</v-btn>
      <v-btn class="body-1 font-weight-regular" @click="none">Hide All</v-btn>
    </div>
    <v-expansion-panel
      v-model="panel"
      expand
    >
      <v-expansion-panel-content
        v-for="(item,i) in items"
        :key="i"
      >
        <v-text class="display-1 font-weight-light" v-if="i == 0" slot="header">Team</v-text>
        <v-text slot="right">hello</v-text>
        <v-text class="display-1 font-weight-light" v-if="i == 1" slot="header">Offense</v-text>
        <v-text class="display-1 font-weight-light" v-if="i == 2" slot="header">Defense</v-text>
        <v-card class="panel">
          <v-flex class="load" v-if="loading">
            <v-progress-circular
              :size="70"
              :width="7"
              color="#FB4F14"
              indeterminate
            ></v-progress-circular>
          </v-flex>
          <SoundButton
            :key="index"
            v-for="(sound, index) in sounds"
            v-if="sound.category === 'Team' && i === 0
            || sound.category === 'Offense' && i === 1
            || sound.category === 'Defense' && i === 2"
            :playSound="playSound"
            :sound="sound"
            :sounds="sounds"
          />
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
  props: ['playSound', 'sounds', 'sound', 'loading'],
  data () {
    return {
      panel: [],
      items: 3,
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
  width: 75%;
}
.panel {
  display: flex;
  flex-flow: row wrap;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 10px;
}
.load {
  display: flex;
  justify-content: center;
}
</style>