<template>
    <div>
    <header class="overflow-hidden">
        <Navbar2 />
        <CategoriesCarousel />
    </header>
    <main>
        
   <RouterView></RouterView>
      
    </main>

    <footer>
        <div>
            <TopFooter />
            <BottomFooter />
        </div>
    </footer>
    </div>

</template>

<script setup>
import CategoriesCarousel from './components/CategroriesCarousel.vue';
import Product from './components/Product.vue'
import Navbar2 from './components/Navbar2.vue';
import TopFooter from './components/TopFooter.vue';
import BottomFooter from './components/BottomFooter.vue';





console.log('hi test');

</script>

<style>
</style>