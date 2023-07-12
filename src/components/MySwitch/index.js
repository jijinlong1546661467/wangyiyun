import MySwitch from './MySwitch.vue';
MySwitch.install = function (V) {
  V.component('v-switch', MySwitch);
}
export default MySwitch