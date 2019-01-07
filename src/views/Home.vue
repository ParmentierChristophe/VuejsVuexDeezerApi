<template>
  <div class="home">
    <div v-if="this.$store.state.loading" class="loader">
      <Loader/>
    </div>

    <div v-else>
      <h2>Top Albums {{infos.country}}</h2>
      <div class="Cards">
        <div v-for="album in albums" v-bind:key="album.id">
          <TopAlbum :album="album"/>
        </div>
      </div>
      <h2>Les Playlists du moment</h2>

      <div class="Cards">
        <div v-for="playlist in playlists" v-bind:key="playlist.id">
          <TopPlaylist :playlist="playlist"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopAlbum from "@/components/TopAlbum";
import TopPlaylist from "@/components/TopPlaylist";
import Loader from "@/components/Loader";

import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    TopAlbum,
    TopPlaylist,
    Loader
  },
  computed: {
    ...mapGetters({
      albums: "getTopAlbum",
      infos: "getInfos",
      playlists: "getPlaylists"
    })
  },

  created() {
    this.$store.dispatch("fetchInfos");
    this.$store.dispatch("fetchTopAlbum");
    this.$store.dispatch("fetchTopPlaylist");
  }
};
</script>

<style scoped>
.loader {
  text-align: center;
  padding: 20px;
}
h2 {
  text-align: center;
}
.Cards {
  display: flex;
  flex-wrap: wrap;
  padding-top: 3em;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  color: #27272b;
}
</style>

