import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Product from '@/components/Product.vue'; 

const routes = [
  {
    path: '/products/:id',
    component: { template: '<div></div>' }, 
  },
  {
    path: '/product/:id/artist/',
    component: { template: '<div></div>' }, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Product.vue', () => {
  let wrapper;
  const mockAddToCart = vi.fn(); 

  const propsData = {
    id: '123',
    productImage: 'https://example.com/image.jpg',
    name: 'Test Product',
    price: '19.99',
    addToCart: mockAddToCart, 
  };

  beforeEach(() => {
    wrapper = shallowMount(Product, {
      props: propsData,
      global: {
        plugins: [router],
      },
    });
  });

  it('renders router-link correctly with product id', () => {
    const routerLink = wrapper.findComponent({ name: 'RouterLink' });
    expect(routerLink.exists()).toBe(true); 
    expect(routerLink.props().to).toBe(`/products/${propsData.id}`); 
  });

  it('renders product information correctly', () => {
    expect(wrapper.text()).toContain(propsData.name); 
    expect(wrapper.text()).toContain(`${propsData.price} €`); 
  });

  it('calls addToCartHandler when the button is clicked', async () => {
    const button = wrapper.find('button'); 
    await button.trigger('click'); 
    expect(mockAddToCart).toHaveBeenCalled(); 
  });
});
