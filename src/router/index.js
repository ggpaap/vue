import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPage from "@/components/AdminPage.vue";
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
      path: "/Admin",
      name: 'Admin',
      component: AdminPage,
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

