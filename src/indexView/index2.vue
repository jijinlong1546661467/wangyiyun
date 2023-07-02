<template>
	<div :class="{ dark: switchCheckStatus }">
		<div class="dark bg-slate-100 dark:bg-gray-900 text-[black] dark:text-slate-100 w-[100%] h-[100%]">
			<div class="w-[92%] " style="margin: 0 auto;padding-top: 12px;" >
				<!-- 搜索 -->
				<div class=" relative">
					<div>
						<button @click="drawerVisible = !drawerVisible, asd()" class="absolute z-10 " >
							<Icon icon="ic:sharp-menu" width="40" :color="`${switchCheckStatus ? 'bg-gray-900' : 'bg-slate-100'}`"/>
						</button>
						<search class="mb-3" :switchCheckStatus="switchCheckStatus" />
					</div>
				</div>

				<!-- 轮播 -->
				<div>
					<div>
						<banner class="swiper-container h-[100%]" :banner="piclists" />
					</div>
				</div>

				<!-- 菜单 -->
				<div class="my-3 ">
					<div class=" swiper-container6 overflow-hidden">
						<indexmenu style="transform: translateX(0px) !important;"
							class="flex justify-between text-center mt-5 swiper-wrapper " :menu="menu2" />
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 推荐歌单 -->
				<div class="my-3 relative">
					<div>
						<musicMenu :musicMenu="subTitle" />
						<button is-link @click="showPopup(), ert = top.blocks[1].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 0;">
							<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 新歌速递（新歌新碟） -->
				<div class="my-3 relative">
					<div>
						<newSongExpress :newSongExpress="newSubTitle" :introduce="introduce" />
						<button is-link @click="showPopup(), ert = top.blocks[5].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 0;">
							<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 排行榜 -->
				<div class="my-3 relative ">
					<div>
						<charts :charts="mainTitle" :switchCheckStatus="switchCheckStatus"/>
						<button is-link @click="showPopup(), ert = top.blocks[3].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 0;">
							<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 音乐日历 -->
				<div class="my-3 overflow-auto relative ">
					<div>
						<musicCalendar :rili="rili" :formattedDate="formattedDate" :switchCheckStatus="switchCheckStatus" />
						<button is-link @click="showPopup(), ert = '音乐日历'" class=" absolute" style="right: 0;top: 0;">
							<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 热门话题 -->
				<div class="my-3 relative">
					<p class="text-2xl my-3">热门话题</p>
					<ul class="overflow-hidden swiper-container7 h-[100%] " style="border-radius: 20px"
					:class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`">
						<div class="p-[20px] swiper-wrapper "
						>
							<div class="swiper-slide flex">
								<div class="w-[70%]">
									<p>最令你感动的那首情歌</p>
									<p>484万热度</p>
									<p>Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
								</div>
								<div class="w-[20%]">
									<img src="http://p1.music.126.net/NkJsOwDqLc2jeHIlCZlluQ==/109951168412701433.jpg"
										alt="" />
								</div>
							</div>
							<div class="swiper-slide flex">
								<div class="w-[70%]">
									<p>最令你感动的那首情歌</p>
									<p>484万热度</p>
									<p>Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
								</div>
								<div class="w-[20%]">
									<img src="http://p1.music.126.net/QvkcPvcMIMYqBa20DCidjw==/109951168345809467.jpg"
										alt="" />
								</div>
							</div>
						</div>
					</ul>
					<button is-link @click="showPopup(), ert = '热门话题'" class=" absolute" style="right: 0;top: 0;">
						<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
					</button>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<van-popup v-model="show" position="bottom" round closeable :style="{ height: '25%' }">
					<div class="flex justify-between items-center border-b-[0.2vw] py-3 pl-5">
						<p>{{ ert }}</p>
					</div>
					<div class="flex items-center mt-2 ml-3 text-[20px]">
						<Icon icon="iconamoon:like-bold" color="#000" width="6vw" height="6vw" />
						<p class="ml-3">优先推荐</p>
					</div>
					<div class="flex items-center mt-5 ml-3 text-[20px]">
						<Icon icon="basil:heart-off-outline" color="#000" width="6vw" height="6vw" />
						<p class="ml-3">减少推荐</p>
					</div>
					<div class="flex items-center mt-5 ml-3 text-[20px]">
						<Icon icon="mingcute:more-4-line" color="#000" width="6vw" height="6vw" />
						<p class="ml-3">更多内容</p>
					</div>
				</van-popup>

				<Drawer :visible.sync="drawerVisible" direction="ltr" :switchCheckStatus="switchCheckStatus">
					<div class="w-[92%] h-[101vh] overflow-auto " style="margin: 0 auto;">
						<header class="w-[80vw] h-[14vw] pt-[1vw] flex">
							<img src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg" alt=""
								class="w-[12vw] h-[12vw] rounded-[50%] bg-cover">
							<p class="text-[6vw] font-[700] ml-[3vw] w-[15vw]" style="line-height:14vw ">
								箫默
							</p>
							<icon icon="ant-design:right-outlined" class="w-[8vw] h-[8vw] inline-block mt-[3vw] ml-[2vw]" />
							<icon icon="tabler:scan" class="w-[10vw] h-[10vw] inline-block  ml-[23vw] mt-[2vw] " />
						</header>

						<div class=" mt-[6vw] rounded-[4vw] w-[70vw] h-[30vw] pt-[2vw] ml-[2.5vw]"
							style="background: rgb(60,58,56);background: linear-gradient(90deg, rgba(60,58,56,1) 0%, rgba(95,81,78,1) 100%);">
							<p class="h-[6vw] text-[#f9e7de] font-[700] text-[4vw] indent-[1em]">
								续费黑胶Vip
								<span class="h-[2vw] w-[10vw] rounded-[1vw] bg-[#000000] inline-block relative ml-[2vw]">
									<span class="h-[2vw] w-[7vw] rounded-[1vw] bg-[balck] inline-block absolute left-0"
										style="background: rgb(227,195,191);background: linear-gradient(90deg, rgba(227,195,191,1) 0%, rgba(255,255,255,1) 100%);">
									</span>
								</span>
								<span class="h-[2vw] w-[10vw] rounded-[1vw] inline-block text-[#7b706f]">4v</span>
								<span
									class=" h-[6vw]  border-[0.5vw]  px-2 rounded-[3vw] text-[2vw] inline-block text-center indent-0 leading-[6vw]"
									style=" border: #aa9793 solid 0.25vw;">
									会员中心
								</span>
							</p>
							<div>
								<p class="text-[3vw] text-[#9a958d] ml-[5vw] mt-[3vw]">
									礼品卡&nbsp;&nbsp;|&nbsp;&nbsp;毕业快乐
								</p>
							</div>

							<div class="text-[3vw] text-[#9a958d] ml-[5vw] mt-[3vw] h-[11vw] w-[60vw] relative leading-[11vw]"
								style="border-top: 1px solid #aa9793;">
								受邀专享,黑胶vip低至0.27元/天!
								<div class="h-[8vw] w-[8vw] bg-[#d94e0e] rounded-[1vw] text-[2vw] text-[#fff8dc] font-[700] leading-[0vw] flex flex-wrap content-around justify-around absolute"
									style="left: 52vw;top: 1vw;">
									<span>受邀</span>
									<span>专享</span>
								</div>
							</div>
						</div>

						<div class=" mt-5  p-3 " style="border-radius: 10px;"
						:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<div class="flex  justify-between items-center text-[19px] my-3" v-for="(item) in text.first"
								:key="item.id2">
								<p class="flex items-center">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<Icon icon="ep:arrow-right" />
							</div>
						</div>

						<div class=" mt-5  p-3" style="border-radius: 10px;"
						:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="border-bottom: 1px solid #ccc;" class=" py-2">音乐服务</p>
							<div class="flex  justify-between items-center text-[19px]  my-3" v-for="(item) in text.secound"
								:key="item.id2">
								<p class="flex items-center">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<div class="flex items-end">
									<p v-if="item[1] === '趣测'" style="font-size: 10px;">点击查看今日运势</p>
									<p v-if="item[1] === 'Beat专区'" style="font-size: 10px;">顶尖制作邀你创作</p>
									<p v-if="item[1] === '游戏专区'" style="font-size: 10px;">音乐浇灌治愈花园</p>
									<Icon icon="ep:arrow-right" />
								</div>
								
							</div>
						</div>

						<div class=" mt-5 p-3" style="border-radius: 10px;"
						:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="border-bottom: 1px solid #ccc;" class=" py-2">其他</p>
							<div class="flex  justify-between items-center text-[19px] my-3" v-for="(item) in text.san"
								:key="item.id2">

								<p class="flex items-center">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<v-switch v-model="switchCheckStatus" v-if="item[1] === '深色模式'" />
								<div class="flex items-end">
									<p v-if="item[1] === '边听边存' || item[1] === '青少年模式'" style="font-size: 10px;">未开启</p>
									<Icon icon="ep:arrow-right" />
								</div>
							</div>
						</div>

						<div class=" mt-5  p-3" style="border-radius: 10px;"
						:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<div class="flex  justify-between items-center text-[19px] my-3" v-for="(item) in text.shi"
								:key="item.id2">
								<p class="flex items-center">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<Icon icon="ep:arrow-right" />
							</div>
						</div>

						<div class=" mt-5 mb-5  p-4 h-[70px] text-center leading-[40px]"
							style="border-radius: 10px;"
							:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="color: red;font-size: 20px;">退出登录/关闭</p>
						</div>
					</div>
				</Drawer>

			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import '../../node_modules/vant/lib/index.css'


import indexmenu from './menu.vue';
import banner from './banner.vue';
import search from './search.vue';
import musicMenu from './musicMenu.vue'
import newSongExpress from './newSongExpress.vue'
import charts from './charts.vue'
import musicCalendar from './musicCalendar.vue'
import Switch from '@/components/Switch.vue';
export default {
	components: {
		indexmenu,
		banner,
		search,
		musicMenu,
		newSongExpress,
		charts,
		musicCalendar,
		Switch
	},
	data() {
		return {
			text: {
				first: [
					['mdi:email-outline', '我的消息'],
					['iconamoon:cloud-thin', '云贝中心'],
					['ic:outline-lightbulb', '创作者中心'],
				],
				secound: [
					['file-icons:test-react', '趣测'],
					['ion:ticket-outline', '云村有票'],
					['tabler:brand-pocket', '多多西西口袋'],
					['material-symbols:local-mall-outline-rounded', '商城'],
					['simple-icons:beats', 'Beat专区'],
					['ri:bell-line', '口袋彩铃'],
					['icon-park-outline:game-three', '游戏专区']
				],
				san: [
					['arcticons:set-edit', '设置'],
					['circum:dark', '深色模式'],
					['ri:time-line', '定时关闭'],
					['icon-park-outline:clothes-crew-neck', '个性装扮'],
					['ic:twotone-headset', '边听边存'],
					['icon-park-outline:online-meeting', '在线听歌免流量'],
					['arcticons:callsblacklist', '音乐黑名单'],
					['el:ok-circle', '青少年模式'],
					['iconoir:clock', '音乐闹钟'],
				],
				shi: [
					['icon-park-outline:transaction-order', '我的订单'],
					['mdi:coupon-outline', '优惠券'],
					['mdi:customer-service', '我的客服'],
					['ph:share-fill', '分享网易云音乐'],
					['streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard', '个人信息收集与使用清单'],
					['uiw:information-o', '个人信息第三方共享清单'],
					['uiw:information-o', '个人信息与隐私保护'],
					['uiw:information-o', '关于'],
				]
			},

			menu2: [
				['ion:calendar-number', '每日推荐'],
				['material-symbols:radio', '私人漫游'],
				['solar:playlist-minimalistic-2-outline', '歌单'],
				['icon-park-outline:ranking', '排行榜'],
				['ion:calendar-number', '召回有礼'],
				['ion:calendar-number', '每日推荐'],
				['material-symbols:radio', '私人漫游'],
				['solar:playlist-minimalistic-2-outline', '歌单'],
				['icon-park-outline:ranking', '排行榜'],
				['ion:calendar-number', '召回有礼'],
			],
			startOfDayTimestamp: null,
			endOfDayTimestamp: null,
			introduce: ['超71%人播放', '沉浸声', 'HI-Res'],
			activeMenuItem: '',
			auto: true,
			piclists: [],
			subTitle: [],
			newSubTitle: [],
			mainTitle: [],
			rili: [],
			formattedDate: '',
			drawerVisible: false,
			visible: true,
			show: false,
			ert: null,
			switchCheckStatus: false,
			top: []
		};
	},
	methods: {
		showPopup() {
			this.show = true;
		},
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
					this.top = res.data.data
					console.log(this.top)
				});
			axios
				.get(
					`https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=${this.startOfDayTimestamp}&endTime=${this.endOfDayTimestamp}`
				)
				.then((res) => {
					this.rili = res.data.data.calendarEvents;
				});
		},
		asd() {
			document.documentElement.style.overflow = `hidden`
		},
		date() {
			const date = new Date();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			this.formattedDate = `${month}/${day}`;

			// 获取当天的开始时间
			const startOfDay = new Date();
			startOfDay.setHours(0, 0, 0, 0);
			this.startOfDayTimestamp = startOfDay.getTime();

			// 获取当天的结束时间
			const endOfDay = new Date();
			endOfDay.setHours(23, 59, 59, 999);
			this.endOfDayTimestamp = endOfDay.getTime();
		},

		getswiper() {
			new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				touchMoveStopPropagation: false,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
			});
			new Swiper(`.swiper-container6`, {
				slidesPerView: 5,
				freeMode: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				}
			});
			new Swiper(`.swiper-container2`, {
				// slidesPerView: 3,
				freeMode: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				}
			});
			new Swiper(`.swiper-container7`, {
				spaceBetween: 30,
				touchMoveStopPropagation: false,
			});
			for (let i = 3; i < 5; i++) {
				new Swiper(`.swiper-container${i}`, {
					spaceBetween: 30,
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
		this.date();
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
				`https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=${this.startOfDayTimestamp}&endTime=${this.endOfDayTimestamp}`
			)
			.then(() => {
				this.fetchPlaylists();
			});
	},
};
</script>

<style>
html {
	overflow: auto;
}

body {
	max-width: 390px;
	background-color: rgb(241, 245, 249);
}</style>