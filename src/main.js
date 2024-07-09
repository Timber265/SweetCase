import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

window.addEventListener('scroll', (e) => {
    document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
})
