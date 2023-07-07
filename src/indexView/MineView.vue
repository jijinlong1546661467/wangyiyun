<template>
	<div class="w-screen relative h-[140%]" style="background-color: rgb(241, 245, 249);">
		<div class=" w-[100%] pt-[15px] pl-[4%] pr-[4%]">
			<div class="flex">
				<router-link :to="{ path: '/HomeView' }">
					<icon style="font-size: 30px;" icon="ep:arrow-left" />
				</router-link>
				<input type="text" name="" id="" 
					class=" rounded-3xl  h-[30px] pl-2 w-[80%]"
					style="border: 1px solid #ccc" />
				<button class="text-[3vw] ml-[10px]">搜索</button>
			</div>
			<div class="flex justify-around my-5">
				<p class=" flex items-center">
					<Icon icon="streamline:interface-user-single-close-geometric-human-person-single-up-user" color="red"
						style="margin-right: 5px;">
					</Icon>
					歌手
				</p>
				<p style="color: #ccc;">|</p>
				<p class="flex items-center">
					<Icon icon="material-symbols:genres" color="red" style="margin-right: 5px;">
					</Icon>
					曲风
				</p>
				<p style="color: #ccc;">|</p>
				<p class="flex items-center">
					<Icon icon="entypo:note" color="red" style="margin-right: 5px;">
					</Icon>
					专区
				</p>
				<p style="color: #ccc;">|</p>
				<p class="flex items-center">
					<Icon icon="typcn:microphone" color="red" style="margin-right: 5px;">
					</Icon>
					识曲
				</p>
			</div>
			<div class="my-5">
				<p class="flex items-center justify-between">
					搜索历史
					<Icon icon="bi:trash">
					</Icon>
				</p>
			</div>
			<div class="my-5">
				<p class="flex items-center justify-between">
					猜你喜欢
					<button @click="searchIndex()">
						<Icon icon="iconoir:refresh">
						</Icon>
					</button>
				</p>
				<div class="flex flex-wrap mt-2">
					<p v-for="item in guessYouLike" :key="item.id2"
					class=" py-2 px-3 bg-white rounded-[20px] mr-3 mb-2">
						{{ item.searchWord }}
					</p>
				</div>

			</div>
			<div class=" overflow-auto">
				<div class="w-[750vw] h-[91vh] flex">
					<div v-for="(item, index) in res" :key="item.id" 
					class="w-[62vw] bg-white mr-8 rounded-xl p-5 overflow-auto" >
						<p class="" style="padding-bottom: 15px;border-bottom: 1px solid #ccc;">
							{{res[index].name}}
						</p>
						<p  v-for="(item, index) in res[index].tracks.slice(0,20)" :key="item.id3" class=" my-3 flex items-center" style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" >
							<span :class="index < 3 ? 'text-red-600 font-bold' : black" class=" mr-4">
								{{ index + 1 }}
							</span>
							<span :class="index < 3 ? 'font-[600]' : ''" class=" mr-2 " style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">
								{{ item.name }}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {fetchToplistDetail} from '../request/index'
import axios from 'axios';
export default {
	data() {
		return {
			menu: [],
			count: 0,
			numbers: [],
			guessYouLike: [],
			res:[]
		}
	},
	methods: {
		fetchPlaylists(cat) {
			axios
				.get(
					'https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail'
				)
				.then((res) => {
					this.menu = res.data.data
					this.searchIndex()
				});
		},
		searchIndex() {
			this.guessYouLike = []
			this.numbers = []
			for (var i = 0; i < 5; i++) {
				var random = Math.floor(Math.random() * 20);
				if (!this.numbers.includes(random)) {
					this.numbers.push(random);
				}
			}
			for (let i = 0; i < this.numbers.length; i++) {
				this.guessYouLike.push(this.menu[this.numbers[i]]);
			}
			return this.numbers
		}
	},
	async created() {
		this.res = await fetchToplistDetail()
		this.res = this.res.slice(0, 11);
		axios
			.get(
				'https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail'
			)
			.then(() => {
				this.fetchPlaylists();
			})
			.catch((err) => {
				console.log(err);
			});
	},
}

</script>

<style>
::-webkit-scrollbar{
    display: none;
}
</style>