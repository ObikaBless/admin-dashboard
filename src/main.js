import './assets/css/fontawesome-free-6.4.0-web/css/all.min.css'
import './assets/css/style.css'
// import javascript
import './assets/js/main.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

const app = createApp(App)

app.use(router)

app.use(store)

app.mount('#app')
