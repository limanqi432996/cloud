
import { createApp } from 'vue'
import VIcon from './components/v-icons/index.vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)

app.component('v-',VIcon)

// const pinia = createPinia()
// app.use(createPinia())

app.mount('#app')