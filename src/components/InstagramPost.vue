<template>
    <a :href="instagramPost.url" target="_blank">
        <div class="instagram-post" :style="{backgroundImage: 'url(' + instagramPost.image + ')'}"></div>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {InstagramPost as InstagramPostInterface} from '@/repositories/Interfaces';

@Component
export default class Product extends Vue {
    @Prop() private instagramPost!: InstagramPostInterface;
}
</script>

<style scoped lang="scss">
    a {
        width: 50%;
    }

    .instagram-post {
        width: 100%;
        padding-top: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
    }
</style>
