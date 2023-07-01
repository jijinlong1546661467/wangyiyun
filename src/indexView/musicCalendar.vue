<template>
  <div>
    <p class="text-2xl mb-3">
      音乐日历
      <span
        class="text-[20px] mb-3 p-[6px]"
        style="background-color: #ccc; border-radius: 20px"
      >
        今日{{rili.length}}条
        <Icon
          icon="ep:arrow-right-bold"
          width="15"
          class="inline-block mb-2"
          style="margin-top: 5px"
        />
      </span>
    </p>
    <ul class="overflow-hidden" style="border-radius: 20px">
      <div
        v-for="(item, index) in rili"
        :key="item.id4"
        v-if="index < 2"
        class="flex flex-wrap   overflow-hidden"
        :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
      >
        <div class="w-[100%] mt-4 ml-4 mb-4 flex">
          <div class="w-[70%]">
            <span class="text-[20px]">
              {{ formattedDate }}
            </span>
            <span
              class="p-[4px]"
              style="color: red; background-color: #fbeaea; border-radius: 4px"
            >
              {{ item.tag }}
            </span>
            <p class="w-[80%]">{{ item.title }}</p>
          </div>
          <div class="w-[20%]">
            <img :src="item.imgUrl" alt="" style="border-radius: 20px" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexmenu',
  props: ['rili','formattedDate','switchCheckStatus'],
};
</script>

<style scoped>
</style>