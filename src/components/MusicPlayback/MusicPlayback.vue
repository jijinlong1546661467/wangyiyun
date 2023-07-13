<template>
    <div class="bg-[rgba(0,0,0,.1)]">
        <!-- 头部 -->
        <div class="flex justify-between pl-[5.5vw] pr-[5.5vw] pt-[5.2vw] items-center">
            <div @click="goBack">
                <Icon icon="ep:arrow-right" class="" style="transform: rotate(90deg);font-size: 6vw;" />
            </div>
            <div class="flex text-[3.8vw] w-[65vw] flex-wrap justify-center items-center flex-col">
                <p>{{ this.musicmMean.songs[this.index].name }}</p>
                <p class="text-[#ccc]">
                    {{ musicmMean.songs[this.index].ar[0].name }}
                    <!-- {{ musicmMean.songs[this.index]?.ar[1]?.name }} -->
                    <span class="text-white py-[0.8vw] pr-[1.2vw] font-bold pl-[1.2vw] bg-[#575f5c] rounded-md">
                        关注
                    </span>
                </p>
            </div>
            <div>
                <Icon icon="ri:share-circle-line" style="font-size: 6vw;" />
            </div>
        </div>

        <!-- 唱片 -->
        <div class=" relative h-[94vw] mb-[30vw]">
            <img src="/static/1.png" alt="" class=" absolute w-[71vw] left-[15%] top-[27%] z-10">
            <img id="zhuanImg" :src="musicmMean.songs[this.index].al.picUrl" alt=""
                class="w-[50vw] absolute z-[5] rounded-[50%] left-[26%] top-[39%] rotate">
            <img src="/static/4.png" alt="" class=" absolute w-[22vw] left-[50%] right-[50%] top-[10%] z-20">
        </div>

        <div class="pl-[10vw] pr-[12.6vw] flex justify-between mb-[10vw]">
            <Icon class="text-[5.6vw]" icon="ph:heart-light" />
            <Icon class="text-[5.6vw]" icon="iconoir:download-circle" />
            <Icon class="text-[5.6vw]" icon="pepicons-pop:music-note-single-circle" />
            <Icon class="text-[5.6vw]" icon="uil:comment-lines" />
            <Icon class="text-[5.6vw]" icon="teenyicons:more-vertical-outline" />
        </div>

        <div class="flex items-center pl-[4.5vw] pr-[4.5vw]">
            <span>{{ formatTime(this.progress) }}</span>
            <vue-slider v-model="value" width="70vw" :hide-label="true" class="mr-[10px] ml-[10px]" @drag-end="handleDragStart">
            </vue-slider>
            <span>{{ formatTime(this.duration) }}</span>
        </div>

        <div class="flex pl-[10vw] pr-[10vw] justify-between items-center">
            <!-- 播放模式 -->
            <Icon class="text-[5vw]" icon="ps:random" />
            <!-- 上一首 -->
            <Icon class="text-[5vw]" icon="carbon:skip-back-filled" @click.native="before" />
            <!-- 开始 -->
            <Icon v-if="this.play" class="text-[16vw]" icon="carbon:pause-outline" @click.native="playFn" />
            <!-- 暂停 -->
            <Icon v-else class="text-[16vw]" icon="octicon:play-24" @click.native="playFn" />
            <!-- 下一首 -->
            <Icon class="text-[5vw]" icon="fluent:next-16-filled" @click.native="nextMusic" />
            <!-- 列表 -->
            <Icon class="text-[5vw]" icon="iconamoon:playlist-fill" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import store from 'storejs';
import { Progress } from 'vant';
Vue.use(Progress);
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
    components: {
        VueSlider
    },
    data() {
        return {
            value: 0,
            // 歌单列表
            musicmMean: undefined,
            // 是否正在播放中
            play: window.$player?._playing,
            //当前进度
            currentRate: 0,
            // 当前歌曲的总时长
            duration: window.$player?._duration,
            // 当前播放歌曲的进度
            progress: window.$player?._progress,
            // 当前播放索引
            index: 0
        }
    },
    methods: {
        handleDragStart(){
            window.$player._progress = this.value
        },
        goBack() {
            window.history.back();
        },
        //上一首
        before() {
            if (this.index > 0) {
                this.index--
                window.$player._replaceCurrentTrack(this.musicmMean.songs[this.index].id, '', '')
            }
            console.log(this.index)
        },
        // 下一首
        nextMusic() {
            if (this.index < this.musicmMean.songs.length) {
                this.index++
                window.$player._replaceCurrentTrack(this.musicmMean.songs[this.index].id, '', '')
            }
            console.log(this.index)
        },
        //获取歌单ID
        local() {
            let url = window.location.href
            let index = url.lastIndexOf("/") + 1
            this.index = url.slice(index)
            console.log(this.index)
        },
        // 歌曲的开始播放与暂停
        playFn() {
            this.play = !this.play;
            window.$player.playOrPause();
        },
        // 定时器每秒更新时间
        startTimer() {
            this.timerId = setInterval(() => {
                this.duration = window.$player._duration
                this.progress = window.$player._progress
                this.value = ((this.progress / this.duration)*100).toFixed(1)
            }, 1000);
        },
        // 把时间转为00:00的形式
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);

            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(remainingSeconds).padStart(2, '0');

            return `${formattedMinutes}:${formattedSeconds}`;
        }
    },
    mounted() {
        // 组件挂载后自动启动定时器
        this.startTimer();
    },
    created() {
        // 获取点击的歌曲索引
        this.local()
        // 获得歌曲详情
        this.musicmMean = store.get('musicIDNum')
        // 自动播放点击的歌曲
        window.$player._replaceCurrentTrack(this.musicmMean.songs[this.index].id)
    }
}
</script>

<style>
@keyframes Rot {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.rotate {
    animation: Rot 10s linear infinite;
    /* 持续时间为5秒，线性匀速，无限循环 */
}
</style>