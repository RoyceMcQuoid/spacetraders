import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@/views/Auth.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})

export default router
