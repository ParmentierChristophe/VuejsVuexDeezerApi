import axios from 'axios';

// ***
// TODO: Fix error CORS without https://cors-anywhere.herokuapp.com/
// PISTE : Use JSONP : https://github.com/camsong/fetch-jsonp, https://jsfiddle.net/4dmfo0dd/1/
// ***
const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/',
  headers: {
    mode: 'no-cors',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    withCredentials: true,
    credentials: 'same-origin'
  }
});
// *
// ALBUM FETCH
// *

export const fetchTrendAlbum = () => api.get('chart/0/albums');

export const fetchAlbumDetail = id => api.get(`album/${id}`);

// *
// PLAYLISTS FETCH
// *

export const fetchTopPlaylist = () => api.get('chart/0/playlists');

export const fetchPlaylistDetail = id => api.get(`playlist/${id}`);

export const fetchTrackPlaylist = id =>
  api.get(`playlist/${id}/tracks`).then(res => {
    return res.data;
  });

// *
// INFOS FETCH
// *

export const fetchPersonalInfos = () => api.get('/infos');
