<template>
  <div>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-icon
          @click="playSound('https://docs.google.com/uc?export=download&id=1GZ12yMxO3PFIQqdhpjdXn1M-L3no6hbP')"
          slot="activator"
          color="#FB4F14"
          dark large
        >crop_rotate</v-icon>
        <span>Greatest 8 YD Run in SB History</span>
      </v-tooltip>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      drawer: false,
      clipped: true,
      miniVariant: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        },
      ],
      miniVariant: false,
      title: 'BRONCO BITES'
    }
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },
};
</script>
