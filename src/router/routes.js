import HomeView from '@/indexView/HomeView.vue';
import MineView from '@/indexView/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/Login',
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
  }
];
