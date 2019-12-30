<template>
  <section>
    <h2>Instagram</h2>
    <div v-if="!loading" class="instagram-post-grid">
      <instagram-post v-for="instagramPost in instagramPosts" :key="instagramPost.url" :instagram-post="instagramPost" />
    </div>
  </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {InstagramPost as InstagramPostInterface} from '@/repositories/Interfaces';
    import InstagramPost from '@/components/InstagramPost.vue';
    import InstagramPostRepository from '@/repositories/InstagramPostRepository';

    @Component({
      components: {InstagramPost},
    })
    export default class ProductGrid extends Vue {
        @Prop({default: () => new InstagramPostRepository()}) private instagramPostsRepository!: InstagramPostRepository;

        private instagramPosts: InstagramPostInterface[] = [];
        private loading = true;

        public created() {
            this.instagramPostsRepository.get()
                .then((instagramPosts) => {
                    this.instagramPosts = instagramPosts as InstagramPostInterface[];
                    this.loading = false;
                });
        }
    }
</script>

<style scoped lang="scss">
  .instagram-post-grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>
