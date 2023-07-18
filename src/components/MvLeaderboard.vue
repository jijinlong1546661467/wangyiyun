<template>
    <div>
        <div
            class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]">
            MV排行榜-{{ tab[active] }}
        </div>

        <div>
            <van-tabs v-model="active" animated>
                <van-tab :title="tab[index]" v-for="(item, index) in tab" :key="item.id">
                    <div v-for="(item, indexs) in MVNum.data" :key="item.one">
                        <div class="w-[92vw] ">
                            <div class="w-[100%] h-[52vw] relative rounded-[3vw] overflow-hidden mb-[2.7vw]">
                                <img :src="item.cover" class="w-[100%] h-[52vw] bg-black"
                                    @click="$router.push(`/videoPlayerView/${item.id}`);" />
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="solar:play-bold" color="#fdffff" class="mr-[0.5vw] text-[2.6vw]" />
                                    {{ dataTruncation(item.playCount) }}
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-[7vw]">
                            <div class="w-[13.6vw]">
                                <span class=" text-[#999999] text-[6.4vw] mr-[2.8vw] text-center"
                                    :class="indexs == 0 || indexs == 1 || indexs == 2 ? 'text-[red]' : ''">
                                    {{ indexs + 1 }}
                                </span>
                            </div>
                            <div class="flex flex-wrap flex-col">
                                <p class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                                    {{ item.name }}
                                </p>
                                <p class=" text-[#999999] text-[2vw] mr-[2.8vw] w-[75vw]"
                                    style=" white-space: nowrap;overflow: hidden;text-overflow: ellipsis; display: inline-block;">
                                    <span v-for="itemss in item.mv.artists" :key="itemss.s">
                                        {{ itemss.name }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
  
  
<script>
import { MVTop } from '@/request';
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            res: [],
            active: 0,
            MVNum: [],
            tab: ['内地', '港台', '欧美', '韩国', '日本'],
        };
    },
    async mounted() {
        await this.fetchData(this.active);
        console.log(this.active);
    },
    watch: {
        active(newIndex) {
            this.fetchData(newIndex);
        },
    },
    methods: {
        async fetchData(index) {
            const res = await MVTop(this.tab[index]);
            this.MVNum = res.data;
            console.log(this.MVNum, index);
        },
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume.toString();
            }
        },
    },
};
</script>

<style>
.van-tab__pane {
    padding-left: 4.1vw;
    padding-right: 4.1vw;
}
</style>