<template>
	<div class="w-[92%] bg" style="margin: 12px auto">
		<!-- 搜索 -->
		<div class="mb-3">
			<Icon icon="ic:sharp-menu" color="black" width="40" class="inline-block" />
			<input type="text" name="" id="" placeholder="薛之谦 最近很火哦"
				class="w-[74%] rounded-3xl pl-20 h-[40px] bg-gradient-to-r from-[#dddbfb] to-pink-500"
				style="border: 1px solid #ccc" />
			<Icon icon="ri:netease-cloud-music-fill" color="black" width="40" class="inline-block" />
		</div>

		<!-- 轮播 -->
		<ul>
			<div class="swiper-container h-[100%]">
				<div class="swiper-wrapper">
					<div v-for="item in piclists" :key="item.id" class="swiper-slide">
						<img alt="" :src="item.pic" style="border-radius: 30px;" />
					</div>
				</div>
				<div class="swiper-pagination" style="left: -90px;"></div>
			</div>
		</ul>

		<!-- 菜单 -->
		<div>
			<ul class="flex justify-between text-center mt-5">
				<li v-for="item in menu" :key="item.id1">
					<Icon :icon="item[0]" color="red" width="30" class="inline-block mb-2" />
					<p>{{item[1]}}</p>
				</li>
			</ul>
		</div>

		<!-- 推荐歌单 -->
		<div class="mt-5">
			<p class="text-2xl mb-3">推荐歌单 ></p>
			<ul class="overflow-hidden">
				<div class="swiper-container2 h-[100%] w-[33%]">
					<div class="swiper-wrapper">
						<div v-for="item in subTitle" :key="item.id2" class="swiper-slide mr-4 relative">
							<img alt="" :src="item.uiElement.image.imageUrl" style="border-radius: 30px;" />
							<p class="h-[48px] overflow-hidden">{{item.uiElement.mainTitle.title}}</p>
							<p class="absolute" style="top: 10px;right: 10px;color:white;">
								{{item.resources[0].resourceExtInfo.playCount}}</p>
						</div>
					</div>
					<div class="swiper-pagination" style="left: -90px;"></div>
				</div>
			</ul>
		</div>

		<!-- 新歌速递（新歌新碟） -->
		<div class="my-3">
			<p class="text-2xl mb-3">新歌速递 ></p>
			<ul class="overflow-hidden">
				<div class="swiper-container3 h-[100%] ">
					<div class="swiper-wrapper" style="width: 101% !important;">
						<div v-for="item in newSubTitle" :key="item.id3" class="swiper-slide flex flex-wrap">
							<div class="flex mb-4">
								<div class="w-[20%] mr-2">
									<img alt="" :src="item.resources[0].uiElement.image.imageUrl" style="border-radius: 10px;" />
								</div>
								<div class="w-[70%] flex" style="align-content: space-around;flex-wrap: wrap;">
									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[0].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
										<span class="text-[10px]"
											style="color: red;background-color: #efe6e4;padding: 3px;border-radius: 2px;">{{introduce[0]}}</span>
										{{item.resources[0].uiElement.subTitle.title}}
										-
										{{item.resources[0].resourceExtInfo.artists[0].name}}
									</p>
								</div>
							</div>
							<div class="flex mb-4">
								<div class="w-[20%] mr-2">
									<img alt="" :src="item.resources[1].uiElement.image.imageUrl" style="border-radius: 10px;" />
								</div>
								<div class="w-[70%] flex" style="align-content: space-around;flex-wrap: wrap;">

									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[1].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
										<span class="text-[10px]"
											style="color: #e8d59a;border: 1px solid #e8d59a;border-radius: 2px;padding: 2px;">{{introduce[1]}}</span>
										{{item.resources[1].uiElement.subTitle.title}}
										-
										{{item.resources[1].resourceExtInfo.artists[0].name}}
									</p>
								</div>
							</div>
							<div class="flex mb-4">
								<div class="w-[20%] mr-2">
									<img alt="" :src="item.resources[2].uiElement.image.imageUrl" style="border-radius: 10px;" />
								</div>
								<div class="w-[70%] flex" style="align-content: space-around;flex-wrap: wrap;">

									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[2].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
										<span class="text-[10px]"
											style="color: #e8d59a;border: 1px solid #e8d59a;border-radius: 2px;padding: 2px;">{{introduce[2]}}</span>
										{{item.resources[2].uiElement.subTitle.title}}
										-
										{{item.resources[2].resourceExtInfo.artists[0].name}}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-pagination" style="left: -90px;"></div>
				</div>
			</ul>
		</div>

		<!-- 排行榜 -->
		<div class="my-3">
			<p class="text-2xl mb-3">排行榜 ></p>
			<ul class="overflow-hidden " style="border-radius: 20px;">
				<div class="swiper-container4 h-[100%] ">
					<div class="swiper-wrapper" style="width: 101% !important;">
						<div v-for="item in mainTitle" :key="item.id4" class="swiper-slide flex flex-wrap bg-white overflow-hidden">
							<div class=" w-[100%] mt-4 ml-4 mb-4">
								<span class="font-bold text-[20px] mr-24">{{item.uiElement.mainTitle.title}}></span>
								<span class="text-[15px]">{{item.uiElement.mainTitle.titleDesc}}</span>
							</div>
							<div class="flex mb-4 bg-white ml-4 relative">
								<div class=" overflow-hidden mr-2">

									<img alt="" :src="item.resources[0].uiElement.image.imageUrl"
										style="border-radius: 10px; width: 80px;height: 80px;" />
									<p class="absolute"
										style="font-weight: 900; font-size: 25px; color: rgb(190, 156, 52); top: 23px; left: 85px;">1</p>
								</div>
								<div class="w-[70%] flex ml-4" style="align-content: space-around;flex-wrap: wrap;">
									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[0].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; ">
										{{item.resources[0].resourceExtInfo
										?.songData.artists[0].name}}
									</p>
								</div>
							</div>
							<div class="flex mb-4 bg-white ml-4">
								<div class=" overflow-hidden mr-2">
									<img alt="" :src="item.resources[1].uiElement.image.imageUrl"
										style="border-radius: 10px; width: 80px;height: 80px;" />
								</div>
								<div class="w-[70%] flex ml-4" style="align-content: space-around;flex-wrap: wrap;">
									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[1].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
										{{item.resources[1].resourceExtInfo?.songData.artists[0].name}}
									</p>
								</div>
							</div>
							<div class="flex mb-4 bg-white ml-4">
								<div class=" overflow-hidden mr-2">
									<img alt="" :src="item.resources[2].uiElement.image.imageUrl"
										style="border-radius: 10px; width: 80px;height: 80px;" />
								</div>
								<div class="w-[70%] flex ml-4" style="align-content: space-around;flex-wrap: wrap;">
									<p style="line-height: 30px;" class="font-bold w-screen">
										{{item.resources[2].uiElement.mainTitle.title}}</p>
									<p style="line-height: 30px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
										{{item.resources[2].resourceExtInfo
										?.songData.artists[0].name}}
									</p>
								</div>
							</div>



						</div>
					</div>
					<div class="swiper-pagination" style="left: -90px;"></div>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Swiper from 'swiper'
	import '../node_modules/swiper/css/swiper.css'
	export default {
		data() {
			return {
				menu: [
					['ion:calendar-number',
						'每日推荐',],
					['material-symbols:radio',
						'私人漫游',],
					['solar:playlist-minimalistic-2-outline',
						'歌单',],
					['icon-park-outline:ranking',
						'排行榜',],
					['ion:calendar-number',
						'召回有礼',]
				],
				introduce: [
					'超71%人播放',
					'沉浸声',
					'HI-Res'
				],
				activeMenuItem: '',
				piclists: [],
				subTitle: [],
				newSubTitle: [],
				mainTitle: [],
				swiper: null,
				swiper2: null,
				swiper3: null,
				swiper4: null
			};
		},
		methods: {
			fetchPlaylists(cat) {
				axios
					.get(
						'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
					)
					.then((res) => {
						this.piclists = res.data.data.blocks[0].extInfo.banners;
						this.subTitle = res.data.data.blocks[1].creatives
						this.newSubTitle = res.data.data.blocks[5].creatives
						this.mainTitle = res.data.data.blocks[3].creatives

						console.log(this.mainTitle)
						this.swiper.update();
						this.swiper2.update();
						this.swiper3.update()
						this.swiper4.update()
					});
			},
		},
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},

				spaceBetween: 30,
				centeredSlides: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
			this.swiper2 = new Swiper('.swiper-container2', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
			})
			this.swiper3 = new Swiper('.swiper-container3', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
			})
			this.swiper4 = new Swiper('.swiper-container4', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
			})
		},
		created() {
			axios
				.get(
					'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
				)
				.then(() => {
					this.fetchPlaylists();
				})
				.catch((err) => {
					console.log(err);
				});
		},
	};
</script>

<style>
	html {
		background-color: rgb(241, 245, 249);
	}
</style>