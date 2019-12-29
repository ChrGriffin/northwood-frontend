import {shallowMount} from '@vue/test-utils';
import Product from '@/components/Product.vue';

const product = {
    name: 'Geralt of Rivia',
    price: 420.69,
    image: 'https://geralt.of/rivia.png',
    url: 'https://geralt.of/rivia',
};

describe('ProductGrid.vue', () => {
    it('displays the product information', () => {
        const wrapper = shallowMount(Product, {
            propsData: {product},
        });

        expect(wrapper.find('h3').text()).toContain(product.name);
        expect(wrapper.find('h3').text()).toContain(product.price.toString());
    });

    it('displays the product image', () => {
        const wrapper = shallowMount(Product, {
            propsData: {product},
        });

        expect(wrapper.find('img').element.getAttribute('src')).toBe(product.image);
        expect(wrapper.find('img').element.getAttribute('alt')).toBe(product.name);
    });

    it('links to the product url', () => {
        const wrapper = shallowMount(Product, {
            propsData: {product},
        });

        expect(wrapper.find('a').element.getAttribute('href')).toBe(product.url);
    });
});
