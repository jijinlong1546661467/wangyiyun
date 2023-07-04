import HomeView from '@/indexView/HomeView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/indexView/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/HomeView/123',
  },
  {
    path: '/HomeView/:id',
    component: HomeView,
  },
  {
    path: '/MineView',
    component: MineView,
  },
];
