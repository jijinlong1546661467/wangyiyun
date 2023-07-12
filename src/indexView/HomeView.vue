<template>
	<div :class="{ dark: switchCheckStatus }" style="background-color: rgb(241, 245, 249);">
		<div class="dark bg-slate-100 dark:bg-gray-900 text-[black] dark:text-slate-100 w-[100%] h-[100%]">
			<div class=" w-[92%] box-border" style="margin: 0 auto;">
				<!-- 搜索 -->
				<div class=" relative  mb-5 pt-5">
					<div>
						<button @click="drawerVisible = !drawerVisible, asd()" class="absolute z-10 ">
							<Icon icon="ic:sharp-menu" width="40"
								:color="`${switchCheckStatus ? 'bg-gray-900' : 'bg-slate-100'}`" />
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
						<musicMenu :musicMenu="subTitle" :id="id" />
						<button is-link @click="showPopup(), ert = top.blocks[1].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 8px;">
							<Icon icon="teenyicons:more-vertical-outline" width="15" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 新歌速递（新歌新碟） -->
				<div class="my-3 relative">
					<div>
						<newSongExpress :newSongExpress="newSubTitle" :introduce="introduce" />
						<button is-link @click="showPopup(), ert = top.blocks[5].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 8px;">
							<Icon icon="teenyicons:more-vertical-outline" width="15" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 排行榜 -->
				<div class="my-3 relative ">
					<div>
						<charts :charts="mainTitle" :switchCheckStatus="switchCheckStatus" />
						<button is-link @click="showPopup(), ert = top.blocks[3].uiElement.subTitle.title" class=" absolute"
							style="right: 0;top: 8px;">
							<Icon icon="teenyicons:more-vertical-outline" width="15" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 音乐日历 -->
				<div class="my-3 overflow-auto relative ">
					<div>
						<musicCalendar :rili="rili" :formattedDate="formattedDate" :switchCheckStatus="switchCheckStatus" />
						<button is-link @click="showPopup(), ert = '音乐日历'" class=" absolute" style="right: 0;top: 8px;">
							<Icon icon="teenyicons:more-vertical-outline" width="15" class=" ml-[200px]" />
						</button>
					</div>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<!-- 热门话题 -->
				<div class="my-3 relative">
					<p class="text-2xl my-3" style="font-size: 4vw">热门话题</p>
					<ul class="overflow-hidden swiper-container7 h-[100%] " style="border-radius: 20px;"
						:class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-[white]'}`">
						<div class=" swiper-wrapper ">
							<div class="swiper-slide flex p-[20px]" style="">
								<div class="w-[70%]">
									<p style="font-size: 4vw;">最令你感动的那首情歌</p>
									<p style="font-size: 2.6vw;color: #ccc;">484万热度</p>
									<p style="font-size: 2.6vw;">Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
								</div>
								<div class="w-[20%]">
									<img src="http://p1.music.126.net/NkJsOwDqLc2jeHIlCZlluQ==/109951168412701433.jpg"
										alt="" />
								</div>
							</div>
							<div class="swiper-slide flex p-[20px]">
								<div class="w-[70%]">
									<p style="font-size: 4vw;">
										最令你感动的那首情歌</p>
									<p style="font-size: 2.6vw;color: #ccc;">
										484万热度</p>
									<p style="font-size: 2.6vw;">
										Saint_Denis:今日份的感动我希望我们两个之间的爱</p>
								</div>
								<div class="w-[20%]">
									<img src="http://p1.music.126.net/QvkcPvcMIMYqBa20DCidjw==/109951168345809467.jpg"
										alt="" />
								</div>
							</div>
						</div>
					</ul>
					<button is-link @click="showPopup(), ert = '热门话题'" class=" absolute" style="right: 0;top: 0;">
						<Icon icon="teenyicons:more-vertical-outline" width="15" class=" ml-[200px]" />
					</button>
				</div>
				<hr class=" w-screen ml-[-15px]">

				<van-popup v-model="show" position="bottom" round closeable :style="{ height: '30%' }">
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
					<div class="w-[92%] h-[103vh]  " style="margin: 0 auto;">
						<header class="w-[76vw] h-[14vw] pt-[1vw] flex items-center fixed" style="top: 0;z-index: 255;"
							:class="`${this.switchCheckStatus ? 'bg-gray-900' : 'bg-slate-100'}`">
							<div class="w-[38.5vw] flex items-center">
								<img :src="headImg" alt="" class="w-[12vw] h-[12vw] rounded-[50%] bg-cover">
								<div v-if="(cookie !== undefined && cookie!== null)">
									<router-link :to="{ path: `/MyHome` }">
										<p class="text-[2vw] font-[700] ml-3 " style="display: inline;">
											{{ userName }}
										</p>
									</router-link>
								</div>
								<div v-else-if="(cookie == undefined || cookie== null)">
									<router-link :to="{ path: `/Login` }">
										<p class="text-[2vw] font-[700] ml-3 " style="display: inline;">
											前往登录
										</p>
									</router-link>
								</div>
							</div>

							<div class="flex w-[36.5vw] justify-between items-center">
								<icon icon="ant-design:right-outlined" width="15px" class=" inline-block "
									style="font-size: 4vw;" />
								<icon icon="tabler:scan" style="font-size: 8vw;" class="inline-block" />
							</div>

						</header>

						<div class=" mt-[17vw] rounded-[4vw] w-[70vw] h-[30vw] pt-[2vw] ml-[1.5vw]"
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
								<p class="flex items-center" style="font-size: 3.5vw;">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<Icon icon="ep:arrow-right" />
							</div>
						</div>

						<div class=" mt-5  p-3" style="border-radius: 10px;"
							:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="border-bottom: 1px solid #ccc;font-size: 3.5vw;" class=" py-2">音乐服务</p>
							<div class="flex  justify-between items-center text-[19px]  my-3" v-for="(item) in text.secound"
								:key="item.id2">
								<p class="flex items-center" style="font-size: 3.5vw;">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<div class="flex items-center" style="font-size: 3.5vw;">
									<p v-if="item[1] === '趣测'" style="font-size: 10px;">点击查看今日运势</p>
									<p v-if="item[1] === 'Beat专区'" style="font-size: 10px;">顶尖制作邀你创作</p>
									<p v-if="item[1] === '游戏专区'" style="font-size: 10px;">音乐浇灌治愈花园</p>
									<Icon icon="ep:arrow-right" />
								</div>

							</div>
						</div>

						<div class=" mt-5 p-3" style="border-radius: 10px;"
							:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="border-bottom: 1px solid #ccc; font-size: 3.5vw;" class=" py-2">其他</p>
							<div class="flex  justify-between items-center text-[19px] my-3" v-for="(item) in text.san"
								:key="item.id2">
								<p class="flex items-center" style="font-size: 3.5vw;">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<v-switch v-model="switchCheckStatus" v-if="item[1] === '深色模式'"
									style="margin-left: 105px;" />
								<div class="flex items-end">
									<p v-if="item[1] === '边听边存' || item[1] === '青少年模式'" style="font-size: 10px;">未开启</p>
									<Icon v-if="item[1] != '深色模式'" icon="ep:arrow-right" />
								</div>
							</div>
						</div>
						<div class=" mt-5  p-3" style="border-radius: 10px;"
							:class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<div class="flex  justify-between items-center text-[19px] my-3" v-for="(item) in text.shi"
								:key="item.id2">
								<p class="flex items-center" style="font-size: 3.5vw;">
									<Icon :icon="item[0]" class=" mr-3" />
									{{ item[1] }}
								</p>
								<Icon icon="ep:arrow-right" />
							</div>
						</div>

						<div class=" mt-5 mb-5  p-4 h-[70px] text-center leading-[40px]" style="border-radius: 10px;"
							@click="cleanCookie" :class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-[white]'}`">
							<p style="color: red;font-size: 3.5vw;">退出登录/关闭</p>
						</div>
					</div>
				</Drawer>
			</div>
		</div>
	</div>
</template>

<script>

//引入axios方法获取用户详情
import { logout, fetchHomeData, loginStatus } from '@/request'

import store from 'storejs';
import axios from 'axios';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import indexmenu from '@/components/Menu';
import banner from '@/components/banner.vue';
import search from '@/components/search.vue';
import musicMenu from '@/components/musicMenu.vue'
import newSongExpress from '@/components/newSongExpress.vue'
import charts from '@/components/charts.vue'
import musicCalendar from '@/components/musicCalendar.vue'
import Switch from '@/components/Switch';
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
			//深色模式
			switchCheckStatus: false,
			top: [],
			//推荐歌单的ID值
			id: [],
			//用户名
			userName: '前往登录',
			//头像
			headImg: '',
			cookie: store.get('__m__cookie'),
		};
	},
	methods: {		
		//退出登录，清除cookie
		cleanCookie() {
			logout()
			// document.cookie = "__m__cookie=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";
		},
		showPopup() {
			this.show = true;
		},

		asd() {
			document.documentElement.style.overflow = `hidden`
		},

		//获取当天的时间戳
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

		//获取推荐歌单的id
		changeID() {
			this.id = []
			for (let i = 0; i < this.subTitle.length; i++) {
				this.id.push(parseInt(this.subTitle[i].creativeId))
			}
		},

		//定义swiper
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
				touchMoveStopPropagation: false,
				slidesPerView: 5,
				freeMode: true,
			});
			new Swiper(`.swiper-container2`, {
				touchMoveStopPropagation: false,
				freeMode: true,
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
		//更新swiper防止滚不动
		this.$nextTick(() => {
			this.getswiper();
		});
	},
	async created() {

		const loginStatu = await loginStatus()
		//获取登录后的用户名
		this.userName = loginStatu.data.data.profile.nickname
		//头像
		this.headImg = loginStatu.data.data.profile.avatarUrl
		//获取当天的时间戳
		this.date();
		//异步获取登录后的数据
		const res = await fetchHomeData()
		//轮播数据
		this.piclists = res.data.data.blocks[0].extInfo.banners;
		//推荐歌单数据
		this.subTitle = res.data.data.blocks[1].creatives;
		//新歌速递数据
		this.newSubTitle = res.data.data.blocks[2].creatives;
		//排行榜数据
		this.mainTitle = res.data.data.blocks[3].creatives;
		//音乐日历数据
		this.top = res.data.data
		//获取推荐歌单的id
		this.changeID()
		await axios
			.get(
				`https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=${this.startOfDayTimestamp}&endTime=${this.endOfDayTimestamp}`
			)
			.then((res) => {
				this.rili = res.data.data.calendarEvents;
			});
	},
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

html {
	overflow: auto;
}

body {
	max-width: 390px;

}
</style>