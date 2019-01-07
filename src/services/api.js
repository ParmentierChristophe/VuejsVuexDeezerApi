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

export const fetchTrendAlbum = async () =>
  await api.get('chart/0/albums').then(res => {
    return res.data;
  });
export const fetchTopPlaylist = async () =>
  await api.get('chart/0/playlists').then(res => {
    return res.data;
  });

export const fetchPersonalInfos = async () =>
  await api.get('/infos').then(res => {
    return res;
  });

export const fetchPlaylistDetail = async id =>
  await api.get(`playlist/${id}`).then(res => {
    return res.data;
  });

export const fetchTrackPlaylist = async id =>
  await api.get(`playlist/${id}/tracks`).then(res => {
    return res.data;
  });
