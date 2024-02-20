<template>

    <main>
        <div class="randomProducts">
            <h1 class="flex justify-center">Des Produits aléatoires pour vous</h1>
            <Product />
        </div>
    </main>

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

