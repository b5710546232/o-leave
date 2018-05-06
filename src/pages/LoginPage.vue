<template>
    <div class='root'>
        <div>
            <h1 class="logo">Logo</h1>
        </div>
        <el-card class="box-card login-box">
            <h1>Log in to your account</h1>
            <el-form :model="ruleFormLogin" status-icon :rules="loginRule" ref="ruleFormLogin" label-width="120px" class="login-form" :label-position="'top'">
                <el-form-item label="" prop="pass">
                    <el-input type="text" v-model="ruleFormLogin.pass" auto-complete="off">
                        <template slot="prepend"><i class="fa fa-envelope"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item label="" prop="checkPass">
                    <el-input type="password" v-model="ruleFormLogin.checkPass" auto-complete="off">
                        <template slot="prepend"><i class="fa fa-key"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary btn" @click="submitForm('ruleFormLogin')">Log in</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js Login",
      ruleFormLogin: {},
      loginRule:{}
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.login-form{
    padding: 40px;
}
.logo{
    background:red;
    width: 150px;
    height:150px;
    position: absolute;
    top:10%;
     left: 50%;
    transform: translate(-50%, 0);
}
.el-input {
    min-width: 320px;
  }
.btn{
    width: 100%;
}
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
    .login-form{
        padding: 20px;
    }
}
h1{
    font-weight: 700;
    font-size: 1.25rem;
}
</style>
