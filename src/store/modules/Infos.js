import {
  fetchTrendAlbum,
  fetchPersonalInfos,
  fetchTopPlaylist,
  fetchTrackPlaylist,
  fetchPlaylistDetail
} from '@/services/api';

const state = {
  infos: {}
};

const mutations = {
  FETCH_INFOS(state, infos) {
    state.infos = infos;
  }
};

const actions = {
  async fetchInfos({ commit }, infos) {
    commit('LOADING', true);

    await fetchPersonalInfos().then(res => {
      commit('FETCH_INFOS', res);
      commit('LOADING', false);
    });
  }
};

const getters = {
  getInfos: state => {
    return state.infos.data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
