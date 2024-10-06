import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios';


// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

