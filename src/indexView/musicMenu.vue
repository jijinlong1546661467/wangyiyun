<template>
	<div>
		<p class="text-2xl mb-3 flex items-center">
			推荐歌单
			<Icon icon="ep:arrow-right-bold" width="20" />
			<!-- <Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" /> -->
		</p>
		<ul class="overflow-hidden rounded-lg">
			<div class="swiper-container2 h-[100%] w-[33%]">
				<div class="swiper-wrapper">
					<div class="swiper-slide mr-[20px]">
						<div class="w-[119px] h-[167px] overflow-hidden relative">
							<transition name="abc">
								<div v-if="visible" class=" absolute top-0 left-0">
									<img alt=""
										src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg"
										style="border-radius: 10px; height: 119px; width: 119px" />
									<p class="h-[48px] overflow-hidden">
										那些好听的日漫主题曲
									</p>
									<p class="absolute" style="top: 10px; right: 10px; color: white">
										<Icon icon="ion:infinite" width="20" />
									</p>
								</div>
							</transition>
							<transition name="abc">
								<div v-if="!visible" class=" absolute top-0 left-0">
									<img alt="" src="http://p2.music.126.net/pCk-zKisrYzpXpUcrK5G5w==/3399689964828104.jpg"
										style="border-radius: 10px; height: 119px; width: 119px" />
									<p class="h-[48px] overflow-hidden">
										评论数最多的动漫音乐TOP100（长期更新）
									</p>
									<p class="absolute" style="top: 10px; right: 10px; color: white">
										<Icon icon="ion:infinite" width="20" />
									</p>
								</div>
							</transition>
						</div>
					</div>
					<div v-for="(item) in musicMenu" :key="item.id2" class="swiper-slide mr-4 relative">
						<img alt="" :src="item.uiElement.image.imageUrl"
							style="border-radius: 10px; height: 119px; width: 119px" />
						<p class="h-[48px] overflow-hidden">
							{{ item.uiElement.mainTitle.title }}
						</p>
						<p class="absolute" style="top: 10px; right: 10px; color: white">
							{{ Math.floor(item.resources[0].resourceExtInfo.playCount / 10000) }} 万
						</p>
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
		}
	},
	name: 'musicMenu',
	props: ["musicMenu"],
	mounted() {
		setInterval(() => {
			this.visible = !this.visible
		}, 3000);
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
</style>