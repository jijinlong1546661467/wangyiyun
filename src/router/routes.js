import HomeView from '@/indexView/HomeView.vue';
import MineView from '@/indexView/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/0708',
  },
  {
    path: '/HomeView',
    component: HomeView,
  },
  {
    path: '/MineView',
    component: MineView,
  },
  {
    path: '/Foo',
    //懒加载组件
    component: () => import('@/indexView/Foo.vue')
  },
  {
    path: '/MusicMenu/:id',
    //懒加载组件
    component: () => import('@/indexView/MusicMenu.vue')
  },
  {
    path: '/Login',
    //懒加载组件
    component: () => import('@/indexView/Login.vue')
  },
  {
    path: '/MyHome',
    //懒加载组件
    component: () => import('@/indexView/MyHome.jsx')
  },
  {
    path: '/0708',
    //懒加载组件
    component: () => import('@/indexView/Feat-0708.vue')
  },
  {
    path: '/BianJizliao',
    //懒加载组件
    component: () => import('@/indexView/BianJizliao.vue')
  },

];
