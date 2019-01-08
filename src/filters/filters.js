import Vue from 'vue';

Vue.filter('trackTime', (time, unit) => {
  if (typeof time !== 'number' || !time) {
    return '0:00';
  }
  // HTMLAudioElement provides time in seconds
  if (unit === 'ms') {
    time /= 1000; // convert milliseconds to seconds
  }
  let hours = Math.floor(time / 3600);
  let minutes = `${Math.floor((time % 3600) / 60)}`.slice(-2);
  let seconds = `0${Math.floor(time % 60)}`.slice(-2);
  if (hours) {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
});
