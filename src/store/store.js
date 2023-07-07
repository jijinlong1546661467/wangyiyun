import Vue from 'vue';
import _state from './state';
const state = Vue.observable(_state);
const mutations = {
	increase() {
		state.count++;
	},
};

export default {
	state,
	mutations,
};