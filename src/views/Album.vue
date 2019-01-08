<template>
  <div>
    <div v-if="this.$store.state.Loading.loading" class="loader">
      <Loader/>
    </div>
    <div v-else>
      <div class="container_img">
        <img :src="Album.cover">
      </div>
      <h1>{{Album.title}} | {{Album.albumDetail.duration | trackTime}}</h1>
      <h3
        class="release_date"
      >release date : {{Album.albumDetail.release_date |moment("dddd, MMMM Do YYYY")}}</h3>
      <div v-for="(track, index) in Album.tracks" :key="index">
        <Tracks :track="track" :index="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/SharedComponents/Loader";
import Tracks from "@/components/SharedComponents/Track";

import { mapGetters } from "vuex";

export default {
  name: "Album",
  components: {
    Loader,
    Tracks
  },
  computed: {
    ...mapGetters({
      Album: "getAlbumDetails"
    })
  },
  created() {
    this.$store.dispatch("fetchAlbumDetail", this.$route.params.id);
  }
};
</script>
<style scoped>
.loader {
  text-align: center;
  padding: 20px;
}
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
.release_date {
  text-align: center;
}
</style>
