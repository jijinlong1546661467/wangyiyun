<template>
	<div class="w-screen h-screen relative">
		<div>
			<icon style="font-size: 40px; position: absolute" icon="ep:arrow-left-bold" />
			<p class="font-bold text-center text-2xl">歌单广场</p>
		</div>

		<ul class="flex h-[60px] leading-[60px]">
			<li class="flex overflow-hidden absolute left-0 w-[90%] ml-[5%]">
				<div v-for="item in menu" class="mx-4 inline-block whitespace-nowrap" v-on:click="toggleMenu(item.name)"
					:key="item.id">
					<span v-bind:class="{ active: item.name === activeMenuItem }">{{
						item.name
						}}</span>
				</div>
			</li>
		</ul>
		<ul class="flex flex-wrap justify-around">
			<li v-for="item in playlists" class="w-[27%] mb-3" :key="item.id">
				<div class="rounded overflow-hidden relative">
					<img :src="item.coverImgUrl" alt="" class="" />

					<p class="absolute bg-[rgb(123,83,73)] text-white z-10 "
						style="top: 6px;right: 6px;padding: 8px;border-radius: 25px;font-size: 10px;">
						<Icon icon="ph:play" color="white" width="15" class="inline-block" />
						{{ Math.floor(item.playCount / 10000) }}万
					</p>
				</div>
				<p class="h-[48px] overflow-hidden">{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import { fetchPlaylistHot, fetchPlaylists } from "@/request/index.js"
	export default {
		data() {
			return {
				menu: [],
				activeMenuItem: '',
				playlists: [],
			};
		},
		methods: {
			toggleMenu(name) {
				this.activeMenuItem = name;
				this.fetchPlaylists(name);
			},
		},
		created() {
			fetchPlaylistHot()
				.then((res) => {
					this.menu = res.data.tags;
					return (this.activeMenuItem = this.menu[0].name);
				})
				.then((cat) => {
					this.fetchPlaylists(cat);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		//监控某个响应数据发生变化之后执行指定的动作（函数）
		//methods,beforeCreate,created,watch中的this指向vm
		watch: {
			activeMenuItem: function (newValue) {
				fetchPlaylists(newValue)
					.then((res) => {
						this.playlists = res.data.playlists;
					});
			},
			immediate:true
		}
	};
</script>

<style>
	.active {
		font-weight: 900;
		border-bottom: 5px solid red;
		border-radius: 5px;
	}
</style>