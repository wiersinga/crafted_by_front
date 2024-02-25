<template>
    <div class="container">
    <div class="containerAccount">
        <h2 class="flex justify-center">Connectez-vous à votre compte</h2>
        <p class="text-sm flex justify-center font-light text-gray-500 dark:text-gray-400">
            Vous êtes un nouvel utilisateur? <RouterLink to="/register"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Créer un compte.</RouterLink>
        </p>

        <div class="py-10">
            <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="login">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse
                        e-mail</label>
                    <input type="email" name="email" id="email" v-model="email"
                        class="text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com" required="">
                </div>
                

                 <!-- <div class="py-2" x-data="{ show: false }">
                     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de
                        passe</label> 
                    <div class="relative">
                        <input :type="show? 'password' : 'password'" name="password" id="password" placeholder="••••••••"
                        class="text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
                        required="">

                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <svg class="h-6 cursor-pointer" @click="show = !show" :class="{ 'hidden': !show, 'block': show }" width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62283 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87993 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.503 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z" fill="#2C666E"/>
                                </svg>
                                <svg class="h-6 cursor-pointer" @click="show = !show"
                                     :class="{ 'block': !show, 'hidden': show }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" fill="#2C666E"/>
                                </svg>
                        </div>
                    </div>
                </div>  -->
                <div>
                    <label for="confirm-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de
                        passe</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" v-model="password"
                        class="text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                        required="">
                </div>
                <div class="flex justify-end">
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Mot de passe oublié?</a>
                </div>
                <div class="flex justify-center">
                    <Button name="Créér un compte" backgroundColor="#B31414" type="submit" />
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<style scoped>
.container {
    max-width: 600px;
    /* Largeur maximale de la div */
    margin: 0 auto;
    /* Centrer la div horizontalement */
    padding: 20px;
    /* Ajouter de l'espace intérieur */
    background-color: #F2ECEC;
    /* Couleur de fond */
    border-radius: 10px;
    /* Coins arrondis */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* Ombre légère */
}

/* Style pour le titre */
h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

/* Style pour les liens */
p a {
    color: rgb(179, 20, 20);
    text-decoration: none;
}

/* Style pour le champ de sélection */
fieldset {
    margin-top: 20px;
    border-block-color: #07393C;
    width: 50%;
}

legend {
    font-weight: bold;
    margin-bottom: 10px;
    color: #07393C;
}

div {
    margin-bottom: 10px;
}

/* Style pour les radios */
input[type="radio"] {
    margin-right: 10px;
}

input[type="name"],
input[type="password"],
input[type="confirm-password"],
input[type="email"] {
    border: none;
    border-bottom: 2px solid #2C666E;
    background-color: #F2ECEC;
}

input[type="name"],
input[type="password"],
input[type="confirm-password"],
input[type="email"]:focus {
    outline: none;
}

label {
    font-weight: bold;
    color: #07393C;
}

/* Media query pour rendre la mise en page responsive */
@media (max-width: 768px) {
    .container {
        max-width: 100%;
    }
}
</style>
<script setup>
import Button from './Button.vue';


const storeAuth = useAuthStore();


</script>