<template>
  <header>
    <img :src="require('./../assets/northwood_logo.svg')" alt="Northwood logo" />
    <h1>Northwood</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SiteHeader extends Vue {
}
</script>

<style scoped lang="scss">
  header {
    text-align: center;
    padding: 2rem;
  }

  img {
    max-width: 50%;
    max-height: 50vh;
  }

  h1 {
    font-size: 4.8rem;
    letter-spacing: -0.2rem;
  }
</style>
