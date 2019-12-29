import { shallowMount } from '@vue/test-utils';
import ProductGrid from '@/components/ProductGrid.vue';

describe('ProductGrid.vue', () => {
  it('foos', () => {
    const wrapper = shallowMount(ProductGrid, {
      propsData: { },
    });
  });
});
