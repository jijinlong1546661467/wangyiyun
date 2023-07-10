<template>
    <div class="w-screen h-screen">
        <router-view />
        <Player />
    </div>
</template>
<script>
import Player from "@/components/player/Player.vue"
export default {
    components:{Player},
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>