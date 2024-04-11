import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

// Config globale d'Axios
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:3001', // URL de base du backend
});

app.mount('#app');
