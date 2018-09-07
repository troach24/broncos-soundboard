<template>
  <li>
    <v-btn
      class="button-width"
      round
      color="#FB4F14"
      dark
      @click="playSound(sound.soundUrl)"
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
  width: 225px;
}
</style>