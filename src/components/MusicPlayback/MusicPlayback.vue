<template>
    <div>
        <!-- 头部 -->
        <div class="flex justify-between pl-[5.5vw] pr-[5.5vw] pt-[5.2vw] items-center">
            <div>
                <Icon icon="ep:arrow-right" class="" style="transform: rotate(90deg);font-size: 6vw;"/>
            </div>
            <div class="flex text-[3.8vw] w-[65vw] flex-wrap justify-center">
                <p>笼（电影《消失的她》片尾主题曲）</p>
                <p class="text-[#ccc]">
                    张碧晨
                    <span class="text-white py-[0.8vw] pr-[1.2vw] font-bold pl-[1.2vw] bg-[#575f5c] rounded-md">
                        关注
                    </span>
                </p>
            </div>
            <div>
                <Icon icon="ri:share-circle-line" style="font-size: 6vw;"/>
            </div>
        </div>

        <!-- 唱片 -->
        <div class=" relative mt-[16vw] h-[40vh] mb-[30vw]">
            <img src="/static/1.png" alt="" class=" absolute left-[25%] top-[25%]">
            <img src="/static/4.png" alt="" class=" absolute w-[22vw] left-[50%] right-[50%]">
        </div>

        <div class="pl-[10vw] pr-[12.6vw] flex justify-between">
            <Icon class="text-[5.6vw]" icon="ph:heart-light" />
            <Icon class="text-[5.6vw]" icon="iconoir:download-circle" />
            <Icon class="text-[5.6vw]" icon="pepicons-pop:music-note-single-circle" />
            <Icon class="text-[5.6vw]" icon="uil:comment-lines" />
            <Icon class="text-[5.6vw]" icon="teenyicons:more-vertical-outline" />
        </div>
    </div>
</template>