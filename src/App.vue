<template>
  <router-view />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans:400,400i,700&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
  }

  h1 {
    font-size: 2.2rem;
    letter-spacing: -0.05rem;
  }

  h2 {
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    padding: 0 1rem;
  }
</style>
