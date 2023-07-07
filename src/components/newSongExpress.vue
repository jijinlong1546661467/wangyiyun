<template>
    <div>
        <p class="text-2xl mb-3 flex items-center" style="font-size: 4vw">
            新歌速递
            <Icon icon="ep:arrow-right-bold" width="15" class="inline-block mb-2" style="margin-top: 5px" />
        </p>
        <ul class="overflow-hidden">
            <div class="swiper-container3 h-[100%]">
                <div class="swiper-wrapper" style="width: 101% !important">
                    <div v-for="item in newSongExpress" :key="item.id3" class="swiper-slide flex flex-wrap">
                        <div class="flex mb-4">
                            <div class="w-[20%] mr-2">
                                <img alt="" :src="item.resources[0].uiElement.image.imageUrl" style="border-radius: 10px" />
                            </div>
                            <div class="w-[70%] flex" style="align-content: space-around; flex-wrap: wrap">
                                <p style="line-height: 30px; font-size: 2.36vw;" class="font-bold w-screen">
                                    {{ item.resources[0].uiElement.mainTitle.title }}
                                </p>
                                <p style="line-height: 30px; font-size: 2.36vw;;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
                                    <span class="text-[10px]" style="color: red;background-color: #efe6e4;padding: 3px;border-radius: 2px;  font-size: 2.36vw;">
                                        {{ introduce[0] }}
                                    </span>
                                    {{ item.resources[0].uiElement.subTitle.title }}
                                    -
                                    {{ item.resources[0].resourceExtInfo.artists[0].name }}
                                </p>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="w-[20%] mr-2">
                                <img alt="" :src="item.resources[1].uiElement.image.imageUrl" style="border-radius: 10px" />
                            </div>
                            <div class="w-[70%] flex" style="align-content: space-around; flex-wrap: wrap">
                                <p style="line-height: 30px ; font-size: 2.36vw;" class="font-bold w-screen">
                                    {{ item.resources[1].uiElement.mainTitle.title }}
                                </p>
                                <p style="line-height: 30px; font-size: 2.36vw;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
                                    <span class="text-[10px]" style="color: #e8d59a;border: 1px solid #e8d59a;border-radius: 2px;padding: 2px; font-size: 2.36vw;">
                                        {{ introduce[1] }}
                                    </span>
                                    
                                    {{ item.resources[1].uiElement.subTitle.title }}
                                    -
                                    {{ item.resources[1].resourceExtInfo.artists[0].name }}
                                </p>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="w-[20%] mr-2">
                                <img alt="" :src="item.resources[2].uiElement.image.imageUrl" style="border-radius: 10px" />
                            </div>
                            <div class="w-[70%] flex" style="align-content: space-around; flex-wrap: wrap">
                                <p style="line-height: 30px; font-size: 2.36vw;" class="font-bold w-screen">
                                    {{ item.resources[2].uiElement.mainTitle.title }}
                                </p>
                                <p style="line-height: 30px; font-size: 2.36vw;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
                                    <span class="text-[10px]" style="color: #e8d59a;border: 1px solid #e8d59a;border-radius: 2px;padding: 2px; font-size: 2.36vw;">{{ introduce[2] }}</span>
                                    {{ item.resources[2].uiElement.subTitle.title }}
                                    -
                                    {{ item.resources[2].resourceExtInfo.artists[0].name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'newSongExpress',
    props: ["newSongExpress", "introduce"],
};
</script>

<style scoped></style>