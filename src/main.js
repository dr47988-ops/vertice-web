import { createApp } from 'vue'

// Evita que el navegador restaure la posición al actualizar
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
