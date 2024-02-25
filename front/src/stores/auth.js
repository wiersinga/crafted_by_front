import { defineStore } from "pinia";

import  api_url2  from '../services/api'


export const useAuthStore = defineStore("auth", {
 state: () => {
    user: JSON.parse(localStorage.getItem('user'))
 }, 
 getters: {

 }, 
 actions: {
    async login(email, password) {
         
            const res = await api_url2.get("/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
          })
                
        
        const user = await res.json()
        this.user = user;
      },
    //   async signIn(email, password) {
    //     const res = await fetch("https://localhost:3000/register", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, password }),
    //     });
    //     const user = await res.json();
    //     this.user = user;
    //   },
 }
})