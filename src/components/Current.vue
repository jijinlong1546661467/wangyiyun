<template>
    <div class="pl-[5vw] pt-[5.4vw] pr-[4.5vw]">
        <div class="flex ">
            <p class="text-[5vw] font-bold">当前播放</p>
            <p>（）</p>
        </div>
        <div class="flex mt-[5.6vw] mb-[4.7vw] justify-between">
            <div class="flex w-[25vw] justify-between">
                <Icon class="text-[5.8vw] text-[#acacac]" icon="icon-park-outline:loop-once" />
                <p class="text-[4vw] ">列表循环</p>
            </div>
            <div class="flex w-[30vw] justify-between">
                <Icon class="text-[5.8vw] text-[#acacac]" icon="formkit:download" />
                <Icon class="text-[5.8vw] text-[#acacac]" icon="material-symbols:add-ad-outline" />
                <Icon class="text-[5.8vw] text-[#acacac]" icon="fluent-mdl2:delete" />
            </div>
        </div>
        <hr class="w-[115vw] ml-[-20vw]">
        <div class="pt-[4.3vw] pb-[5vw] flex justify-between items-center">
            <p class="text-[4.1vw] w-[75vw]">根据当前列表在下方推荐你喜欢的歌曲</p>
            <v-switch v-model="switchCheckStatus" />
        </div>
    </div>
</template>

<script>
import Switch from '@/components/Switch';
export default {
    components: {Switch},
    data() {
        return {
            switchCheckStatus: false,
        }
    }
}

</script>