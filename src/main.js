import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)

// Config globale d'Axios
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:3000' // URL de base du backend -> server
})

app.mount('#app')
