import { fetchTrendAlbum, fetchAlbumDetail } from '@/services/api';

const state = {
  topAlbum: {},
  albumDetail: {}
};

const mutations = {
  FETCH_TOP_ALBUM(state, topAlbum) {
    state.topAlbum = topAlbum;
  },
  FETCH_ALBUM_DETAIL(state, albumDetail) {
    state.albumDetail = albumDetail;
  }
};

const actions = {
  async fetchTopAlbum({ commit }) {
    commit('LOADING', true);
    await fetchTrendAlbum().then(res => {
      commit('FETCH_TOP_ALBUM', res.data);
      commit('LOADING', false);
    });
  },

  async fetchAlbumDetail({ commit }, id) {
    commit('LOADING', true);

    await fetchAlbumDetail(id).then(res => {
      commit('FETCH_ALBUM_DETAIL', {
        tracks: res.data.tracks.data,
        title: res.data.title,
        albumDetail: res.data
      });
      commit('LOADING', false);
    });
  }
};

const getters = {
  getTopAlbum: state => {
    return state.topAlbum.data;
  },
  getAlbumDetails: state => {
    return state.albumDetail;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
