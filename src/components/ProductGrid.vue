<template>
  <section>
    <h2>For Sale</h2>
    <div v-if="!loading" class="product-grid">
      <product v-for="product in products" :key="product.name" :product="product" />
    </div>
  </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ProductRepository from '@/repositories/ProductRepository';
    import {Product as ProductInterface} from '@/repositories/Interfaces';
    import Product from '@/components/Product.vue';

    @Component({
      components: {Product},
    })
    export default class ProductGrid extends Vue {
        @Prop({default: () => new ProductRepository()}) private productRepository!: ProductRepository;

        private products: ProductInterface[] = [];
        private loading = true;

        public created() {
            this.productRepository.get()
                .then((products) => {
                    this.products = products as ProductInterface[];
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
