<template>

    <main>
        <div class="randomProducts">
            <h1 class="flex justify-center">Des Produits aléatoires pour vous</h1>
            <Product />
                </div>
                
    </main>
<!--     <div x-data="{ cartOpen: false , isOpen: false }">
                <h1 class="flex justify-center">Des Produits aléatoires pour vous</h1>
    <div class="my-8">
      <div class="mt-16">
        <div class="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <div v-for="(product, index) in products" :key="index" class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <Product :product="product" />
          </div>
        </div>
      </div>
    </div>

        </div>-->
</template>
<script setup>
import Product from "../components/Product.vue";
</script>
<style  scoped>
.randomProducts {
    background-color: #2C666E;
}
h1 {
    color: #F0EDEE ;
}
</style>

