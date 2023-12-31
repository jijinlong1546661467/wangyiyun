import Vue from 'vue';
import { NoticeBar, Popup, Button, Area, Calendar, Sticky, Circle,DatetimePicker,Cell, CellGroup } from 'vant';
import { Icon } from '@iconify/vue2';
import player from './components/player/player';
Vue.use(player)
import App from '@/App.vue';
import router from '@/router';


// import VueRouter from '@/vue-router';
// Vue.use(VueRouter)
// const router = new VueRouter()


// import store from '@/store';
import { Switch, Drawer } from '@/components'
Vue.component('Icon', Icon);
Vue.use(Switch).use(Drawer).use(NoticeBar).use(Popup).use(Button).use(Area).use(Calendar).use(Sticky).use(Circle).use(DatetimePicker).use(Cell).use(CellGroup);
import Vuex from '@/vuex/index'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		count: 23
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
