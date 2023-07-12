import MusicPlayback from './MusicPlayback.vue';
MusicPlayback.install = function (V) {
  V.component(this.name, this);
};
export default MusicPlayback;