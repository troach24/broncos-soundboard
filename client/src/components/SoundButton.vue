<template>
  <v-container>
    <v-btn
      round
      color="secondary"
      dark
      @click="playSound(sounds[0].soundUrl)"
    >
    <!-- {{sounds[0].name}} -->
    DFW
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'SoundButton',
  props: ['playSound', 'sounds'],
}
</script>

<style scoped>

</style>