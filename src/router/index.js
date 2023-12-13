import Vue from 'vue';
import VueRouter from 'vue-router';
import ConnectGame from '@/pages/ConnectGame.vue';
import MainGame from '@/pages/MainGame.vue';
import PresentPage from '@/pages/PresentPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/games', // Перенаправление с главной страницы на /connect
  },
  {
    path: '/connect',
    component: ConnectGame,
  },
  {
    path: '/games',
    component: MainGame,
  },
  {
    path: '/main',
    component: PresentPage,
  }, 
];

const router = new VueRouter({
  routes,
});

export default router;
