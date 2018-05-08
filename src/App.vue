<template>
  <div id="app">
    <nav v-if="$route.name!=='LoginPage'" class="navbar" role="navigation" aria-label="main navigation" id="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
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
#navbar {
  /* background-color: #00fa9a; */
  /* border-bottom: solid 1.5px #00fa9a; */
  /* ;border-radius:2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3); */
  box-shadow:0 1px 3px rgba(0,0,0,.3);
  /* box-sizing:border-box;width:50%}.el-dialog.is- */
}
</style>
