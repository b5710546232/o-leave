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

          <router-link class="navbar-item" to="/line" >
        <span>
          Connect &nbsp; <i class="fab fa-line fa-lg green"></i>
        </span>
        </router-link>
                  <router-link v-if="userInfo.role==='Administrator'" class="navbar-item" to="/manangeuser" >
          Manage-user
        </router-link>
          <router-link v-if="userInfo.role==='Administrator'" class="navbar-item" to="/adduser" >
          Add-user
        </router-link>

        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-item avatar-container pointer btn" to="/profile">
                <img class="avatar" :src="userInfo.image_path"  width="20" height="20"
                @error="handleImgError"
                >
          {{userInfo.fname}} {{userInfo.lname}}
        </router-link>
            <div class="navbar-dropdown is-right">
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
    import {
        Loading
    } from 'element-ui';
import {mapGetters} from 'vuex'
  export default {
    name: "Navbar",
    data() {
      return {
        isActive:false,
        avatarUrl:''
      };
    },
    mounted(){
      if(!this.userInfo.isLoaded){
        this.fetchGetMe()
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods:{
         fetchGetMe(){
                let loadingInstance = Loading.service({
                fullscreen: true
            })
            return this.$store.dispatch('getMe', this.token)
            .then(() => {
                loadingInstance.close()
            }).catch(()=>{
              loadingInstance.close()
            })
            },
      toggleNavbar(){
        this.isActive = !this.isActive
      },
      onLogout(){
        localStorage.setItem('accessToken','')
        this.$router.go('/')
      },
      openLineMessageBox(){
        
      },
      handleImgError(){
        const DEFAULT_IMG ='../../static/images/blank_profile.png'
        this.$store.dispatch('setUserInfoImagePath',DEFAULT_IMG)
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  }
  .btn:hover, active{
    background:rgba(0, 0, 0, .03);
  }
  .green{
    color:#1FC923;
}
.avatar{
  margin-right:8px;
  object-fit: cover;
}
  .pointer{
    cursor: pointer;
  }
</style>
