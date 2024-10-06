<template>
    <div>
        <!-- <div class="my-8"> -->
           
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                       >
                        <router-link  :to="`/products/${id}`">
                            <div class="flex items-end justify-end h-56 bg-cover"
                                :style="{ backgroundImage: 'url(' + productImage + ')' }" >
                            </div>
                        </router-link > 
                        <div class="infosProduct px-5 py-3 flex flex-row justify-between items-end">
                            <div>
                                <h3 class="text-gray-700 uppercase">{{ name }}</h3>
                                <span class="text-gray-500 mt-2">{{ price }} €</span>
                            </div>
                            <div class="ml-auto mr-4 flex space-x-6">
                                
                                    <button @click="addToCartHandler"
                                        class="rounded-full bg-green-600 text-white -mb-2 hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg>
                                    </button>
                        <RouterLink :to="`/product/${id}/artist/`"> 
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
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

                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0L20.2761 7.42789L18.3905 9.1202L13.3333 4.58138V16.0524H10.6667V4.58138L5.60948 9.1202L3.72385 7.42789L12 0ZM0 18.4458V13.6591H2.66667V18.4458C2.66667 19.1067 3.26363 19.6425 4 19.6425H20C20.7364 19.6425 21.3333 19.1067 21.3333 18.4458V13.6591H24V18.4458C24 20.4286 22.2092 22.0358 20 22.0358H4C1.79087 22.0358 0 20.4286 0 18.4458Z"
                                        fill="#2C666E" />
                                </svg>
                            </div>

                        </div>
                    </div>
        <!-- </div> -->
    </div>
</template>
<style>
.infosProduct {
    background-color: #F0EDEE;
}
</style>

<script setup>

const props = defineProps({
    id: String,
    name: String,
    price: String,
    productImage: String,
    addToCart: Function
})

const addToCartHandler = () => {
  // Call the addToCart function passed as a prop
//   props.addToCart(props.productId, props.productName, props.productPrice, props.productImage);
props.addToCart(props);

};
// import { useCartStore } from "@/stores/shoppingCart";


//  const storeCart = useCartStore();

// const addToCart = (item) => {
//   storeCart.addToCart(item);  
// console.log('item',item)
// };

</script>