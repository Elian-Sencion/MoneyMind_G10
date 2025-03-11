import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue'; // ✅ Importamos el Login


const routes = [
  {
    path: '/',
    redirect: '/login' // ✅ Cambia la redirección inicial al Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login // ✅ Nueva ruta para el login
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
