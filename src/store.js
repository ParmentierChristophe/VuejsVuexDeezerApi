import Vue from 'vue';
import Vuex from 'vuex';

import { fetchTrendAlbum, fetchPersonalInfos, fetchTopPlaylist, fetchTrackPlaylist } from './services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topAlbum: {},
    topPlaylist: {},
    loading: true,
    infos: {}
  },
  mutations: {
    FETCH_TOP_ALBUM(state, topAlbum) {
      state.loading = false;
      state.topAlbum = topAlbum;
    },
    FETCH_TOP_PLAYLIST(state, topPlaylist) {
      state.loading = false;
      state.topPlaylist = topPlaylist;
    },
    FETCH_INFOS(state, infos) {
      state.loading = false;
      state.infos = infos;
    }
  },
  actions: {
    async fetchTopAlbum({ commit }, topAlbum) {
      topAlbum = await fetchTrendAlbum();
      commit('FETCH_TOP_ALBUM', topAlbum);
    },

    async fetchTopPlaylist({ commit }) {
      let topPlaylist = await fetchTopPlaylist();
      commit('FETCH_TOP_PLAYLIST', topPlaylist);
    },

    async fetchInfos({ commit }, infos) {
      infos = await fetchPersonalInfos();
      commit('FETCH_INFOS', infos);
    }
  },
  getters: {
    getTopAlbum: state => {
      return state.topAlbum.data;
    },
    getPlaylists: state => {
      return state.topPlaylist.data;
    },
    getInfos: state => {
      return state.infos.data;
    }
  }
});
