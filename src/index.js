import Vue from 'vue';
import { NoticeBar,Popup,Button,Area   } from 'vant';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import {Switch,Drawer} from '@/components'
Vue.component('Icon', Icon);
Vue.use(Switch).use(Drawer).use(NoticeBar).use(Popup).use(Button).use(Area) ;


const app = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
});
