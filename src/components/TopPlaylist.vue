<template>
  <div class="hello">
    <router-link :to="`/playlist/${topPlaylist.album.id}`">
      <div class="Card">
        <div class="head-card">
          <p class="tag">{{topPlaylist.album.nb_tracks}} music</p>

          <img :src="topPlaylist.album.picture_big">
        </div>
        <div class="body-card">
          <h2>{{topPlaylist.album.title}}</h2>
          <ol>
            <li v-for="(musics, index) in topPlaylist.tracks" :key="index">
              <div>{{ index + 1 }}</div>
              <div>
                <strong>{{' . '+ musics.title}}</strong>
                |
                {{musics.artist.name}}
              </div>
              <div>{{ musics.duration | trackTime}}</div>
            </li>...
          </ol>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TopPlaylist",
  props: ["topPlaylist"],
  filters: {
    trackTime: (time, unit) => {
      if (typeof time !== "number" || !time) {
        return "0:00";
      }
      // HTMLAudioElement provides time in seconds
      if (unit === "ms") {
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
    }
  }
};
</script>

<style scoped>
.Card {
  max-width: 40rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  margin: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  cursor: pointer;
}
.tag {
  position: absolute;
  left: 2rem;
  top: 1rem;
  z-index: 3;
  font-weight: normal;
  font-size: 14px;
  padding: 0.2rem 0.75rem;
  color: #dbdbdb;
  background-color: #030303;
  border-radius: 9999px;
}
.head-card {
  position: relative;
}
.body-card {
  padding: 1rem 1.5rem;
}

.Card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  width: 100%;
  top: 0;
  z-index: 1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.Card:hover img {
  transform: translateY(-20px);
  -webkit-filter: blur(5px) grayscale(1); /* Safari 6.0 - 9.0 */
  filter: blur(5px) grayscale(1);
}
li {
  display: flex;
  padding: 0.3em;
}
li:hover {
  background-color: rgb(185, 185, 185);
}
li div:last-child {
  margin-left: auto;
}
a {
  z-index: 8;
}
</style>
