import { defineStore } from "pinia";

import  api_url  from '../services/api'


export const useProductStore= defineStore("product", {
    state: () => ({
        products: [], 
        currentProduct: {}, 
        loading: false,
        error: null,
    }),
    getters: {
      
    }, 
    actions: {
        async fetchProducts(){
            try {
                const data = await api_url.get('/products')
                this.products= data.data
            }
            catch (error){
                alert(error)
                console.log(error)
            }
        },
        async getProductById(productId){
           // this.currentProduct = null
            this.loading =true
            try {
                const data = await api_url.get(`/products/${productId}`)
                this.currentProduct= data.data
            }
            catch (error){
                alert(error)
                console.log(error)
            } finally {
                this.loading = false
            }
        }, 
    },
}
)