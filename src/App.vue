<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>
export default {
  name: 'app'
}
<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1024px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
