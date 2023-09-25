import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from "../views/LoginPage.vue";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,      
    },
    {
      path: "/",
      name:'login',
      component: LoginPage,
    }
  ]
})

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

