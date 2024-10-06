<template>
  <div class="carousel max-w-full p-4 space-x-4"> 
    <router-link v-for="category in storeCategories.categories.data" :key="category.id" 
    @click="click(category.name)"
      :to="{ name: 'categoryFilter', params: { categoryName: category.name } }">  
        <div class="carousel-item">
          <img :src="getImageUrl(category.name)" class="rounded-box" :alt="category.name" />
        </div>  
     </router-link> 
  </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/category';
import { toRefs, onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/products';
const store = useProductStore()
const { products } = toRefs(store);
const activeCategoryIndex = ref(0); 


const getImageUrl = (categoryName) => `/categories/${categoryName.toLowerCase()}.svg`;

const storeCategories = useCategoryStore();

//const { categories }= toRefs(storeCategories);

onMounted(()=> {
  storeCategories.fetchCategories();
})

function click(category)
{
    store.getProductsByCategory(category);
}

// function prevCategory() {
//   activeCategoryIndex.value = Math.max(0, activeCategoryIndex.value - 1);
// }

// function nextCategory() {
//   activeCategoryIndex.value = Math.min(storeCategories.categories.data.length - 1, activeCategoryIndex.value + 1);
// }
</script>
<style scoped>
.carousel { 
  background-color: #2C666E;
}
.carousel-container {
  display: flex;
  align-items: center;
}

.carousel-arrow {
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 24px;
  margin: 0 10px;
}
</style>