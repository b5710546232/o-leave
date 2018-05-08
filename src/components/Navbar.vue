<template>
  <div class="root">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="auto" height="150">
        </router-link>

        <div class="navbar-burger burger is-active" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
              Home
          </router-link>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
          Jub warata
        </a>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
              Your profile
            </a>
              <a class="navbar-item">
              Edit profile
            </a>
            </div>
  
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {};
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  }
</style>
