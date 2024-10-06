<<<<<<< HEAD
# crafted_by_front

"Crafted by" est une marktplace pour création et  vente des produits artisanaux. 
Ce dépot représente la partie front-end du projet utilisant le framework Vuejs 3.


## Exigences
| Package  | Version   | 
|----------|-----------| 
| Node     | V20.5.1 + | 
| PNPM      | V8.15.3  + |  

## Étapes d'installation
1. **Installer Vue.js** : 

   ```bash
    pnpm create vue@latest
   ```
Cette commande installera et exécutera create-vue. 

  ```bash
✔ Project name: … <votre-nouveau-projet>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
   ```
   Choisir les fonctionnalités optionnelles selon votre projet. 
   Dans mon cas j'ai créé le projet : 
* Sans utilisation de TypeScript
* Sans support du JSX
* Avec Vue Router
* Avec Pinia
* Sans Vitest
* Sans tests end-to-end
* Avec ESLint
* Avec Prettier

Après suivez les instructions pour installer les dépendances et démarrer le serveur de dev:
```bash
cd <nom-du-projet>
pnpm install
pnpm format
pnpm dev
```

2. **Installer Tailwindcss** : Tailwind CSS est une dépendance de base pour DaisyUI. Vous pouvez l'installer en utilisant pnpm :

 ```bash
    pnpm add tailwindcss@latest postcss@latest autoprefixer@latest
   ```
   
    
 3. **Installer DaisyUI** : TDaisyUI est une surcouche de composants pour Tailwind CSS. Vous pouvez l'installer en utilisant pnpm ::

 ```bash
    pnpm i -D daisyui@latest
   ```


4. **Configurer Tailwind CSS/ DaisuUI** : Ajouter DaisyUI dans ***tailwind.confog.js***

 ```bash
 module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
};
   ```

   5. **Configurer Tailwind CSS/ DaisuUI** : Ajouter DaisyUI dans ***tailwind.confog.cjs***

 ```bash
 module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
};
   ```

 5. **Importer DaisyUI dans le CSS** : Importez DaisyUI dans le fichier prinicpale de CSS

  6. **Installer Axios** : Axios est une bibliothèque HTTP pour JavaScript. Vous pouvez l'installer en utilisant pnpm :

   ```bash
   pnpm add axios
   ```
 
   
=======
# front

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
>>>>>>> d4a045d (unit tests)
