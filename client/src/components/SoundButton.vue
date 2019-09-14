<template>
  <li>
    <v-btn
      class="button-width"
      round
      color="#FB4F14"
      dark
      @click.native="playSound(sound.soundUrl)"
    >
    {{sound.name}}
    </v-btn>
  </li>
</template>

<script>

export default {
  name: 'SoundButton',
  props: ['playSound', 'sounds', 'sound'],
}
</script>

<style scoped>
.button-width {
  width: 375px;
  height: 70px;
  font-size: x-large;
}
</style>