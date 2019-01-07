<template>
  <div>
    <div class="container_img">
      <img :src="this.$store.state.playlistDetailTrack.playlistDetails.picture_xl" alt>
    </div>
    <h1>{{this.$store.state.playlistDetailTrack.title}}</h1>
    <div
      v-for="(item, index) in this.$store.state.playlistDetailTrack.tracks"
      :key="index"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: ["TopPlaylist"],

  mounted() {
    this.$store.dispatch("fetchPlaylistDetail", this.$route.params.id);
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
.container_img {
  background-color: rgb(43, 43, 43);
  height: 350px;
}
img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>
