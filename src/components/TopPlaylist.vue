<template>
  <div class="hello">
    <div class="Card">
      <div class="head-card">
        <img :src="playlist.picture_big">
      </div>
      <div class="body-card">
        <h2>{{playlist.title}}</h2>
        <p class="text-grey-darker text-base">{{playlist.nb_tracks}} music</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPlaylist",
  props: ["playlist"]
};
</script>

<style scoped>
.Card {
  max-width: 20rem;
  width: 300px;
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
  z-index: 3;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
</style>
