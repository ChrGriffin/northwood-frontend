<template>
    <a :href="product.url" target="_blank" class="product" :style="{backgroundImage: 'url(' + product.image + ')'}">
        <h3>
            <span class="title">{{ product.name }}</span>
            <span class="price">{{ product.price }}</span>
        </h3>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product as ProductInterface } from '@/repositories/Interfaces';

@Component
export default class Product extends Vue {
    @Prop() product!: ProductInterface
}
</script>

<style scoped lang="scss">
    .product {
        width: 49%;
        padding-top: 40%;
        display: block;
        position: relative;
        background-size: cover;
        background-position: center;
        margin: 0 0 5px 0;

        h3 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
</style>
