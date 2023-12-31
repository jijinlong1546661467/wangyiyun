import { areaList } from '@vant/area-data';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const Wrapper = styled.div`
    .van-picker__confirm{
        color:red
    }
`
export default {
    render() {
        return (
            <Wrapper>
                <van-popup
                    v-model={this.popupVisible}
                    position="bottom"
                    style={{ height: '40%' }}
                >
                    <van-area
                        columns-num="2"
                        confirm-button-text="完成"
                        area-list={areaList}
                        onConfirm={this.confirm}
                    />
                </van-popup>
            </Wrapper>
        );
    },
    data() {
        return {
            popupVisible: true,
        };
    },
    methods: {
        confirm(e) {
            this.popupVisible = false;
            console.log(e);
        },
    },
};
