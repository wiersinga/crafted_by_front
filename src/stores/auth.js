import { defineStore } from "pinia";

import api_url from '../services/api'


export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: null
  }),
  getters: {
    isLoggedIn() {
      return !!this.token; 
    },
  },
  actions: {
    async register() {

    },

    setToken(token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    async login(email, password) {
      try {
        await api_url.get("/sanctum/csrf-cookie");
        const res = await api_url.post("/api/login", {
          email: email,
          password: password 
        });

        console.log('res:', res);
        if (res.status === 'success') { 
          const data = res.data;

          this.user = data.user;
          this.token = data.token;

          setToken(this.token);
          localStorage.setItem('token', this.token);

          console.log('Utilisateur connecté:', this.user);
          console.log('Token:', this.token);
        } else {
          console.error("La connexion a échoué");
        }
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
      }
    }
  


  }
})