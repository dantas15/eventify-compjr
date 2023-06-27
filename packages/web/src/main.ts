import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { Toast, options as toastOptions } from './config/toasts';
import 'vue-toastification/dist/index.css';

import './assets/main.css';

const app = createApp(App);

app.use(Toast, toastOptions);
app.use(createPinia());
app.use(router);

app.mount('#app');
