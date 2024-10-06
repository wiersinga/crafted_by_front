import { defineStore } from "pinia";

import  api_url  from '../services/api'


export const useAddressStore= defineStore("address", {
    state: () => ({
     address: {},
    }),
    getters: {
      
    }, 
    actions: {
        async fetchAddressArtist(artistId){
            try {
                const data = await api_url.get(`/api/addresses/artist/${artistId}`)
                this.address= data.data
            }
            catch (error){
                alert(error)
                console.log(error)
            }
        }
    },
}
)