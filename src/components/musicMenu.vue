<template>
	<div>
		<p class="text-2xl mb-3 flex items-center " style="font-size: 4vw">
			推荐歌单
			<Icon icon="ep:arrow-right-bold" width="15" />
		</p>
		<ul class="overflow-hidden rounded-lg">
			<div class="swiper-container2 h-[100%] w-[33%]">
				<div class="swiper-wrapper ">
					<div class="swiper-slide mr-[20px]">
						<div class="w-[119px] h-[167px] overflow-hidden relative">
							<p class="absolute" style="top: 10px; right: 10px; color: white">
								<Icon icon="ion:infinite" width="20" />
							</p>
							<transition name="abc">
								<div v-if="visible" class=" absolute top-0 left-0">
									<img alt=""
										src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg"
										style="border-radius: 10px; height: 119px; width: 119px" />
								</div>
							</transition>
							<transition name="abc">
								<div v-if="!visible" class=" absolute top-0 left-0">
									<img alt="" src="http://p2.music.126.net/pCk-zKisrYzpXpUcrK5G5w==/3399689964828104.jpg"
										style="border-radius: 10px; height: 119px; width: 119px" />
								</div>
							</transition>

							<div class=" absolute bottom-0">
								<transition name="fade" mode="out-in">
									<p v-if="visible" key="text1" class="h-[48px] overflow-hidden"
										style="font-size: 2.78vw;">
										那些好听的日漫主题曲
									</p>
									<p v-else key="text2" class="h-[48px] overflow-hidden" style="font-size: 2.78vw;">
										评论数最多的动漫音乐TOP100（长期更新）
									</p>
								</transition>
							</div>
						</div>
					</div>
					<div v-for="(item, index) in musicMenu" :key="item.id2" class="swiper-slide mr-4 relative cli"
						>
						<router-link :to="{ path: `/MusicMenu/${id[index]}` }">
							<img alt="" :src="item.uiElement.image.imageUrl"
								style="border-radius: 10px; height: 119px; width: 119px" />
							<p class="h-[48px] overflow-hidden" style="font-size: 2.78vw;">
								{{ item.uiElement.mainTitle.title }}
							</p>
							<p class="absolute" style="top: 10px; right: 10px; color: white;font-size: 2.78vw;">
								{{ Math.floor(item.resources[0].resourceExtInfo.playCount / 10000) }} 万
							</p>
						</router-link>
					</div>
				</div>
			</div>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: true,
			index: 0
		}
	},
	name: 'musicMenu',
	props: ["musicMenu", "id"],
	mounted() {
		setInterval(() => {
			this.visible = !this.visible
		}, 3000)
	},
};
</script>

<style scoped>
.abc-enter {
	transform: translateY(100%) scale(.7);
}

.abc-enter-active {
	transition: all ease-in-out 1s;
}

.abc-enter-to {
	transform: translateY(0) scale(1);
}

.abc-leave {
	transform: translateY(0) scale(1);
}

.abc-leave-active {
	transition: all ease-in-out 1s;
}

.abc-leave-to {
	transform: translateY(-100%) scale(.7);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>