<template>
  <div class="hello">
    <router-link :to="`/playlist/${playlist.id}`">
      <div class="Card">
        <div class="head-card">
          <p class="tag">{{playlist.nb_tracks}} music</p>

          <img :src="playlist.picture_big">
        </div>
        <div class="body-card">
          <h2>{{playlist.title}}</h2>
          <p>{{playlist.description}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OtherPlaylist",
  props: ["playlist"]
};
</script>

<style scoped>
.Card {
  max-width: 20rem;
  width: 300px;
  height: 320px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);

  margin: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  cursor: pointer;
}

.head-card {
  position: relative;
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
.body-card {
  padding: 1rem 1.5rem;
}

.Card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  width: 100%;
  top: 0;
  -webkit-filter: blur(0);
  filter: blur(0);
  z-index: 1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.Card:hover img {
  transform: translateY(-20px);
  -webkit-filter: blur(1px) grayscale(1); /* Safari 6.0 - 9.0 */
  filter: blur(1px) grayscale(1);
}
</style>
