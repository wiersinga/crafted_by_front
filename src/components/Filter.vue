<template>
  <div class="allSection">
    <!-- Mobile filter dialog  -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <!-- <div class="fixed inset-0 bg-black bg-opacity-25" /> -->
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-black">Filters</h2>
                <button type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  @click="mobileFiltersOpen = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <!-- mobile
                 Filters  -->
              <form class="pt-16 border-t border-gray-200">
              
                <Disclosure as="div"
                  class="border-t border-gray-200 px-4 py-2" v-slot="{ open }">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span class="font-medium text-black">Matériaux</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div v-for="material in storeMaterial.materials" :key="material.id" class="flex items-center">
                        <input :id="`filter-mobile-${material.id}`" :name="`${material.id}[]`"
                          :value="material.value" type="checkbox" 
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label :for="`filter-mobile-${material.id}`"
                          class="ml-3 min-w-0 flex-1 text-gray-500">{{ material.name }}</label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div"
                  class="border-t border-gray-200 px-4 py-2" v-slot="{ open }">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span class="font-medium text-black">Catégories</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div v-for="category in storeCategory.categories.data" :key="category.id" class="flex items-center">
                        <input :id="`filter-mobile-${category.id}`" :name="`${category.id}[]`"
                          :value="category.name" type="checkbox" 
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label :for="`filter-mobile-${category.id}`"
                          class="ml-3 min-w-0 flex-1 text-gray-500">{{ category.name }}</label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="justify-between border-b border-gray-200 pb-3 pt-3">
        <h1 class="sm:text-4xl text-md font-semibold tracking-tight text-black flex justify-center text-md">Nos produits pour vous</h1>
        <div class="flex items-center justify-center">
          <div type="button" class="m-2 ml-4 hover:text-gray-500 sm:ml-6 lg:hidden"
            @click="mobileFiltersOpen = true">
            <span class="sr-only">Filters</span>
            <!-- <FunnelIcon class="h-5 w-5" aria-hidden="true" /> -->
             <img class="h-8 sm:h-8 sm:w-64 flex justify-center mx-auto" src="/public/others/Filter.svg" alt="Filter" /> 
        </div>
        </div>
      </div>

      <section aria-labelledby="products-heading" class="pb-24 pt-6">
  <h2 id="products-heading" class="sr-only">Products</h2>

  <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
    <!-- Web Filters -->
    <form class="hidden lg:block lg:col-span-1">
      <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
        <h3>
          <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 rounded-xl">
            <span class="font-medium text-black">Catégories</span>
            <span class="ml-6 flex items-center">
              <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
              <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </h3>
        <DisclosurePanel class="pt-6">
          <div class="space-y-4">
            <div v-for="category in storeCategory.categories.data" :key="category.id" class="flex items-center">
              <input :id="`filter-${category.id}`" :name="`${category.name}[]`" :value="category.name" v-model="selectedCategories" @change="filterProducts(category.name, $event.target.checked)"
                type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label class="ml-3 text-sm text-gray-600">{{ category.name }}</label>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
        <h3>
          <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 rounded-xl">
            <span class="font-medium text-black">Matériaux</span>
            <span class="ml-6 flex items-center">
              <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
              <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </h3>
        <DisclosurePanel class="pt-6">
          <div class="space-y-4">
            <div v-for="material in storeMaterial.materials" :key="material.id" class="flex items-center">
              <input :id="`filter-${material.id}`" :name="`${material.name}[]`" :value="material.name"
                type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label class="ml-3 text-sm text-gray-600">{{ material.name }}</label>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </form>

    <!-- Product Grid -->
    <div class="lg:col-span-3">
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Product
          v-for="product in storeProducts.products.data"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :productImage="product.product_image"
        />
      </div>
    </div>
  </div>
</section>

    </main>
  </div>
</template>


<script setup>
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/products';
import { useMaterialStore } from '@/stores/material';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import {  FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/vue/20/solid';
import Product from './Product.vue';
import { onMounted, ref, toRefs } from 'vue'; 
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';


const storeCategory = useCategoryStore();
const storeProducts = useProductStore(); 
const storeMaterial = useMaterialStore();
const mobileFiltersOpen = ref(false)
const products = toRefs(storeProducts);
const selectedCategories = ref([]);

onMounted(() => {
  storeCategory.fetchCategories();
  storeProducts.fetchProducts();
  storeMaterial.fetchMaterials(); 
});

function filterProducts(category, checked)  {
  if (checked) {
        selectedCategories.value.push(category);
  } else {
    const index = selectedCategories.value.indexOf(category);
      if (index !== -1) {
        selectedCategories.value.splice(index, 1); 
      }
  }
  storeProducts.getProductsBySelectedCategories(selectedCategories.value);
  
  // console.log('alo',products)
  // console.log('test',selectedCategories)
}

</script>

<style scoped>
.filterGrid {
  margin-top: 50px;
  padding: 50px;
  background-color: #F0EDEE;
  border-radius: 20px;
}

.productsSection {
  background-color: #2C666E;
  border-radius: 20px;
  padding-left: 60px;
  width: 1200px
}

html {
    font-size: 100%; /* Définit la taille de la police de base (16px par défaut dans la plupart des navigateurs) */
}

body {
    font-size: 0.875rem; 
}

@media (max-width: 768px) {
    body {
        font-size: 0.75rem;
    }
}

/* Pour les écrans très petits */
@media (max-width: 480px) {
    body {
        font-size: 0.6875rem; 
    }
}

</style>
