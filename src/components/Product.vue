<template>
    <a :href="product.url" target="_blank">
        <div class="product" :style="{backgroundImage: 'url(' + product.image + ')'}"></div>
        <h3>
            <span class="title">{{ product.name }}</span>
            <span class="price">${{ product.price }}</span>
        </h3>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product as ProductInterface } from '@/repositories/Interfaces';

@Component
export default class Product extends Vue {
    @Prop() private product!: ProductInterface;
}
</script>

<style scoped lang="scss">
    a {
        margin-bottom: 10px;
        background-color: black;
        text-decoration: none;
        width: 48%;
        color: white;
    }

    .product {
        width: 100%;
        padding-top: 85%;
        position: relative;
        background-size: cover;
        background-position: center;
    }

    h3 {
        margin: 0;
        padding: 0.5rem;
        font-size: 0.8rem;

        span {
            display: block;

            &.price {
                font-style: italic;
                font-size: 0.7rem;
            }
        }
    }
</style>
