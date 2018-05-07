<template>
    <div class='root'>
        <div class="logo-container">
            <h1 class="logo">Logo</h1>
        </div>
        <div class="login-container">
            <el-card class="box-card login-box">
                <h1>Log in to your account</h1>
                <el-form @submit.prevent="onLogin" :model="loginForm" status-icon :rules="loginRule" ref="loginForm" label-width="120px" class="login-form" :label-position="'top'">
                    <el-form-item label="" prop="email">
                        <el-input type="text" v-model="loginForm.email" auto-complete="off" @keyup.enter.native="checkEnter">
                            <template slot="prepend">
                                <i class="fa fa-envelope"></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input type="password" v-model="loginForm.password" auto-complete="off" @keyup.enter.native="checkEnter">
                            <template slot="prepend">
                                <i class="fa fa-key"></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary btn" @click="onLogin('loginForm')">Log in</el-button>
                    </el-form-item>
                </el-form>
                <div class="error-text">{{errorMessage}}</div>
            </el-card>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js Login",
      loginForm: {
        email: "",
        password: ""
      },
      loginRule: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur,change"
          },
          {
            type: "email",
            message: "Please input correct email addresss",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" }
        ]
      }
    };
  },
  created (){
     console.log()
  },
  computed:   {
      ...mapGetters([
        'errorMessage'
      ])
  },
  methods: {
    checkEnter(event) {
      this.onLogin();
    },
    onLogin() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          alert("submit!");
          const payload = {
            username: this.loginForm.email,
            password: this.loginForm.password
          };
          this.$store.dispatch("login", payload);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.error-text{
  color: #f56c6c;
}
.login-form {
  padding: 40px;
}
.logo {
  background: red;
  width: 128px;
  height: 128px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5% 0;
}
.el-input {
  min-width: 320px;
}
.btn {
  width: 100%;
}
.root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background:#535353; */
}
.login-box {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  /* box-shadow: none; */
}
.box-card {
  width: 480px;
}
@media only screen and (max-width: 425px) {
  .login-box {
    width: auto;
    height: auto;
  }
  .el-input {
    min-width: 200px;
  }
  .login-form {
    padding: 20px;
  }
}
h1 {
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
