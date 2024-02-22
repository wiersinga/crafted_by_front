<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
  
        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="`${store.currentProduct?.image}`">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">REF205 </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ store.currentProduct?.title }}</h1>

          <p class="leading-relaxed">{{ store.currentProduct?.description }}</p>
          <div>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Catégorie:</h1>
            <span>{{ store.currentProduct?.category }}</span>

            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Matériau(x) utilisé(s):</h1>
            <ul>
              <li>Bois</li>
              <li>Verre</li>
              <li>Cuivre</li>
            </ul>
          </div>

          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">Prix: {{ store.currentProduct?.price }}</span>
          </div>
          <div class="py-16 flex  items-center flex-col">
            <RouterLink to="/login">
              <Button name="Ajouter au panier" backgroundColor="#B31414" />
            </RouterLink>

            <RouterLink to="/">
              <Button class="mt-4" name="Revenir aux produits" backgroundColor="#07393C" />
            </RouterLink>
            <div>
              <div class="mt-6 flex flex-row">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"
                    fill="#2C666E" />
                </svg>
                <span class="mx-4">Partager</span>
              </div>
         
                <div class="mt-4 flex">
                  <RouterLink to="/artist">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2178_3513)">
                    <path
                      d="M4 20.7442C4 16.3259 7.58172 12.7442 12 12.7442C16.4183 12.7442 20 16.3259 20 20.7442H18C18 17.4305 15.3137 14.7442 12 14.7442C8.68629 14.7442 6 17.4305 6 20.7442H4ZM12 11.7442C8.685 11.7442 6 9.0592 6 5.7442C6 2.4292 8.685 -0.255798 12 -0.255798C15.315 -0.255798 18 2.4292 18 5.7442C18 9.0592 15.315 11.7442 12 11.7442ZM12 9.7442C14.21 9.7442 16 7.9542 16 5.7442C16 3.5342 14.21 1.7442 12 1.7442C9.79 1.7442 8 3.5342 8 5.7442C8 7.9542 9.79 9.7442 12 9.7442Z"
                      fill="#2C666E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2178_3513">
                      <rect width="24" height="24.8372" rx="5" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </RouterLink>
                <span class="mx-4">Voir le profil d'artisan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue';
import { onMounted } from "vue";
import { useProductStore } from '@/stores/products';
import { useRouter, useRoute } from 'vue-router'

const route= useRoute();
console.log(route);

const store = useProductStore();

onMounted(()=> {
    store.getProductById(route.params.id);
    console.log(store, 'test2');
})



</script>

<style scoped>
section {
  background-image: #F0EDEE;
}
</style>