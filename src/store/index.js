import Vue from 'vue';
import Vuex from 'vuex';
import Loading from './modules/Loading';
import Playlist from './modules/Playlist';
import Album from './modules/Album';
import Infos from './modules/Infos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Playlist,
    Album,
    Infos
  }
});
