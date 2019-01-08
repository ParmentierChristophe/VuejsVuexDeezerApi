<template>
  <div id="nav">
    <router-link to="/">
      <div class="logo">
        <img src="@/assets/deezer.png" alt srcset>
      </div>
    </router-link>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#nav {
  padding: 30px;
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #fff;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #030303;
}
</style>

