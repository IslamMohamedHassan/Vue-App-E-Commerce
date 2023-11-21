import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// Emitter
import mitt from 'mitt'

const Emitter = mitt()

const app = createApp(App)
app.use(vuetify).provide("Emitter",Emitter)
app.use(createPinia())
app.use(router)

app.mount('#app')
