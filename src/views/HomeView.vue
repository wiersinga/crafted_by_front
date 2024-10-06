<template>
    <main>
      <div class="randomProducts">       
            <h1 class="flex justify-center">Des Produits aléatoires pour vous</h1> 
        <div class="grid gap-6 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

             <Product 
          v-for="product in store.products"
          :key = product.id
          :id = product.id
          :name = product.name
          :price = product.price
          :productImage = product.product_image
          :addToCart="addToCart"
          />
        </div>
    </div>

    
  

    </main>
</template>

<script setup>
import { useProductStore } from '@/stores/products';
import { useCartStore } from "@/stores/shoppingCart";

import Product from '../components/Product.vue'; 
import { onMounted, toRefs } from 'vue';
const store = useProductStore();

const { products } = toRefs(store);
onMounted(() => {
    console.log('Fetching products...');
    store.fetchNewProducts().then(() => {
        console.log('Products fetched:', products.value);
    }).catch((error) => {
        console.error('Error fetching products:', error);
    });
});

const storeCart = useCartStore()

const addToCart = (product) => {
    storeCart.addToCart(product)
}
</script>

<style  scoped>
.randomProducts {
    background-color: #2C666E;
}
h1 {
    color: #F0EDEE ;
}
</style>

