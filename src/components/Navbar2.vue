<template>
    <nav class="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
         
                <router-link to="/"  class="flex text-lg font-semibold">
                    <div class="mt-3 text-red-600">Cr</div>
                    <img src="./icons/logo.svg" width="50" height="50" class="p-2" alt="Rz Codes Logo" />
                    <div class="mt-3 text-red-600">fted By</div>
                </router-link>
            
        </div>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                    <ul class="py-2 lg:py-0 ">
                        <RouterLink class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" to="/products">
                            Produits
                        </RouterLink>
                    </ul>
                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Catégories
                        </a>
                    </ul>
                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Profile
                        </a>
                    </ul>

                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Autres
                        </a>
                    </ul>
                    <ul class="py-4 lg:py-0 ">
                        <router-link to="/login" class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" >
                       <Button 
                       name="Se connecter" 
                       backgroundColor="#B31414"
                       />
                    </router-link>
                    </ul>
                    <ul class="py-4 lg:py-0 ">
                        <router-link to="/register" class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" >
                       <Button 
                       name="S'inscrire" 
                       backgroundColor="#B31414"
                       />
                        </router-link>
                    </ul>     
                    <ul class="py-4 lg:py-0 ">
                        <router-link to="/cart" class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" >
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 14V2H0V0H3C3.55229 0 4 0.44772 4 1V13H16.4384L18.4384 5H6V3H19.7192C20.2715 3 20.7192 3.44772 20.7192 4C20.7192 4.08176 20.7092 4.16322 20.6893 4.24254L18.1893 14.2425C18.0781 14.6877 17.6781 15 17.2192 15H3C2.44772 15 2 14.5523 2 14ZM4 21C2.89543 21 2 20.1046 2 19C2 17.8954 2.89543 17 4 17C5.10457 17 6 17.8954 6 19C6 20.1046 5.10457 21 4 21ZM16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21Z" fill="#B31414"/>
                            </svg>

                        </router-link>
                    </ul>                 
                </ul>
            </nav>
        </div>
    </nav>
</template>

<style>
#menu-toggle:checked+#menu {
    display: block;
}
</style>

<script>
import Button from './Button.vue';
export default {
  components: {
    Button,
  }
}
</script>