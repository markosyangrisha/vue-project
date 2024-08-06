import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import Login from "@/components/Login/Login.vue";
import SignUp from "@/components/SignUp/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
  { name: "login", path: "/login", component: Login, alias: "/" },
  { name: "signup", path: "/signup", component: SignUp },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
