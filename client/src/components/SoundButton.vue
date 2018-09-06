<template>
  <li>
    <v-btn
      round
      color="secondary"
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

</style>