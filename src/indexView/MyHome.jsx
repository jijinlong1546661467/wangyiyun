import styled from 'styled-components-vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');
import {
    fetchUserAccount,
    fetchUserDetail,
    fetchUserPlaylist,
    fetchUserHistory,
    fetchUserdynamics,
    fetchdj,
    userFolloweds,
    loginStatus,
    userLevel,
    userGuanZhu,
} from '@/request';
const Wrapper = styled.div`
width:100%;
height: 100vh;
background: url(/static/R.jpg);
background-size: cover;
.xuanxiangka{
background-color: #f5f5f5;
padding:3vw;
border-radius: 3vw;
}
.custom-class {
white-space: normal;
}
`
export default {
    render() {
        return (
            <Wrapper>

                {/* 头部 */}
                <div class="flex justify-between pt-[3vw] pl-[3vw] pr-[3vw] pb-[58vw]">
                    <router-link to={`/HomeView/`}>
                        <Icon icon="ri:arrow-left-line" style="font-size: 7vw" class="font-600 text-[5vw] text-[white]" />
                    </router-link>
                    <p style="width: calc(22vw);align-items: center;justify-content: space-between;" class="flex">
                        <span class="h-[4vw]  rounded-[2vw] text-right text-[2vw] bg-white flex "
                            style="align-items: center;justify-content: space-around; width: calc(12vw)">照片墙</span>
                        <span class="  h-[3vw] rounded-[50%] " style="background:#dabca3;width:3vw"></span>
                        <span class="  h-[2vw] rounded-[50%] " style="background:#dabca3;width:2vw"></span>
                    </p>
                    <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-white"
                        style="font-size: 7vw; color:white" />
                </div>



                {/* 内容部分 */}
                <div class="xuanxiangka">
                    <div class=" text-center relative bg-white mt-[-6vw] mb-[6vw]" style="border-radius: 5vw;">
                        <div class="flex flex-col items-center relative">
                            <img src={this.headImg} alt="" class=" absolute top-[-9vw]  w-[18vw] h-[18vw]"
                                style="border-radius: 50%;" />
                            <p class="mt-[11vw] text-[5vw] font-[550] mb-[3vw]">{this.userName}</p>
                        </div>
                        <div class="flex justify-center">
                            <p class="mr-4 text-[#9498a2]">{this.guanzhu} 关注</p>
                            <p class="mr-4 text-[#9498a2]">{this.fenshiNum} 粉丝</p>
                            <p class="mr-4 text-[#9498a2]">LV.{this.level}</p>
                        </div>
                        <div class="flex justify-center mt-[3vw] mb-[4vw]">
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #e4e5e5;">
                                IP：广东</p>
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #e4e5e5;">
                                湖北 随州</p>
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #e4e5e5;">
                                村龄 4年</p>
                        </div>
                        <div class="flex justify-center items-center pb-[3vw]">
                            <router-link to={`/BianJizliao/`}>
                                <p class="w-[23vw] p-[2vw] mr-[1vw] text-[3.4vw]"
                                    style="border-radius: 15vw;border: 1px solid #c9cbd0; ">
                                    编辑资料
                                </p>
                            </router-link>
                            <button onClick={this.change} style="transition: all 1s;" class={this.isHeight ? 'rotate-0'
                                : 'rotate-180'}>
                                <Icon icon="system-uicons:chevron-down-circle" color="#ccc" class=" text-[10vw]" />
                            </button>
                        </div>
                        <div class="overflow-auto" id='more' style="transition: all 1s;height:1vw;opacity: 0;">
                            <div class="flex w-[150vw] mb-[3.7vw]">
                                <div class="w-[28vw] h-[39vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col"
                                    style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]"
                                        style="border-radius: 50%;" />
                                    <p class="text-[3vw]">橙留香</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]"
                                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了橙留香橙留香
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]"
                                        style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[39vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col"
                                    style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]"
                                        style="border-radius: 50%;" />
                                    <p class="text-[3vw]">橙留香</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]"
                                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了橙留香橙留香
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]"
                                        style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[39vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col"
                                    style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]"
                                        style="border-radius: 50%;" />
                                    <p class="text-[3vw]">橙留香</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]"
                                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了橙留香橙留香
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]"
                                        style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[39vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col"
                                    style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]"
                                        style="border-radius: 50%;" />
                                    <p class="text-[3vw]">橙留香</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]"
                                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了橙留香橙留香
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]"
                                        style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[39vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col"
                                    style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]"
                                        style="border-radius: 50%;" />
                                    <p class="text-[3vw]">橙留香</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]"
                                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了橙留香橙留香
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]"
                                        style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 点击部分 */}
                    <div>
                        <p class="text-[4vw] font-[600] flex " style="justify-content: space-around; ">
                            <span class="text-[#919398]" onClick={() => this.value = 0}
                            >主页</span>
                            <span class="text-[#919398]" onClick={() => this.value = 1}
                            >动态</span>
                            <span class="text-[#919398]" onClick={() => this.value = 2}
                            >播客</span>
                        </p>
                    </div>
                    <div>
                        {/* 主页 */}
                        {this.value === 0 && <div>

                            {/* 音乐品味 */}
                            <div class="w-[94vw]  pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-[540]">音乐品味</p>
                                <div class="w-[82.5vw] h-[32.13vw] flex mt-[2.8vw]" style="justify-content: space-around;">
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(254,243,242);background: linear-gradient(180deg, rgba(254,243,242,1) 0%, rgba(254,254,249,1) 100%);">
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]">我的喜欢</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[3vw]">
                                            {this?.establishList[0]?.trackCount}首</p>
                                        <p class="flex mt-[8vw] text-[#a5acb7]">
                                            <Icon icon="ph:heart-fill" class="w-[3vw] " /><span
                                                class="text-[3vw] text-[#a5acb7]">喜欢的音乐</span>
                                        </p>

                                    </div>
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(253,247,230); background: linear-gradient(180deg, rgba(253,247,230,1) 0%, rgba(254,254,249,1) 100%);">
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]">累计听歌</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[3vw]">{this.listenSongs}首</p>
                                        <p class="flex mt-[8vw] text-[#a5acb7]">
                                            <Icon icon="fa6-solid:ranking-star" class="w-[3vw]" /><span
                                                class="text-[3vw] text-[#a5acb7]">喜欢的音乐</span>
                                        </p>

                                    </div>
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(204,229,247);background: linear-gradient(180deg, rgba(204,229,247,1) 0%, rgba(251,251,254,1) 100%);">
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]">本周关键词</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[2vw] pr-[6vw]">属于你的音乐档案</p>
                                        <p class="flex mt-[3vw] text-[#a5acb7]">
                                            <Icon icon="ant-design:hourglass-filled" class="w-[3vw]" /><span
                                                class="text-[3vw] text-[#a5acb7]">黑胶时光机</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            {/* 创建歌单 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-[540]" style="font-size:4.63vw">创建的歌单 <span
                                    class="text-[#d5d5d5] text-[3vw]">({this.establishList.length}个)</span></p>

                                {this.establishList.map((item) => (
                                    <div class="flex  mt-[3vw]">
                                        <div class="w-[14.35vw] h-[14.35vw]">
                                            <img src={item.coverImgUrl} alt=""
                                                class="w-[14.35vw] h-[14.35vw] rounded-[2vw] bg-black z-[2] " style=";" />
                                        </div>
                                        <div class="ml-[3vw] w-[64vw] flex "
                                            style="flex-direction: column;justify-content: space-around">
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[530] w-[64vw]"
                                                style="font-size:4.1vw">{item.name}</p>
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  text-[#808080] w-[64vw]"
                                                style="font-size:3vw">
                                                {item.trackCount}首，{item.creator.nickname}，播放
                                                {this.dataTruncation(item.playCount)}次</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                            {/* 收藏的歌单 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-[540]" style="font-size:4.63vw">收藏的歌单 <span
                                    class="text-[#d5d5d5] text-[3vw]">({this.songList.length})</span></p>

                                {this.songList.slice(0, 10).map((item) => (
                                    <div class="flex  mt-[3vw]">
                                        <div class="w-[14.35vw] h-[14.35vw]">
                                            <img src={item.coverImgUrl} alt=""
                                                class="w-[14.35vw] h-[14.35vw] rounded-[2vw] bg-black z-[2] " style=";" />
                                        </div>
                                        <div class="ml-[3vw] w-[64vw] flex "
                                            style="flex-direction: column;justify-content: space-around">
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[530] w-[64vw]"
                                                style="font-size:4.1vw">{item.name}</p>
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  text-[#808080] w-[64vw]"
                                                style="font-size:3vw">
                                                {item.trackCount}首，{item.creator.nickname}，播放
                                                {this.dataTruncation(item.playCount)}次</p>
                                        </div>
                                    </div>))}

                            </div>
                            {/* 我的评论 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <div class="flex justify-between mb-[4.4vw]">
                                    <p class=" font-[540] text-[5vw] " style="font-size:4.63vw">
                                        我的评论
                                        <span class="text-[#d5d5d5] text-[2.7vw] ml-[1.6vw] font-semibold">
                                            ({this.commentCount})
                                        </span>
                                    </p>
                                    <Icon icon="entypo:lock" color="#b3b3b3" class="text-[4vw]" />
                                </div>
                                {this?.comments?.map((item) => (
                                    <div>
                                        {/* 评论歌曲 */}
                                        <div class="flex justify-between" style="align-items: center;">
                                            <div class="flex">
                                                <div class="w-[7.3vw] h-[7.3vw] rounded-[1.2vw] flex bg-[#e5e4e5]"
                                                    style="align-items: center;justify-content: space-around;">
                                                    <Icon icon="icon-park-outline:broadcast" style="font-size:[3vw];color:#ffffff" />
                                                </div>
                                                <div class="text-[rgb(177,180,187)] text-[2.8vw] ml-[2.3vw] flex"
                                                    style="align-items: center;">
                                                    {item.user.nickname}的动态-分享声音
                                                </div>
                                            </div>
                                            <Icon icon="tabler:thumb-up-filled" color="#b3b3b3" class="text-[3.7vw]" />
                                        </div>
                                        {/* 评论文字 */}
                                        <div class="mt-[3.6vw] font-extrabold text-[3.6vw] text-[#2a3146]">
                                            {item?.content}
                                        </div>
                                        {/* 多久之前 */}
                                        <p class="mt-[3vw] text-[rgb(169,173,181)] text-[3vw]">
                                            {dayjs(item?.time).fromNow()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            {/* 基本信息 */}
                            <div class="w-[94vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw] pb-[3vw]">
                                <p class="text-[5vw] font-[540] flex"
                                    style="justify-content: space-between;align-items: center; font-size:4.63vw">
                                    <span class="flex">基本信息 </span>
                                    <span class="flex w-[22.8vw] h-[6.5vw] rounded-[3.75vw] text-[3.24vw]"
                                        style="border:1px solid #e6e6e6; justify-content: space-around; line-height:6.5vw">领取村民证
                                    </span>
                                </p>
                                <p class=" text-[#666666] mt-[4.8vw]" style="font-size:3.43vw">
                                    村龄:&nbsp;&nbsp;4年(2019年3月注册)
                                </p>
                                <p class=" text-[#666666] mt-[4.8vw]" style="font-size:3.43vw">
                                    地区:&nbsp;&nbsp;湖北&nbsp;宜昌
                                </p>
                            </div>

                        </div>}
                        {/* 动态 */}
                        {this.value === 1 && <div class="mt-[3vw]">

                            {this.events.map((item) => (
                                <div>
                                    <div class=" h-[10vw] flex">
                                        <div class="w-[10vw] h-[10vw]">
                                            <img src={item.user.avatarUrl} alt="" class="w-[10vw] h-[10vw] rounded-[5vw]" />
                                        </div>
                                        <div class="ml-[3.7vw]">
                                            <p class="text-[4.2vw] font-[600]">
                                                {item.user.nickname}
                                                <span class="font-[400] text-[#666666]">
                                                    &nbsp;分享声音:
                                                </span>
                                            </p>
                                            <p class="text-[2vw] text-[#666666]">
                                                {dayjs(item?.eventTime).fromNow()}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="pl-[13.5vw]  w-[100%]">
                                        <div class=" w-[75vw] line-clamp-2 custom-class font-[540] mt-[5.5vw]"
                                            style="word-wrap: break-word; font-size:4.2vw">
                                            {this.extract(item.json)}
                                        </div>

                                        <div class="w-[78.24vw] h-[13.43vw] rounded-[3vw] flex bg-[#e8e6e6] mt-[3.0vw]"
                                            style="align-items: center;">

                                            <div class="w-[10vw] ml-[2vw] h-[10vw] rounded-[1.2vw] flex bg-[#bcbbbc]"
                                                style="align-items: center;justify-content: space-around;">
                                                <Icon icon="icon-park-outline:broadcast" style="font-size:6vw;color:#ffffff" />
                                            </div>

                                            <div class="ml-[2vw]">
                                                <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[500] w-[60vw]"
                                                    style="font-size:4.07vw">
                                                    {item.info.commentThread.resourceInfo.name}
                                                </p>
                                                <p
                                                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3.15vw] text-[#808080]">
                                                    {item.user.nickname}的播客
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>}
                        {/* 播客 */}
                        {this.value === 2 && <div>
                            {/* 创建的播客 */}
                            <div class="w-[94vw] pb-[3.8vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-[540]" style="font-size:4.63vw">创建的播客
                                    <span class="text-[#d5d5d5] text-[3vw]">
                                        (1)
                                    </span>
                                </p>
                                <div class="flex  mt-[3vw]">
                                    <div class="w-[14.35vw] h-[14.35vw]">
                                        <img src="/static/cj.jpg" alt="" class="w-[14.35vw] h-[14.35vw] rounded-[2vw]" />
                                    </div>
                                    <div class="ml-[3vw] flex" style="flex-direction: column;justify-content: space-around;">
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4.5vw] font-[540]">
                                            这是播客
                                        </p>
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3.15vw] text-[#808080]">
                                            0
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* 收藏的播客*/}
                            <div class="w-[94vw] pb-[3.8vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-[540]" style="font-size:4.63vw"> 收藏的播客 <span
                                    class="text-[#d5d5d5] text-[3vw]">(1)</span></p>
                                <div class="flex  mt-[3vw]">
                                    <div class="w-[14.35vw] h-[14.35vw]">
                                        <img src="/static/sc.jpg" alt="" class="w-[14.35vw] h-[14.35vw] rounded-[2vw]" />
                                    </div>
                                    <div class="ml-[3vw] flex" style="flex-direction: column;justify-content: space-around;">
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4.5vw] font-[540]">
                                            2023抖音歌曲翻唱</p>
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3.15vw] text-[#808080]">
                                            by&nbsp;温顺良人</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>


            </Wrapper>
        )
    },

    data() {
        return {
            //用户名
            userName: '游客',
            //头像
            headImg: '',
            //用户等级
            level: '',
            //用户id
            uid: '',
            //IP地址
            IP: '',
            //实际地址
            dizhi: '',
            //关注
            guanzhu: '',
            //粉丝
            fenshiNum: '',
            //箭头拉伸
            isHeight: false,
            //用户动态
            userDynamics: '',
            value: 0,
            // 累计听歌
            listenSongs: '',
            // 收藏的歌单
            songList: [],
            // 创建的歌单
            establishList: [],
            // 评论数量
            commentCount: null,
            // 评论内容
            comments: null,
            //动态
            events: [],
        }
    },
    async created() {
        //用户等级
        const userLevelNum = await userLevel()
        this.level = userLevelNum.data.data.level
        //用户关注
        const userGuanZhuNum = await userGuanZhu(userLevelNum.data.data.userId)
        this.guanzhu = userGuanZhuNum.data.follow.length
        //用户粉丝
        const fenshi = await userFolloweds(userLevelNum.data.data.userId)
        this.fenshiNum = fenshi.data.followeds.length
        //获取登录后的用户名
        const loginStatu = await loginStatus()
        this.userName = loginStatu.data.data.profile.nickname
        //头像
        this.headImg = loginStatu.data.data.profile.avatarUrl

        // 获取账户信息
        const res1 = await fetchUserAccount();

        // 获取用户详情
        const res2 = await fetchUserDetail(res1.data.profile.userId);
        this.listenSongs = res2.data.listenSongs; // 累计听歌
        this.gender = res2.data.profile.gender; // 性别

        // 收藏、创建歌单
        const res3 = await fetchUserPlaylist(res1.data.profile.userId);
        this.establishList = res3.data.playlist.filter((item) => !item.subscribed); // 创建的歌单
        this.songList = res3.data.playlist.filter((item) => item.subscribed); // 收藏的歌单

        // 评论
        const res4 = await fetchUserHistory(res1.data.profile.userId);
        this.commentCount = res4.data.data.commentCount;
        this.comments = res4.data.data.comments;

        //转发的动态
        const res5 = await fetchUserdynamics(res1.data.profile.userId)
        this.events = res5.data.events

        //电台
        const res6 = await fetchdj(res1.data.profile.userId)
        console.log(res6);
    },
    methods: {
        change() {
            const more = document.getElementById('more')
            if (this.isHeight) {
                more.style.opacity = '0'
                more.style.height = '1vw'
                this.isHeight = !this.isHeight
            } else {
                more.style.opacity = '1'
                more.style.height = '43vw'
                this.isHeight = !this.isHeight
            }
        },
        extract(jsonString) {
            const jsonStringObj = JSON.parse(jsonString); // 转换为JSON对象
            const msg = jsonStringObj.msg; // 获取msg的值
            const chineseCharacters = msg.match(/[\u4e00-\u9fa5]+/g).join(''); // 提取汉字部分
            return chineseCharacters;
        },
        // 截取时间
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume?.toString();
            }
        },
    }

}