<template>
    <div>
        <van-button @click="showPopup">12313213</van-button>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <van-area :area-list="areaList" confirm-button-text="完成" @click="confirm" columns-num='2' />
        </van-popup>
    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
export default {
    data() {
        return {
            show: false,
            areaList: Object.freeze(areaList),
        };
    },

    methods: {
        confirm(e) {
            this.show = false;
            console.log(e);
        },
        showPopup() {
            this.show = true;
        },
    },
};
</script>