import Menu from './menu.vue';
Menu.install = function (V) {
  V.component(this.name, this);
};
export default Menu;