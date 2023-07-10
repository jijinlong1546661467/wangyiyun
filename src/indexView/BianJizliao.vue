<template>
    <div>
        <!-- 头部 -->
        <div class="flex text-[4.4vw] items-center pl-[4.2vw] pt-[4.2vw] mb-[3.8vw]">
            <router-link :to="{ path: '/MyHome/' }">
                <Icon icon="ri:arrow-left-line" style="font-size: 5vw" class="font-600  text-[black]" />
            </router-link>
            <p>我的资料</p>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class=" h-[15vw] mt-[3vw]" style="border-bottom: 1px solid #f5f5f5;">
                <div class="h-[12vw] flex items-center justify-between">
                    <p>头像</p>
                    <img :src="headImg" alt="" class="w-[11vw] h-[11vw] rounded-[50%]">
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>昵称</p>
                <router-link :to="{ path: `/changeName` }">
                    <p class="text-[#ccc]">{{ userName }}</p>
                </router-link>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>性别</p>
                <p class="text-[#ccc]">{{ sex }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]">
                <p>二维码</p>
                <p>
                    <Icon icon="mingcute:qrcode-line" class=" text-[#ccc]" />
                </p>
            </div>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>生日</p>
                <van-cell title="选择单个日期" :value="date" @click="showBirthday">
                    <p class="text-[#ccc]">{{ birthday }}</p>
                </van-cell>
                <van-calendar v-model="showBirthdayNum" @confirm="onConfirm" />
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>地区</p>
                <van-cell is-link @click="showPopup">
                    <p class="text-[#ccc]">{{ region }}</p>
                </van-cell>
                <van-popup v-model="show">
                    <p class="p-[5vw] font-bold">请选择省市</p>
                    <van-area :area-list="areaList" :columns-num="2" @confirm="change" />
                </van-popup>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>大学</p>
                <p class="text-[#ccc]">{{ university }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>音乐标签</p>
                <p class="text-[#ccc]">{{ musicTags }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>简介</p>
                <p class="text-[#ccc]">{{ briefIntroduction }}</p>
            </div>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p @click="save">个人主页隐私设置</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>主页模块顺序设置</p>
            </div>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]">
                <p>账号和绑定设置</p>
            </div>
        </div>
    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import { loginStatus, userDetail, fetchUserAccount,updateUser } from '@/request'
export default {
    data() {
        return {
            date: '',
            showBirthdayNum: false,
            //地区数据
            areaList,
            //弹出层
            show: false,
            //用户名
            userName: '游客',
            //头像
            headImg: '',
            //性别
            sex: '未设置',
            // 生日
            birthday: '未设置',
            // 地区
            region: '湖北省 随州市',
            // 大学
            university: '未填写',
            // 音乐标签
            musicTags: '选择标签',
            // 简介
            briefIntroduction: '还没有简介',
            //省份代码
            city:null,
            //城市代码
            city2:null,
        }
    },
    methods: {
        // 获取生日
        getBirthday(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        },
        //展示弹出层
        showPopup() {
            this.show = true;
        },
        //展示弹出层
        showBirthday() {
            this.showBirthdayNum = true;
        },
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            const [start, end] = date;
            this.showBirthdayNum = false;
            this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        change(e) {
            this.show = false
            this.region = `${e[0].name}  ${e[1].name}`
            this.city = e[0].code
            this.city2 = e[1].code
            console.log(e)
        },
        save() {
            // console.log(123)
            // //姓名参数
            // let name = this.userName
            // //性别参数
            // let sex = 0
            // if (this.sex === '男') {
            //     sex = 1
            // } else if(this.sex === '女') {
            //     sex = 2
            // }
            // //生日时间戳参数
            // const timestamp = new Date(this.birthday).getTime();
            // console.log(name, sex, timestamp, this.city,this.city2, this.briefIntroduction)
            // if()
            // console.log(`gender=${sex}&signature=${this.briefIntroduction}&city=${this.city2}&nickname=${name}&birthday=${timestamp}&province=${this.city}`)
            // updateUser(`gender=${sex}&signature=${this.briefIntroduction}&city=${this.city2}&nickname=${name}&birthday=${timestamp}&province=${this.city}`)
        }
    },
    async created() {
        //用户等级
        const loginStatu = await loginStatus()
        //获取登录后的用户名
        this.userName = loginStatu.data.data.profile.nickname
        //头像
        this.headImg = loginStatu.data.data.profile.avatarUrl

        //获取用户详情
        const userAccount = await fetchUserAccount()
        const userDateil = await userDetail(userAccount.data.account.id)
        //判断有没有设置生日
        if (userAccount.data.profile.birthday > 0) {
            this.birthday = this.getBirthday(userAccount.data.profile.birthday)
        }
        //判断男女
        if (userAccount.data.profile.gender == 1) {
            this.sex = '男'
        } else if (userAccount.data.profile.gender == 0) {
            this.sex = '保密'
        } else {
            this.sex = '女'
        }
        //简介
        this.briefIntroduction = userDateil.data.profile.signature
    }
}
</script>

<style>
.van-picker-column__item--selected {
    color: red;
}

.van-popup {
    border-radius: 3vw;
}

.van-picker {
    border-radius: 3vw;
    width: 80vw;
    display: flex;
    flex-direction: column-reverse;
}

.van-picker__toolbar {
    justify-content: flex-end;

}

.van-picker__toolbar button {
    color: red;
}
</style>