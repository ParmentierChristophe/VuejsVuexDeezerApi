<template>
  <div class="hello">
    <div class="Card">
      <h2>{{album.title}}</h2>
      <p>{{album.artist.name}}</p>
      <img :src="album.cover_big">
    </div>
  </div>
</template>

<script>
export default {
  name: "TopAlbum",
  props: ["album"]
};
</script>

<style scoped>
.Card {
  width: 300px;
  height: 300px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template: 1fr 1fr;
  margin: 20px;
  z-index: 2;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  cursor: pointer;
}
.Card:hover {
  transform: scale(1.1, 1.1) !important;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}
.Card:hover img {
  transform: translateY(-20px);
  height: 120%;
  width: 120%;
  -webkit-filter: blur(5px) grayscale(1); /* Safari 6.0 - 9.0 */
  filter: blur(5px) grayscale(1);
}
.Card img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  -webkit-filter: blur(0); /* Safari 6.0 - 9.0 */
  filter: blur(0);
  z-index: 3;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.Card h2 {
  color: white;
  font-size: 30px;
  width: 190px;
  z-index: 4;
}
.Card p {
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  align-self: end;
  z-index: 4;
}
</style>
