<template>
    <div class="root">
        <div class="form-container">
        <h1>Edit your profile2</h1>
        
      <div class="form">
          
<el-upload
  class="avatar-uploader"
  :action="''"
  :headers="headers"
  :on-change="handlePictureCardPreview"
  :show-file-list="false"
  :auto-upload="false"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

            <!-- <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="120px" :label-position="'top'">
            <el-form-item label="" prop="email">
                <el-input ref="email" type="text" v-model="editForm.email" auto-complete="off" @keyup.enter.native="checkEnter">
                    <template slot="prepend"><i class="fa fa-envelope"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input ref="password" type="password" v-model="editForm.password" auto-complete="off" @keyup.enter.native="checkEnter">
                            <template slot="prepend"><i class="fa fa-key"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn" type="success btn" @click="onSubmitEdit('editForm')">Log in</el-button>
                    </el-form-item>
                </el-form> -->
      </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {baseURL} from '@/api/base'
    export default {
        name: 'EditUserPage',
        mounted(){

            this.headers = {
                    headers: {
                        'Authorization': this.token
                    }
            }
            this.$store.dispatch('getMe', this.token).then(()=>{
                this.imageUrl = this.userInfo.image_path
            })
            this.actionURL = `${baseURL}/me/upload_image`
        },
        computed: {
        ...mapGetters(['token','userInfo'])
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js Login',
                editForm: {},
                rules: {},
                imageUrl: '',
                actionURL:'',
                headers:{}
            }
        },
        methods:{
        handleAvatarSuccess(res, file) {
            console.log('handleSucess',res,file)
        this.imageUrl = URL.createObjectURL(file.raw);
        },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        alert('hi')
        return isLt2M;
      },
      handlePictureCardPreview(file){
        this.imageUrl = file.url;
      }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
   .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #409EFF;
    border-radius: 6px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    .form{
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
    }
    .form-container{
        margin-top:16px;
    }
</style>
