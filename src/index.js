import Vue from 'vue';
import { NoticeBar,Popup,Button,Area,Calendar,Sticky     } from 'vant';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
// import store from '@/store';
import {Switch,Drawer} from '@/components'
Vue.component('Icon', Icon);
Vue.use(Switch).use(Drawer).use(NoticeBar).use(Popup).use(Button).use(Area).use(Calendar).use(Sticky) ;
import Vuex from '@/vuex/index'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		count:23
	}
})


window.vm = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
});

//只要传递给组件的配置项。都会被保存在$options
