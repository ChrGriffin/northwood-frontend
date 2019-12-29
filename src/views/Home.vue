<template>
  <div>
    <site-header />
    <product-grid />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import SiteHeader from '@/components/SiteHeader';
  import ProductGrid from '@/components/ProductGrid';

  @Component({
    components: {ProductGrid, SiteHeader},
  })
  export default class Home extends Vue {}
</script>
