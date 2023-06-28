<template>
    <div>
        <div v-for="item in menu" :key="item.id1">
            <Icon :icon="item[0]" color="red" width="30" class="inline-block mb-2" />
            <p>{{item[1]}}</p>
        </div>
    </div>
</template>

<script>
    export default ({
        name: "indexmenu",
        props: ["menu"]
    })
</script>

<style scoped>

</style>