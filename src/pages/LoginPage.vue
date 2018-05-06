<template>
    <div class='root'>
        <el-card class="box-card login-box">
            <h1>Oleave</h1>
            <el-form :model="ruleFormLogin" status-icon :rules="rules2" ref="ruleFormLogin" label-width="120px" class="login-form" :label-position="'top'">
                <el-form-item label="Email" prop="pass">
                    <el-input type="text" v-model="ruleFormLogin.pass" auto-complete="off">
                    </el-input>
                </el-form-item>
                <el-form-item label="Password" prop="checkPass">
                    <el-input type="password" v-model="ruleFormLogin.checkPass" auto-complete="off">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleFormLogin')">Log in</el-button>
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
      ruleFormLogin: {}
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login-box {
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 425px) {
    .login-box {
        width: 90%;
    }
}
</style>
