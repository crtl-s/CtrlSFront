import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

import { createApp, ref } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const app = createApp(App);
app.use(createPinia());
const user = ref(null);
app.provide('user', user);
app.use(router);

app.mount('#app');
