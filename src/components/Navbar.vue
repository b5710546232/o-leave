<template>
  <div class="root">
    <nav class="navbar" v-if="$route.name!=='LoginPage'">
      <div class="navbar-brand">

        <span class="navbar-item pointer btn" @click="routeByRole">
          <img src="../assets/logo.png" alt="" width="auto" height="150">
        </span>

        <div ref="burger" :class="{'navbar-burger burger is-active':isActive,'navbar-burger burger':!isActive}" data-target="oleaveNavbar" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  
      <div ref="menu" :class="{'navbar-menu is-active':isActive,'navbar-menu':!isActive}">
        <div class="navbar-start">
          <span class="navbar-item pointer btn" @click="routeByRole">
              Home
          </span>

          <router-link class="navbar-item" to="/" >
        <span  >
          Connect &nbsp; <i class="fab fa-line fa-lg"></i>
        </span>
        </router-link>

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
import {mapGetters} from 'vuex'
  export default {
    name: "Navbar",
    data() {
      return {
        isActive:false
      };
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods:{
      toggleNavbar(){
        this.isActive = !this.isActive
      },
      onLogout(){
        localStorage.setItem('accessToken','')
        this.$router.go('/')
      },
      openLineMessageBox(){
        
      },
      routeByRole(){
        let role = this.userInfo.role
        if(role){
          this.$router.push(`/${String(role).toLowerCase()}`)
        }
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
