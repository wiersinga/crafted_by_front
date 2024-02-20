<template>
      <div x-data="{ cartOpen: false , isOpen: false }">
    <div class="my-8">
      <div class="mt-16">
        <div class="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <div v-for="(product, index) in products" :key="index" class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <Product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'; // Assurez-vous de remplacer le chemin par le chemin réel de votre composant Product

export default {
  components: {
    Product
  },
  data() {
    return {
      products: [
        { name: 'Produit 1', price: '$12', imageUrl: 'https://example.com/image1.jpg' },
        { name: 'Produit 2', price: '$15', imageUrl: 'https://example.com/image2.jpg' },
        { name: 'Produit 3', price: '$18', imageUrl: 'https://example.com/image3.jpg' }
      ]
    };
  }
}
</script>
