<style>
.productRightSide {
    background-color: #2C666E;
}

.specialities_method_position {
    background-color: #F0EDEE;

}

.vertical-line {
    width: 0;
    height: full;
    border-left: 2px solid #2C666E;
}

.profil {
    background-color: #2C666E;
}

.profil h2,
.profil p {
    color: #F0EDEE
}

.history {
    background-color: #F0EDEE;
}
</style>
<!--<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>-->
<template>
    <div class="bg-gray-100">
        <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
                <!-- Left Side -->
                <div class="w-full md:w-3/12 md:mx-2">
                    <div
                        class="profil flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/150x150/?portrait?3" alt=""
                            class="w-36 h-36 mx-auto rounded-full dark:bg-gray-500 aspect-square">
                        <div class="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div class="my-2 space-y-1">
                                <h2 class="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                                <p class="px-4 text-xs sm:text-base dark:text-gray-400">Age</p>
                            </div>
                        </div>
                    </div>



                    <div class="history p-3 my-6 rounded-xl max-w-xs sm:px-12">
                        <div class="leading-8 text-center">
                            <h3>Mon histoire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Magnam vel repudiandae, laborum neque debitis accusamus magni corporis culpa ullam
                                consequatur minima facilis beatae ipsa eos fuga nihil quisquam ut ratione!</p>
                        </div>
                    </div>

                    <div class="history p-3 my-6 rounded-xl max-w-xs sm:px-12">
                        <div class="space-x-2">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                                        fill="#2C666E" />
                                </svg>
                            </span>
                            <span>Ma position</span>
                        </div>
                        <div>
                            <Position />
                        </div>
                    </div>
                </div>
                <!-- End Left Side -->

                <!-- Start Right Side -->
                <div class="w-full md:w-9/12 mx-2">

                    <!-- Start specialities+ method Right Side -->
                    <div class="specialities_method_position p-3 shadow-sm rounded-xl">
                        <div class="flex flex-col justify-center">
                            <div class="flex flex-row justify-between overflow-hidden space-x-6 my-4 mx-6">
                                <div class="w-1/2 text-center">
                                    <h3>Mes spécialités</h3>
                                    <ul class="space-y-4">
                                        <ul>Spécialité 1</ul>
                                        <ul>Spécialité 2</ul>
                                    </ul>
                                </div>
                                <div class="vertical-line"></div>
                                <div class="w-1/2 text-center">
                                    <h3>Ma méthode</h3>
                                    <p class="flex flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Magnam vel repudiandae, laborum neque debitis accusamus magni corporis culpa ullam
                                        consequatur minima facilis beatae ipsa eos fuga nihil quisquam ut ratione!</p>
                                </div>
                            </div>
                            <!--
                            <div
                                class="space-x-3 font-semibold text-gray-900 text-xl flex flex-col items-center space-y-6 mt-4">
                                <div class="space-x-2">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                                                fill="#2C666E" />
                                        </svg>
                                    </span>
                                    <span>Ma position</span>
                                </div>
                                <div>
                                    <Position />
                                </div>
                            </div>
                            -->
                        </div>
                    </div>
                    <!-- End specialities+ method Right Side -->

                    <!-- Start Product Right Side -->
                    <div class="productRightSide p-3 shadow-sm rounded-xl my-6">
                        <h3 class="flex justify-center">Les Produits</h3>
                        <Product />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
import Position from './Position.vue';
</script>