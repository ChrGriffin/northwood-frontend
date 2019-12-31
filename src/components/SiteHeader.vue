<template>
  <header>
    <h1>
      <img :src="require('./../assets/northwood_logo.svg')" alt="Northwood logo" />
    </h1>
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
    display: inline-block;
    width: 100%;
  }
</style>
