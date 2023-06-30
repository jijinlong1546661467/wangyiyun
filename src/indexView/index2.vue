<template>
	<div class="w-[92%] bg" style="margin: 12px auto">
		<!-- 搜索 -->
		<div class=" relative">
			<div>
				<button @click="drawerVisible = !drawerVisible" class="absolute z-10">
					<Icon icon="ic:sharp-menu" color="black" width="40" />
				</button>
				<search class="mb-3" />
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
		<div class="mt-5 relative">
			<div>
				<musicMenu :musicMenu="subTitle" />
				<!-- <button @click="drawerVisible2 = !drawerVisible2">
					<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
				</button> -->
			</div>
		</div>

		<!-- 新歌速递（新歌新碟） -->
		<div class="my-3">
			<div>
				<newSongExpress :newSongExpress="newSubTitle" :introduce="introduce" />
			</div>
		</div>

		<!-- 排行榜 -->
		<div class="my-3">
			<div>
				<charts :charts="mainTitle" />
			</div>

		</div>

		<!-- 音乐日历 -->
		<div>
			<div>
				<musicCalendar :rili="rili" :formattedDate="formattedDate" />
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


		<Drawer :visible.sync="drawerVisible" direction="ltr">
			<div class="w-[92%]" style="margin: 0 auto;">
				<header class="w-[80vw] h-[14vw] pt-[1vw] flex">
					<img src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg" alt=""
						class="w-[12vw] h-[12vw] rounded-[50%] bg-cover">
					<p class="text-[6vw] font-[700] ml-[3vw] w-[15vw]" style="line-height:14vw ">箫默</p>
					<icon icon="ant-design:right-outlined" class="w-[8vw] h-[8vw] inline-block mt-[3vw] ml-[2vw]" />
					<icon icon="tabler:scan" class="w-[10vw] h-[10vw] inline-block  ml-[23vw] mt-[2vw] " />
				</header>

				<div class=" mt-[6vw] rounded-[4vw] w-[70vw] h-[30vw] " style="background: rgb(60,58,56);
background: linear-gradient(90deg, rgba(60,58,56,1) 0%, rgba(95,81,78,1) 100%);">

				</div>

				<div class=" mt-5 bg-white p-3 " style="border-radius: 10px;">
					<div class="flex  justify-between items-center text-[20px] my-2" v-for="(item) in text.first" :key="item.id2">
						<p class="flex items-center">
							<Icon :icon="item[0]" class=" mr-3" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" />
					</div>
				</div>

				<div class=" mt-5 bg-white p-3" style="border-radius: 10px;">
					<p style="border-bottom: 1px solid #ccc;" class=" py-2">音乐服务</p>
					<div class="flex  justify-between items-center text-[20px] my-2" v-for="(item) in text.secound" :key="item.id2">
						<p class="flex items-center">
							<Icon :icon="item[0]" class=" mr-3" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" />
					</div>
				</div>

				<div class=" mt-5 bg-white p-3" style="border-radius: 10px;">
					<p style="border-bottom: 1px solid #ccc;" class=" py-2">其他</p>
					<div class="flex  justify-between items-center text-[20px] my-2" v-for="(item) in text.san" :key="item.id2">
						<p class="flex items-center">
							<Icon :icon="item[0]" class=" mr-3" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" />
					</div>
				</div>

				<div class=" mt-5 bg-white p-3" style="border-radius: 10px;">
					<div class="flex  justify-between items-center text-[20px] my-2" v-for="(item) in text.shi" :key="item.id2">
						<p class="flex items-center">
							<Icon :icon="item[0]" class=" mr-3" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" />
					</div>
				</div>
			</div>

		</Drawer>

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
			text: {
				first: [
					['mdi:email-outline', '我的消息'],
					['iconamoon:cloud-thin', '云贝中心'],
					['ic:outline-lightbulb', '创作者中心'],
				],
				secound:[
					['file-icons:test-react','趣测'],
					['ion:ticket-outline','云村有票'],
					['tabler:brand-pocket','多多西西口袋'],
					['material-symbols:local-mall-outline-rounded','商城'],
					['simple-icons:beats','Beat专区'],
					['ri:bell-line','口袋彩铃'],
					['icon-park-outline:game-three','游戏专区']
				],
				san:[
					['arcticons:set-edit','设置'],
					['circum:dark','涤色模式'],
					['ri:time-line','定时关闭'],
					['icon-park-outline:clothes-crew-neck','个性装扮'],
					['ic:twotone-headset','边听边存'],
					['icon-park-outline:online-meeting','在线听歌免流量'],
					['arcticons:callsblacklist','音乐黑名单'],
					['el:ok-circle','青少年模式'],
					['iconoir:clock','音乐闹钟'],
				],
				shi:[
					['icon-park-outline:transaction-order','我的订单'],
					['mdi:coupon-outline','优惠券'],
					['mdi:customer-service','我的客服'],
					['ph:share-fill','分享网易云音乐'],
					['streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard','个人信息收集与使用清单'],
					['uiw:information-o','个人信息第三方共享清单'],
					['uiw:information-o','个人信息与隐私保护'],
					['uiw:information-o','关于'],

				]
			},

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
			drawerVisible: true,
			visible: true,
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
	async created() {
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