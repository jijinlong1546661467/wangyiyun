import Vue from 'vue';
//vant滑块组件
import { Cell, CellGroup, Popup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});

