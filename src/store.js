import Vue from 'vue';
import Vuex from 'vuex';

import {
  fetchTrendAlbum,
  fetchPersonalInfos,
  fetchTopPlaylist,
  fetchTrackPlaylist,
  fetchPlaylistDetail
} from './services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topAlbum: {},
    topPlaylist: [],
    playlists: {},
    loading: true,
    infos: {},
    playlistDetail: {},
    playlistDetailTrack: {}
  },
  mutations: {
    FETCH_INFOS(state, infos) {
      state.infos = infos;
    },
    FETCH_TOP_ALBUM(state, topAlbum) {
      state.topAlbum = topAlbum;
    },
    FETCH_TOP_PLAYLIST(state, topPlaylist) {
      state.loading = false;
      state.topPlaylist = topPlaylist;
    },
    FETCH_PLAYLIST(state, playlists) {
      state.playlists = playlists;
    },
    FETCH_PLAYLIST_DETAILS(state, playlistDetail) {
      state.loading = false;

      state.playlistDetail = playlistDetail;
    },

    FETCH_PLAYLIST_SONG(state, playlistDetailTrack) {
      state.playlistDetailTrack = playlistDetailTrack;
    }
  },
  actions: {
    async fetchTopAlbum({ commit }, topAlbum) {
      this.loading = true;

      topAlbum = await fetchTrendAlbum();
      commit('FETCH_TOP_ALBUM', topAlbum);
    },

    async fetchTopPlaylist({ commit }) {
      this.loading = true;

      let playlists = await fetchTopPlaylist();
      let topPlaylist = playlists.data.slice(0, 2);
      let othersPlaylists = playlists.data.slice(2);
      let musics = await Promise.all([fetchTrackPlaylist(topPlaylist[0].id), fetchTrackPlaylist(topPlaylist[1].id)]);

      commit('FETCH_TOP_PLAYLIST', [
        {
          album: topPlaylist[0],
          tracks: musics[0].data.slice(0, 4)
        },
        {
          album: topPlaylist[1],
          tracks: musics[1].data.slice(0, 4)
        }
      ]);
      commit('FETCH_PLAYLIST', othersPlaylists);

      // for (let index = 0; index < 2; index++) {
      //   console.log(index);
      //   let musics = await fetchTrackPlaylist(playlists.data[index].id);
      //   console.log(musics.data);
      //   commit('FETCH_PLAYLIST_SONG', musics);
      // }
    },

    async fetchInfos({ commit }, infos) {
      this.loading = true;

      infos = await fetchPersonalInfos();
      commit('FETCH_INFOS', infos);
    },

    async fetchPlaylistDetail({ commit }, id) {
      // id = await fetchTrackPlaylist(id);
      id = await fetchPlaylistDetail(id);

      commit('FETCH_PLAYLIST_SONG', {
        tracks: id.tracks.data,
        title: id.title,
        playlistDetails: id
      });
    }
  },
  getters: {
    getTopAlbum: state => {
      return state.topAlbum.data;
    },
    getTopPlaylists: state => {
      return state.topPlaylist;
    },

    getInfos: state => {
      return state.infos.data;
    },
    getMusics: state => {
      return state.playlist;
    }
  }
});
