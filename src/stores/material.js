import { defineStore } from "pinia";

import  api_url  from '../services/api'


export const useMaterialStore= defineStore("material", {
    state: () => ({
     materials: [],
    }),
    getters: {
      
    }, 
    actions: {
        async fetchMaterials(){
            try {
                const data = await api_url.get('/api/materials')
                this.materials= data.data
            }
            catch (error){
                alert(error)
                console.log(error)
            }
        } 
    },
}
)