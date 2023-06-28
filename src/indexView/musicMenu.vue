<template>
  <div>
    <p class="text-2xl mb-3">
      推荐歌单
      <Icon
        icon="ep:arrow-right-bold"
        width="15"
        class="inline-block mb-2"
        style="margin-top: 5px"
      />
    </p>
    <ul class="overflow-hidden">
      <div class="swiper-container2 h-[100%] w-[33%]">
        <div class="swiper-wrapper">
          <div
            v-for="item in musicMenu"
            :key="item.id2"
            class="swiper-slide mr-4 relative"
          >
            <img
              alt=""
              :src="item.uiElement.image.imageUrl"
              style="border-radius: 30px; height: 119px; width: 119px"
            />
            <p class="h-[48px] overflow-hidden">
              {{ item.uiElement.mainTitle.title }}
            </p>
            <p class="absolute" style="top: 10px; right: 10px; color: white">
              {{ Math.floor(item.resources[0].resourceExtInfo.playCount/10000)}} 万
            </p>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'musicMenu',
  props: ["musicMenu"]
};
</script>

<style scoped>
</style>