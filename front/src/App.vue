
<template>
    <header class="overflow-hidden">
        <Navbar2 />
        <CategoriesCarousel />
    </header>
    <main>
        <div class="randomProducts">
            <h3 class="text-xl font-medium flex justify-center">Produits aléatoites pour Vous</h3>
            <Product />    
        </div>
        <div class="register">
            <Register />

        </div>
    </main>

    <footer>
        <div>
            <TopFooter />
            <BottomFooter />
        </div>
    </footer>
</template>

<script setup>
import CategoriesCarousel from './components/CategroriesCarousel.vue';
import Product from './components/Product.vue'
import Navbar2 from './components/Navbar2.vue';
import TopFooter from './components/TopFooter.vue';
import BottomFooter from './components/BottomFooter.vue';
import ProductDetails from './components/ProductDetails.vue';
import Register from './components/Register.vue';
console.log('hi test');
</script>

<style>

</style>