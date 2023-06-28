<template>
	<div class="w-[92%] bg" style="margin: 12px auto">
		<!-- 搜索 -->
		<div>
			<div>
				<search class="mb-3"/>
			</div>
		</div>

		<!-- 轮播 -->
		<div>
			<div>
				<banner class="swiper-container h-[100%]" :banner="piclists" />
			</div>
		</div>

		<!-- 菜单 -->
		<div>
			<div>
				<indexmenu class="flex justify-between text-center mt-5" :menu="menu2" />
			</div>
		</div>

		<!-- 推荐歌单 -->
		<div class="mt-5">
			<div>
				<musicMenu :musicMenu="subTitle"/>
			</div>
		</div>

		<!-- 新歌速递（新歌新碟） -->
		<div class="my-3">
			<div>
				<newSongExpress :newSongExpress="newSubTitle" :introduce="introduce"/>
			</div>
		</div>

		<!-- 排行榜 -->
		<div class="my-3">
			<div>
				<charts :charts="mainTitle"/>
			</div>
			
		</div>

		<!-- 音乐日历 -->
		<div>
			<div>
				<musicCalendar :rili="rili" :formattedDate="formattedDate"/>
			</div>
		</div>

		<!-- 热门话题 -->
		<div>
			<p class="text-2xl my-4">热门话题</p>
			<ul class="overflow-hidden swiper-container5 h-[100%] bg-white" style="border-radius: 20px">
				<div class="p-[20px] swiper-wrapper bg-white">
					<div class="swiper-slide flex">
						<div class="w-[70%]">
							<p>最令你感动的那首情歌</p>
							<p>484万热度</p>
							<p>Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
						</div>
						<div class="w-[20%]">
							<img src="http://p1.music.126.net/NkJsOwDqLc2jeHIlCZlluQ==/109951168412701433.jpg" alt="" />
						</div>
					</div>
					<div class="swiper-slide flex">
						<div class="w-[70%]">
							<p>最令你感动的那首情歌</p>
							<p>484万热度</p>
							<p>Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
						</div>
						<div class="w-[20%]">
							<img src="http://p1.music.126.net/QvkcPvcMIMYqBa20DCidjw==/109951168345809467.jpg" alt="" />
						</div>
					</div>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Swiper from 'swiper';
	import '../../node_modules/swiper/css/swiper.css';


	import indexmenu from './menu.vue';
	import banner from './banner.vue';
	import search from './search.vue';
	import musicMenu from './musicMenu.vue'
	import newSongExpress from './newSongExpress.vue'
	import charts from './charts.vue'
	import musicCalendar from './musicCalendar.vue'
	export default {
		components: {
			indexmenu,
			banner,
			search,
			musicMenu,
			newSongExpress,
			charts,
			musicCalendar
		},
		data() {
			return {
				menu2: [
					['ion:calendar-number', '每日推荐'],
					['material-symbols:radio', '私人漫游'],
					['solar:playlist-minimalistic-2-outline', '歌单'],
					['icon-park-outline:ranking', '排行榜'],
					['ion:calendar-number', '召回有礼'],
				],
				introduce: ['超71%人播放', '沉浸声', 'HI-Res'],
				activeMenuItem: '',
				piclists: [],
				subTitle: [],
				newSubTitle: [],
				mainTitle: [],
				rili: [],
				formattedDate: '',
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
						this.subTitle = res.data.data.blocks[1].creatives;
						this.newSubTitle = res.data.data.blocks[5].creatives;
						this.mainTitle = res.data.data.blocks[3].creatives;
					});
				axios
					.get(
						'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
					)
					.then((res) => {
						this.rili = res.data.data.calendarEvents;
						this.date();
						console.log(this.rili);
					});
			},
			date() {
				const date = new Date();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				this.formattedDate = `${month}/${day}`;
			},

			getswiper() {
				new Swiper('.swiper-container', {
					paginationClickable: true,
					touchMoveStopPropagation: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
				});
				for (let i = 2; i < 6; i++) {
					new Swiper(`.swiper-container${i}`, {
						paginationClickable: true,
						touchMoveStopPropagation: false,
					});
				}
			},
		},
		updated() {
			this.$nextTick(() => {
				this.getswiper();
			});
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

			axios
				.get(
					'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
				)
				.then(() => {
					this.fetchPlaylists();
				});
		},
	};
</script>

<style>
	html {
		background-color: rgb(241, 245, 249);
	}
</style>