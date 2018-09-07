<template>
  <div>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn id="john-button" color="#FB4F14" @click="playSound('https://docs.google.com/uc?export=download&id=1GZ12yMxO3PFIQqdhpjdXn1M-L3no6hbP')">Greatest 8 YD Run in SB History</v-btn>
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

<style scoped>

</style>