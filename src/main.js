import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // Asegúrate de que esta ruta apunta a tu archivo de store


createApp(App).use(store).mount('#app')