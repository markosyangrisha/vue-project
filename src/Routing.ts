import { createWebHistory, createRouter } from 'vue-router'

import Login from './components/Login/Login.vue'
import SignUp from './components/SignUp/SignUp.vue'

const routes = [
    {path: '/', component: Login },
    {path: '/signup', component: SignUp },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})