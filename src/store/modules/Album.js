import { fetchTrendAlbum } from '@/services/api';

const state = {
  topAlbum: {}
};

const mutations = {
  FETCH_TOP_ALBUM(state, topAlbum) {
    state.topAlbum = topAlbum;
  }
};

const actions = {
  async fetchTopAlbum({ commit }) {
    commit('LOADING', true);
    await fetchTrendAlbum().then(res => {
      commit('FETCH_TOP_ALBUM', res.data);
      commit('LOADING', false);
    });
  }
};

const getters = {
  getTopAlbum: state => {
    return state.topAlbum.data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
