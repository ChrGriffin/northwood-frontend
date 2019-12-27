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

  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2, h3 {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
  }
</style>
