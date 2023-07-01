import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Toast, options as toastOptions } from './config/toasts'
import 'vue-toastification/dist/index.css'

import './assets/main.css'

import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})

app.use(Toast, toastOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
