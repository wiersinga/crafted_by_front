import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/product/:id/artist',
      name: 'artist',
      component: () => import('../views/ArtistProfilView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/AllProducts_FilterView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/AddressView.vue')
    },
    {
      path: '/products/category/:categoryName',
      name: 'categoryFilter',
      component: () => import('../views/ProductsByCategory.vue')
    },
  
  
  ]
})

export default router
