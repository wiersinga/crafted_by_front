<template>
   <h1>Produits dans {{ route.params.categoryName }}</h1>


   <!-- <div v-if="store.loading">Chargement des produits...</div>

<div v-if="!store.loading"> -->
   <Product 
   v-for="product in store.products.data"
   :key=product.id
   :id=product.id
   :name=product.name
   :price=product.price
   :productImage= product.product_image

   />


</template>

<script setup>
import { useProductStore } from '@/stores/products';
import Product from '../components/Product.vue'; 
import { onMounted, toRefs} from 'vue';
import { useRoute } from 'vue-router';


const store = useProductStore()
const route = useRoute();
const { products } = toRefs(store);

onMounted(()=>{
console.log(route.params.categoryName)
store.getProductsByCategory(route.params.categoryName)
console.log(products.value);
})



</script>
