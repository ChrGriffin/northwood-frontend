<template>
  <div>
    <site-header />
    <product-grid />
    <about-northwood />
    <instagram-grid />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import SiteHeader from '@/components/SiteHeader';
  import ProductGrid from '@/components/ProductGrid';
  import AboutNorthwood from '@/components/AboutNorthwood';
  import InstagramGrid from '@/components/InstagramGrid';

  @Component({
    components: {InstagramGrid, AboutNorthwood, ProductGrid, SiteHeader},
  })
  export default class Home extends Vue {}
</script>
