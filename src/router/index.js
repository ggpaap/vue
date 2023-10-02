import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from "../views/LoginPage.vue";
import CadastroPage from "../views/CadastroPage.vue";

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,      
    },
    {
      path: "/login",
      name:'login',
      component: LoginPage,
    },
    {
      path:"/cadastro",
      name:'cadastro',
      component: CadastroPage,
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

