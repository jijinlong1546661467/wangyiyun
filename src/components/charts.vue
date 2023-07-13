<template>
	<div>
		<p class="text-2xl mb-3" style="font-size: 4vw">
			排行榜
			<Icon icon="ep:arrow-right-bold" width="15" class="inline-block mb-2" style="margin-top: 5px" />
		</p>
		<ul class="overflow-hidden" style="border-radius: 20px">
			<div class="swiper-container4 h-[100%]">
				<div class="swiper-wrapper" style="width: 101% !important">
					<div v-for="item in charts" :key="item.id4" class="swiper-slide flex flex-wrap  overflow-hidden "
						:class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-[white]'}`">
						<div class="w-[100%] mt-4 ml-4 mb-4" v-if="item.uiElement.mainTitle.title != 'MV榜'">
							<span class="font-bold text-[20px] mr-24" style="font-size: 4vw;">
								{{ item.uiElement.mainTitle.title }}
								<Icon icon="ep:arrow-right-bold" width="15" class="inline-block mb-2"
									style="margin-top: 5px" />
							</span>
							<span class="text-[15px]" style="font-size: 4vw;">
								{{ item.uiElement.mainTitle.titleDesc }}
							</span>
						</div>
						<div class="w-[100%] mt-4 ml-4 mb-4" v-if="item.uiElement.mainTitle.title == 'MV榜'">
							<router-link :to="{ path: '/MvLeaderboard' }" class="flex items-center">
								<span class="font-bold text-[20px] mr-24" style="font-size: 4vw;">
									{{ item.uiElement.mainTitle.title }}
									<Icon icon="ep:arrow-right-bold" width="15" class="inline-block mb-2"
										style="margin-top: 5px" />
								</span>
								<span class="text-[15px]" style="font-size: 4vw;">
									{{ item.uiElement.mainTitle.titleDesc }}
								</span>
							</router-link>
						</div>

						<div class="flex mb-4  ml-4 relative"
							:class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-[white]'}`">
							<div class="overflow-hidden mr-2">
								<img alt="" :src="item.resources[0].uiElement.image.imageUrl"
									style="border-radius: 10px; width: 80px; height: 80px" />
								<p class="absolute"
									style="font-weight: 900;font-size: 25px;color: rgb(190, 156, 52);top: 23px;left: 85px;font-size: 4vw;">
									1
								</p>
							</div>
							<div class="w-[70%] flex ml-4" style="align-content: space-around; flex-wrap: wrap">
								<p style="line-height: 30px;font-size: 4vw;" class="font-bold w-screen">
									{{ item.resources[0].uiElement.mainTitle.title }}
								</p>
								<p style="line-height: 30px;font-size: 4vw;">
									{{
										item.resources[0].resourceExtInfo?.songData.artists[0].name
									}}
								</p>
							</div>
						</div>
						<div class="flex mb-4 ml-4 relative" :class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-[white]'}`">
							<div class="overflow-hidden mr-2">
								<img alt="" :src="item.resources[1].uiElement.image.imageUrl"
									style="border-radius: 10px; width: 80px; height: 80px" />
								<p class="absolute"
									style="font-weight: 900;font-size: 25px;color: #818aa8;top: 23px;font-size: 4vw;left: 85px;">
									2
								</p>
							</div>
							<div class="w-[70%] flex ml-4" style="align-content: space-around; flex-wrap: wrap">
								<p style="line-height: 30px;font-size: 4vw;" class="font-bold w-screen">
									{{ item.resources[1].uiElement.mainTitle.title }}
								</p>
								<p
									style="line-height: 30px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 4vw;">
									{{
										item.resources[1].resourceExtInfo?.songData.artists[0].name
									}}
								</p>
							</div>
						</div>
						<div class="flex mb-4  ml-4 relative"
							:class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-[white]'}`">
							<div class="overflow-hidden mr-2">
								<img alt="" :src="item.resources[2].uiElement.image.imageUrl"
									style="border-radius: 10px; width: 80px; height: 80px" />
								<p class="absolute"
									style="font-weight: 900;font-size: 25px;color: #c7855e;top: 23px;left: 85px;font-size: 4vw;">
									3
								</p>
							</div>
							<div class="w-[70%] flex ml-4" style="align-content: space-around; flex-wrap: wrap">
								<p style="line-height: 30px;font-size: 4vw;" class="font-bold w-screen">
									{{ item.resources[2].uiElement.mainTitle.title }}
								</p>
								<p
									style="line-height: 30px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 4vw;">
									{{
										item.resources[2].resourceExtInfo?.songData.artists[0].name
									}}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'charts',
	props: ['charts', 'switchCheckStatus'],
};
</script>

<style scoped></style>