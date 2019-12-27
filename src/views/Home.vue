<template>
  <site-header />
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import SiteHeader from '@/components/SiteHeader';

  @Component({
    components: {SiteHeader},
  })
  export default class Home extends Vue {}
</script>
