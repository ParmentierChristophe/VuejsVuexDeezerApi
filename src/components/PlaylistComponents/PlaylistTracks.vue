<template>
  <div class="track_container">
    <div class="track_image">
      <img :src="track.album.cover">
    </div>
    <div class="track_icon_play">
      <svg version="1.1" viewBox="0 0 314.068 314.068" class="stroke">
        <g>
          <g id="_x33_56._Play">
            <g>
              <path
                class="stroke"
                d="M293.002,78.53C249.646,3.435,153.618-22.296,78.529,21.068C3.434,64.418-22.298,160.442,21.066,235.534
				c43.35,75.095,139.375,100.83,214.465,57.47C310.627,249.639,336.371,153.62,293.002,78.53z M219.834,265.801
				c-60.067,34.692-136.894,14.106-171.576-45.973C13.568,159.761,34.161,82.935,94.23,48.26
				c60.071-34.69,136.894-14.106,171.578,45.971C300.493,154.307,279.906,231.117,219.834,265.801z M213.555,150.652l-82.214-47.949
				c-7.492-4.374-13.535-0.877-13.493,7.789l0.421,95.174c0.038,8.664,6.155,12.191,13.669,7.851l81.585-47.103
				C221.029,162.082,221.045,155.026,213.555,150.652z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="track_title">{{track.title}}</div>
    <div class="track_artist">{{track.artist.name}}</div>
    <div class="track_time">{{track.duration | trackTime}}</div>
  </div>
</template>

<script>
export default {
  props: ["track"]
};
</script>

<style scoped>
.track_container {
  padding: 0.5em;
  width: 80%;
  margin: 0.5em auto;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: rgb(235, 235, 235);
  text-align: center;
}
.track_container div {
  padding: 0.5em;
}
.track_container div:last-child {
  margin-left: auto;
}
.track_image img {
  width: 50%;
}
.track_title {
  font-weight: bold;
}
.track_artist {
  font-size: 12px;
  font-style: italic;
}

.track_icon_play {
  width: 10%;
}
.track_icon_play svg {
  width: 20%;
}

.stroke:hover {
  cursor: pointer;
  stroke: red;
  fill: red;
}
</style>
