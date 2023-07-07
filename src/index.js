import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);

import { NoticeBar,Popup  } from 'vant';
Vue.use(Popup);
Vue.use(NoticeBar);


const app = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
});
