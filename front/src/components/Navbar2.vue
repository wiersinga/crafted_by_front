<template>
    <nav class="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
            <a href="/" class="flex text-lg font-semibold">
                <div class="mt-3 text-red-600">Cr</div>
                <img src="./icons/logo.svg" width="50" height="50" class="p-2" alt="Rz Codes Logo" />
                <div class="mt-3 text-red-600">fted By</div>
            </a>
        </div>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Produits
                        </a>
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
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                       <Button 
                       name="Se connecter" 
                       backgroundColor="#B31414"
                       />
                        </a>
                    </ul>
                    <ul class="py-4 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                       <Button 
                       name="S'inscrire" 
                       backgroundColor="#B31414"
                       />
                        </a>
                    </ul>
                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            A propos
                        </a>
                    </ul>
                    <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Aide
                        </a>
                    </ul>  <ul class="py-2 lg:py-0 ">
                        <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                            Contactez-nous
                        </a>
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