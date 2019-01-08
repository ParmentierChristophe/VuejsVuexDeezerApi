import { fetchTopPlaylist, fetchTrackPlaylist, fetchPlaylistDetail } from '@/services/api';

const state = {
  topPlaylist: [],
  playlists: {},
  playlistDetailTrack: {}
};

const mutations = {
  FETCH_TOP_PLAYLIST(state, topPlaylist) {
    state.loading = false;
    state.topPlaylist = topPlaylist;
  },
  FETCH_PLAYLIST(state, playlists) {
    state.playlists = playlists;
  },

  FETCH_PLAYLIST_SONG(state, playlistDetailTrack) {
    state.playlistDetailTrack = playlistDetailTrack;
  }
};

const actions = {
  async fetchTopPlaylist({ commit }) {
    commit('LOADING', true);

    let playlists = await fetchTopPlaylist().then(res => {
      return res.data;
    });
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
    commit('LOADING', false);
  },

  async fetchPlaylistDetail({ commit }, id) {
    commit('LOADING', true);
    commit('FETCH_PLAYLIST_SONG', {});
    await fetchPlaylistDetail(id).then(res => {
      commit('FETCH_PLAYLIST_SONG', {
        tracks: res.data.tracks.data,
        title: res.data.title,
        playlistDetails: res.data
      });
      commit('LOADING', false);
    });
  }
};

const getters = {
  getTopPlaylists: state => {
    return state.topPlaylist;
  },

  getPlaylistDetails: state => {
    return state.playlistDetailTrack;
  },

  getMusics: state => {
    return state.playlist;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
