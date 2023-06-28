import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
// import indexVue from './index.vue'
import indexVue from './index2.vue'

Vue.component('Icon', Icon);


//vm就是根实例 root 具备el，但是其他实例不具备
//组件的嵌套，A组件出现在B组件的template中，A是B的子组件

//页面打开请求自动发送，请求回来的数据还要渲染到页面上（数据驱动视图变化的ui框架）
//数据驱动视图变化的条件：数据必须是响应式数据（data）+数据必须通过模板语法绑定到模板中
//vue中this的指向问题：methods中的所有函数（不包括箭头函数）的this指向vm（vue实例对象）

const vm = new Vue({
	//挂载点
	el: '#app',
	render: h => h(indexVue)
	//指令是出现在模板中
	//模板语法：指令
	//模板在一定程度上与html片段非常相似，html+指令 === 模板（template）
	// template:'<h1>vuejs,hello!</h1>',
	// 会替换原有的html中的元素
	// template:'<div id="app">默认值1</div>',
	// 不传递template选项时，存不存在template？如果存在，是什么
	//如果不传递template它就会检查有没有传递el，如果el也没有，就会直接终止，如果传递，则将el.outHTML获取到并作为template传入
	// el.template是template的默认值
	// template取值流程：手动传递的模板>el.outHTML>undefined
});

//以_开头的变量名属性名是私有变量或私有属性，不希望其他人使用
//一般情况下：我们在实例化vue传递的配置项

// function VM(config) {
// 	const defaultOptions = {
// 		components: {},
// 		directives: {},
// 		filters: {}
// 	}
// 	this.$options = Object.assign(defaultOptions, config)
// 	//实例化操作开始
// 	typeof this.$options.beforeInit === 'function'
// 		&& this.$options.beforeInit.call(this)

// 	this.$set = function (key, value) {
// 		this.$data[key] = value
// 		Object.defineProperty(this, key, {
// 			get() {
// 				return this.$data[key]
// 			},
// 			set(value) {
// 				this.$data[key] = value
// 			}
// 		})
// 	}



// 	this.$data = typeof this.$options.data === 'function'
// 		? this.$options.data()
// 		: this.$options.data;
// 	Object.keys(this.$data).forEach(key => {
// 		Object.defineProperty(this, key, {
// 			//存值器函数	set
// 			//取值器函数	get
// 			get() {
// 				return this.$data[key]
// 			},
// 			set(value) {
// 				this.$data[key] = value
// 			}
// 		})
// 	})
// 	Object.keys(this.$options.methods).forEach(key => {
// 		Object.defineProperty(this, 'fn', {
// 			get() {
// 				return this.$options.methods[key]
// 			},
// 			set(value) {
// 				this.$options.methods[key] = value
// 			}
// 		})
// 	})
// 	//实例化操作结束
// 	typeof this.$options.afterInit === 'function'
// 		&& this.$options.afterInit.call(this)
// }
// const _vm = new VM({
// 	el: "#app",
// 	data() {
// 		return {
// 			msg: [],
// 			a: 1,
// 			b: []
// 		}
// 	},
// 	methods: {
// 		fn() {
// 			this.msg = [123, 321]
// 		}
// 	},
// 	//回调函数（生命周期函数）
// 	//自发执行，this指向实例
// 	beforeInit() { //beforeCreate
// 		console.log('开始初始化')
// 	},
// 	afterInit() {//created
// 		// this.zxc = true
// 		this.$set(this, 'zxc', true)
// 		console.log('初始化完成')
// 	},
// })
// window._vm = vm
// _vm.fn()