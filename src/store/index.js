import Vue from 'vue';
import Vuex from '@/vuex/_index';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 123,
    msg: 'hello, vuex！',
  },
  mutations: {
    increase(state) {
      state.count++;
    },
  },
});
export default store;