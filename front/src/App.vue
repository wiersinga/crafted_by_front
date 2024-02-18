
<template>
   
    <header>
        <Navbar2 />
    <CategoriesCarousel />

    </header>
    <main>
    <Product />
    </main>

    <footer>
    <FooterApp />
        
    </footer>

</template>

<script setup>
import CategoriesCarousel from './components/CategroriesCarousel.vue';
import Product from './components/Product.vue'
import Navbar2 from './components/Navbar2.vue';
import FooterApp from './components/FooterApp.vue';
console.log('hi test');
</script>

<style>
#products {
    background-color: #2C666E;
}
</style>