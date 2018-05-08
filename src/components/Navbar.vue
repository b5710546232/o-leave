<template>
  <div class="root">
    <nav class="navbar" v-if="$route.name!=='LoginPage'">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="auto" height="150">
        </router-link>

        <div ref="burger" :class="{'navbar-burger burger is-active':isActive,'navbar-burger burger':!isActive}" data-target="oleaveNavbar" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  
      <div ref="menu" :class="{'navbar-menu is-active':isActive,'navbar-menu':!isActive}">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
              Home
          </router-link>
        <span class="navbar-item pointer btn">
          Connect &nbsp; <i class="fab fa-line fa-lg"></i>
        </span>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-item pointer">
          Jub warata
        </span>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
              Your profile
            </a>
              <router-link class="navbar-item" to="edituserprofile">
              Edit profile
            </router-link>
              <a class="navbar-item pointer"  href="#" @click="onLogout">
              Log out
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
      return {
        isActive:false
      };
    },
    methods:{
      toggleNavbar(){
        this.isActive = !this.isActive
      },
      onLogout(){
        localStorage.setItem('accessToken','')
        this.$router.go('/')
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navbar {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  }
  .btn:hover, active{
    background:rgba(0, 0, 0, .03);
  }
  .pointer{
    cursor: pointer;
  }
</style>
