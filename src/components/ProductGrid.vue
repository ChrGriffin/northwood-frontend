<template>
  <div>
    <h2>For Sale</h2>
    <div class="product-grid">
      <product v-if="!loading" v-for="product in products" :key="product.name" :product="product"></product>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ProductRepository from '@/repositories/ProductRepository';
    import {Product as ProductInterface} from '@/repositories/Interfaces';
    import Product from '@/components/Product.vue';

    @Component({
      components: {Product}
    })
    export default class ProductGrid extends Vue {
        @Prop({default: () => new ProductRepository}) productRepository!: ProductRepository;

        private products: ProductInterface[] = [];
        private loading = true;

        created() {
            this.productRepository.get()
                .then((products: ProductInterface[]) => {
                  console.log(products);
                    this.products = products;
                    this.loading = false;
                });
        }
    }
</script>

<style scoped lang="scss">
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
