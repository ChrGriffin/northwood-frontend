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
  @import '~modern-css-reset';

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f4f4f4;
  }

  a {
    color: #f4f4f4;
    text-decoration: underline;
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
    padding: 1.5rem 1rem;
    line-height: 1;
  }

  header {
    background-color: #11151d;
  }

  section {
    padding: 0.5rem;

    &:first-of-type {
      background-color: #1e232c;
    }

    &:nth-of-type(2) {
      background-color: #222631;
    }

    &:nth-of-type(3) {
      background-color: #262a35;
    }
  }
</style>
