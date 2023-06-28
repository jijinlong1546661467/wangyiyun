<template>
  <div>
    <div class="swiper-wrapper">
      <div v-for="item in banner" :key="item.id" class="swiper-slide">
        <img alt="" :src="item.pic" style="border-radius: 30px" />
      </div>
    </div>
    <div class="swiper-pagination" style="left: -90px"></div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['banner'],
};
</script>

<style scoped>
</style>