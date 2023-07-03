import index2 from './indexView/index2.vue';
import index from './index.vue';
const viewMap = {
    index2,
    index
}
// component + hashchange + mixin
export default{
    computed: {
        currentComponent() {
            return viewMap[this.visibleView]
        }
    },
    data() {
        return {
            visibleView: 'index'
        }
    },
    beforeCreate() {
        window.onhashchange = () => {
            this.visibleView = location.hash.replace('#', '')
        }
    },

}