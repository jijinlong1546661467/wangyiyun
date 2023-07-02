<template>
    <div class="flex">
        <Icon icon="ic:sharp-menu" color="rgba(0,0,0,0)" width="40" class="inline-block" />
        <div class=" relative w-[80%]">
            <Icon icon="ph:magnifying-glass-bold" width="25" class="inline-block absolute" style="color: #ccc;left: 10px;top: 7.5px;" />
            <input type="text" name="" id="" placeholder="薛之谦 最近很火哦"
                class=" rounded-3xl pl-11 h-[40px] bg-gradient-to-r from-[#dddbfb] to-pink-50 w-[100%]"
                style="border: 1px solid #ccc" />
            <Icon icon="teenyicons:scan-solid" width="25" class="inline-block absolute" style="color: #ccc;right: 15px;top: 7.5px;" />
        </div>
        <Icon icon="ri:netease-cloud-music-fill" width="40" class="inline-block"
        :color="`${switchCheckStatus ? 'bg-gray-900' : 'bg-slate-100'}`" />
    </div>
</template>

<script>
    export default {
        name: 'search',
        props: ['switchCheckStatus'],
    };
</script>

<style scoped>
</style>