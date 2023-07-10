<template>
    <div>
        <div class="flex fixed bottom-0 left-0 right-0 h-[13vw] justify-between bg-white z-[1000] items-center pr-[5vw] pl-[5vw]">
            <img :src="player._currentTrack.al?.picUrl" alt="" class="w-[9.3vw]">
            <p class="w-[60vw]">{{ player._currentTrack.name }}</p>
            <Icon @click.native="openORclose" class="text-[6vw] mr-[6vw]" icon="octicon:play-24" />
            <Icon class="text-[6vw]" icon="foundation:indent-more" />
        </div>
    </div>
</template>

<script>
import Player from './player';
export default {
    data() {
        return {
            player: new Player()
        }
    },
    methods:{
        openORclose(){
            this.player._playing = !this.player._playing
        }   
    },
    created() {
        window.$player = this.player
    }
}
</script>