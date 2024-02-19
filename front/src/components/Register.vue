<template>
    <div class="container">
        <h2>Créer votre compte</h2>
        <p>Vous avez déjà un compte? <a href="#">Connectez-vous</a></p>
        <div class="flex justify-center">
            <fieldset>
            <legend>Vous êtes ?</legend>
            <div>
                <input type="radio" id="" name="role" value="artist" required />
                <label for="artist">Vendeur</label>
            </div>
            <div>
                <input type="radio" id="" name="role" value="client" required />
                <label for="client">Acheteur</label>
            </div>
        </fieldset>
        </div>
       
        <div class="py-10">
            <form class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="firstName"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                    <input type="name" name="firstName" id="firstName"
                        class="text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Hicham" required="">
                </div>
                <div>
                    <label for="lastName"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                    <input type="name" name="lastName" id="firstName"
                        class=" text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Hicham" required="">
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse
                        e-mail</label>
                    <input type="email" name="email" id="email"
                        class="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com" required="">
                </div>

                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de
                        passe</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>
                <div>
                    <label for="confirm-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmez le mot de
                        passe</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••"
                        class="text-gray-900 sm:text-sm focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required="">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms
                                and Conditions</a></label>
                    </div>
                </div>
                <button type="submit"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                    an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
            </form>
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
    background-color: #f9f9f9;
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
}

div {
    margin-bottom: 10px;
}

/* Style pour les radios */
input[type="radio"] {
    margin-right: 10px;
}
input[type="name"], input[type="password"], input[type="confirm-password"], input[type="email"]  {
border: none;
border-bottom: 2px solid #2C666E;
}

label {
    font-weight: bold;
}

/* Media query pour rendre la mise en page responsive */
@media (max-width: 768px) {
    .container {
        max-width: 100%;
    }
}</style>
