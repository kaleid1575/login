import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Success from '../components/Success.vue';

const routes = [
    {
  path: '/',
  name: 'Login',
  component: Login
},
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
