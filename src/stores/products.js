import { defineStore } from "pinia";
import { ref } from 'vue';

import api_url from '../services/api'


export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        currentProduct: {},
        loading: ref(false),
        error: null,
    }),
    getters: {

    },
    actions: {
        async fetchProducts() {
            try {
                const data = await api_url.get('/api/products')
                this.products = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchNewProducts() {
            try {
                const data = await api_url.get('/api/products/news')
                this.products = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async getProductById(id) {
            try {
                const data = await api_url.get(`/api/products/${id}`)
                this.currentProduct = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async getProductsByCategory(categoryName) {
            try {
                const data = await api_url.get(`/api/products/category/${categoryName}`)
                this.products = data.data
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async getProductsBySelectedCategories(selectedCategories) {
            try {
                const categoriesQuery = selectedCategories.join(',');
                const data = await api_url.get(`api/products/categories/filter/${categoriesQuery}`)
                this.products = data.data
                console.log(this.products);
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async  fetchFilteredProducts(categoryNames=null, materialNames=null) {
            loading.value = true;
            error.value = null;
    
            try {
                // Construire l'URL avec les paramètres de filtre
                let url = '/api/products';
                if (categoryNames || materialNames) {
                    url += '?';
                    if (categoryNames) {
                        url += `categoryNames=${encodeURIComponent(categoryNames)}&`;
                    }
                    if (materialNames) {
                        url += `materialNames=${encodeURIComponent(materialNames)}`;
                    }
                }
    
                // Appeler l'API
                const response = await axios.get(url);
                products.value = response.data.data;
            } catch (err) {
                error.value = err;
                console.error('Error fetching products:', err);
            } finally {
                loading.value = false;
            }
        }
    
        // return {
        //     products,
        //     loading,
        //     error,
        //     fetchFilteredProducts,
        // };
    },
    
}
)