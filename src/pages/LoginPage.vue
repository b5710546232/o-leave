<template>
    <div class='root'>
        <div class='container'>
            <div>
                <el-input placeholder="Please input" v-model="msg"></el-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Login'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
