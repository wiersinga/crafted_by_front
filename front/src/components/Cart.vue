<!-- Panier.vue -->
<template>
    <div>
      <h2>Panier</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">{{ item.name }} - {{ item.price }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return this.$store.state.cartItems; // Accéder à l'état du panier depuis VueX ou du composant parent
      }
    }
  }
  </script>
  