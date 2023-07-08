import styled from 'styled-components-vue'
import { userFolloweds, loginStatus, userLevel, userGuanZhu, myIP, userEvent } from '@/request'
import { Icon } from '@iconify/vue2';


export default {
    render() {
        return (
            <div class="w-[100%] pt-[15px] pl-[4%] pr-[4%] bg-slate-100">
                <div class="flex justify-between mb-[59vw]">
                {/* <router-link to={path= `/MyHome/` }> */}
                    <Icon icon="ri:arrow-left-line" style="font-size: 7vw" class="font-600 text-[5vw] text-[black]" />
                    {/* </router-link> */}
                    <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-[black]" />
                </div>
                <div class=" text-center relative bg-white" style="border-radius: 5vw;">
                    <div class="flex flex-col items-center relative" >
                        <img src={this.headImg} alt="" class=" absolute top-[-9vw]  w-[18vw] h-[18vw]" style="border-radius: 50%;" />
                        <p class="mt-[9vw]">{this.userName}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="mr-4 text-[#ccc]">{this.guanzhu} 关注</p>
                        <p class="mr-4 text-[#ccc]">{this.fenshiNum} 粉丝</p>
                        <p class="mr-4 text-[#ccc]">LV.{this.level}</p>
                    </div>
                    <div class="flex justify-center mt-[3vw] mb-[4vw]">
                        <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #ccc;">IP：广东</p>
                        <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #ccc;">湖北 随州</p>
                        <p class="mr-4 pl-[1.5vw] pr-[1.5vw] py-[1vw] rounded-[2vw] text-[3vw]" style="border: 1px solid #ccc;">村龄 4年</p>
                    </div>
                    <div class="flex justify-center items-center pb-[3vw]">
                        <router-link to={`/BianJizliao/`}>
                            <p class="w-[24vw] p-[2vw] mr-[1vw]" style="border-radius: 15vw;border: 1px solid #ccc; ">编辑资料</p>
                        </router-link>
                        <button onClick={this.change} style="transition: all 1s;"
                            class={this.isHeight ? 'rotate-0' : 'rotate-180'} >
                            <Icon icon="icon-park-outline:up-c" color="#ccc" class=" text-[10vw]" />
                        </button>
                    </div>
                    <div class="overflow-auto" id='more' style="transition: all 1s;height:43vw">
                        <div class="flex w-[150vw] mb-[3.7vw]" >
                            <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                <p class="text-[3vw]">橙留香</p>
                                <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                    共同关注了橙留香橙留香
                                </p>
                                <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                    +关注
                                </p>
                            </div>
                            <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                <p class="text-[3vw]">橙留香</p>
                                <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                    共同关注了橙留香橙留香
                                </p>
                                <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                    +关注
                                </p>
                            </div>
                            <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                <p class="text-[3vw]">橙留香</p>
                                <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                    共同关注了橙留香橙留香
                                </p>
                                <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                    +关注
                                </p>
                            </div>
                            <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                <p class="text-[3vw]">橙留香</p>
                                <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                    共同关注了橙留香橙留香
                                </p>
                                <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                    +关注
                                </p>
                            </div>
                            <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                <p class="text-[3vw]">橙留香</p>
                                <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                    共同关注了橙留香橙留香
                                </p>
                                <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                    +关注
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    data() {
        return {
            proples: [1, 2, 3, 4, 5, 6],
            msg: 'asdasdas',
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
            isHeight: true,
            //用户动态
            userDynamics: ''
        }
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
        }
    },
    async created() {
        // axios
        //     .get(
        //         `https://api.ipify.org/?format=json`
        //     )
        //     .then((res) => {
        //         const IP = myIP(res.data.ip)
        //         this.IP = res.data.ip
        //         console.log(this.IP)
        //         console.log(IP)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
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

    }
}