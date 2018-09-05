<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img
          src="https://s3.amazonaws.com/freebiesupply/large/2x/denver-broncos-logo-transparent.png"
          alt="Vuetify.js"
          class="mb-1"
          width="300px"
        >
        <blockquote>
          &#8220;Fuck em till they dead.&#8221;
          <footer>
            <small>
              <em>&mdash;Blaze Huega</em>
            </small>
          </footer>
        </blockquote>
        <v-btn
          round
          color="secondary"
          dark
          @click.prevent="playSound('https://docs.google.com/uc?export=download&id=1Rte2cxwzIg6yv1gx4HGAr3nWxHPkDY_m')"
        >
        DFW
        </v-btn>
        <!-- <v-btn round color="secondary" dark>Rounded Button</v-btn> -->
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default{
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
