import Drawer from './Drawer.vue';
Drawer.install = function (V) {
  V.component(this.name, this);
};
export default Drawer;