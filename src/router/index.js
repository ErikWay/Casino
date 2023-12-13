import Vue from 'vue';
import VueRouter from 'vue-router';
import ConnectGame from '@/pages/ConnectGame.vue';
import MainGame from '@/pages/MainGame.vue';
import PresentPage from '@/pages/PresentPage.vue';
import CashGame from '@/pages/CashGame.vue';
import AccountGame from '@/pages/AccountGame.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main', // Перенаправление с главной страницы на /connect
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
  {
    path: '/pay',
    component: CashGame,
  }, 
  {
    path: '/account',
    component: AccountGame,
  }, 
];

const router = new VueRouter({
  routes,
});

export default router;
