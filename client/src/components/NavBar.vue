<template>
  <div>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <router-link id="app-title" :to="'home'">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-chip v-if="$route.name === 'admin'" outline color="#FB4F14">Toggle Edit Mode</v-chip>
      <v-chip v-if="$route.name === 'admin'" color="#FB4F14" click="logout()">Logout</v-chip>
      <v-tooltip bottom>
        <v-icon
          v-if="$route.name !== 'admin'"
          @click.native="playSound('https://docs.google.com/uc?export=download&id=1GZ12yMxO3PFIQqdhpjdXn1M-L3no6hbP')"
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
import firebase from 'firebase';
import { log } from 'util';

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
      // user: firebase.auth().currentUser
    }
  },
  mounted: () =>{
    console.log(this.user.email);
    
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    logout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('sucess');
        
      }).catch(function(error) {
        // An error happened.
        console.log('Signout failed');
        
      });
    }
  },
};
</script>

<style>
  #app-title {
    text-decoration: none;
    color: white;
  }
</style>

