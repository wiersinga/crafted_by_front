import { defineStore } from "pinia";

import  api_url  from '../services/api'


export const useCategoryStore= defineStore("category", {
    state: () => ({
     category: {}
    }),
    getters: {
      
    }, 
    actions: {
        async fetchCategories(){
            try {
                const data = await api_url.get('/categories')
                this.categories= data.data
            }
            catch (error){
                alert(error)
                console.log(error)
            }
        },
        async getCategoryById(categoryId){
            try {
                const data = await api_url.get(`/categories/${categoryId}`)
                this.category= data.data
            }
            catch (error){
                alert(error)
                console.log(error);
            } 
        }, 
    },
}
)