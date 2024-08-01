
import { createApp } from 'vue';
import App from './App.vue'

import PrimeVue from 'primevue/config';

import Lara from './presets/lara'

import {router} from './Routing'

import 'primeicons/primeicons.css'
import "./style.css"
import './assets/base.css'

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.use(router)

app.mount('#app')