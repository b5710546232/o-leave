<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: "App",
  components:{
    Navbar
  }
};
</script>

<style>
@font-face {
    font-family: "Roboto";
    src: url('../static/font/Roboto-Regular.ttf');
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
