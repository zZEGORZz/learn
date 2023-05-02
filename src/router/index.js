import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/todoPage.vue'),
  },
  {
    path: '/poke',
    name: 'poke',
    component: () => import('../views/pokemonsPage.vue'),
  },
  {
    path: '/poker',
    name: 'poker',
    component: () => import('../views/pokerPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
