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
        <div class="w-[100vw] h-[130vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
            v-if="lyric" @click="lyric = !lyric">
            <div class="absolute top-0 transition-all duration-1000" :style="{ top: -$player.lineHieght + 'vw' }">
                <div v-for="(line, index) in $player.lyricLines" :key="index"
                    class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
                    :style="{ color: index === $player.lineIndex ? '#fff' : 'hsla(0,0%,88.2%,.7)' }">
                    {{ line.txt }}
                </div>
            </div>
        </div>

        <div class=" relative h-[94vw] mb-[30vw]" v-else>
            <img src="/static/1.png" alt="" class=" absolute w-[71vw] left-[15%] top-[27%] z-10" @click="showLyric">
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

        <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[8vw]">
            <div class="text-[black]  scale-[0.8] opacity-80">
                {{ timeModification($player._progress) }}
            </div>
            <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true"
                :min="0" :max="$player._duration" :interval="0.1" class="flex-1 mx-[2.5vw]" />
            <div class="text-[black]]  scale-[0.8] opacity-50">
                {{ timeModification($player._duration) }}
            </div>
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
import store from 'storejs';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'; // 引入默认主题样式，你也可以根据需要引入其他主题样式

export default {
    components: {
        VueSlider,
    },
    data() {
        return {
            // 歌词
            lyric: true,
            // 歌单列表
            musicmMean: undefined,
            // 是否正在播放中
            play: window.$player?._playing,
            // 当前播放歌曲的进度
            progress: undefined,
            // 当前播放索引
            index: 0,
            num: 25
        }
    },
    methods: {
        showLyric() {
            this.lyric = !this.lyric
        },
        // 时间修改
        timeModification(time) {
            const minutes = Math.floor(time / 60);
            return `${String(minutes).padStart(2, '0')}:${String(
                Math.floor(time % 60)
            ).padStart(2, '0')}`;
        },
        goBack() {
            window.history.back();
        },
        //上一首
        before() {
            this.$player.playOrPause();
            if (this.index > 0) {
                this.index--
                this.$player._replaceCurrentTrack(this.musicmMean.songs[this.index].id, '', '')
            }
        },
        // 下一首
        nextMusic() {
            this.$player.playOrPause();
            if (this.index < this.musicmMean.songs.length) {
                this.index++
                this.$player._replaceCurrentTrack(this.musicmMean.songs[this.index].id, '', '')
            }
        },
        //获取歌单ID
        local() {
            let url = window.location.href
            let index = url.lastIndexOf("/") + 1
            this.index = url.slice(index)
        },
        // 歌曲的开始播放与暂停
        playFn() {
            this.$player.playOrPause();
        },
        //点击替换
        playSingle(id) {
            this.$player.replacePlaylist(
                this.musicmMean.songs.map(song => song.id),
                '',
                '',
                id
            );
        },
    },
    watch: {
        '$player._playing': {
            immediate: true,
            handler(newVal) {
                // 处理值变化的逻辑
                if (newVal) {
                    // _playing 值为 true，表示正在播放音乐
                    this.play = true;
                } else {
                    // _playing 值为 false，表示暂停或未播放音乐
                    this.play = false;
                }
            },
        },
    },
    async created() {
        // 获取点击的歌曲索引
        this.local()
        // 获得歌曲详情
        this.musicmMean = store.get('musicIDNum')
        // 自动播放点击的歌曲
        this.playSingle(this.musicmMean.songs[this.index].id)
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