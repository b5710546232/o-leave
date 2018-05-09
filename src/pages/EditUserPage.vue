<template>
    <div class="root">
        <div class="form-container">
            <el-card class="box-card">
                <h1>Edit your profile</h1>
    
                <div>
               <!-- <div class="colmuns is-12">
                        <div class="avatar-container">
                        <el-upload class="avatar-uploader" :action="''" :headers="headers" :on-change="handlePictureCardPreview" :show-file-list="false" :auto-upload="false">
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                            <img class="avatar" width="178" height="178" v-if="imageUrl" :src="imageUrl">
                        </el-upload>
                    </div>
                    <div v-if="!imageFile">Select your new profile</div>
                    <el-button v-if="imageFile" class="upload-btn" size="small" type="primary" @click="submitUpload">Upload</el-button>
               </div> -->

                    
                    <div class="edit-form">
                        <el-form :inline="true" :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" :label-position="'left'">
                            <el-form-item style="width:100%;" label="First name" prop="firstname">
                                <el-input style="width:100%;" ref="email" type="text" v-model="editForm.firstname" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                            </el-form-item>

                            <el-form-item  label="Last name" prop="lastname">
                                <el-input ref="password" type="text" v-model="editForm.lastname" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                            </el-form-item>

                               <el-form-item  label="Last name" prop="lastname">
                                <el-input ref="password" type="text" v-model="editForm.lastname" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                            </el-form-item>
                              <el-form-item  label="Last name" prop="lastname">
                                <el-input ref="password" type="text" v-model="editForm.lastname" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                            </el-form-item>
    
                            <el-form-item >
                                <el-button class="login-btn" type="success btn" @click="onSubmitEdit('editForm')">Log in</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import {
        Loading
    } from 'element-ui';
    import {
        mapGetters
    } from 'vuex'
    import {
        baseURL
    } from '@/api/base'
    export default {
        name: 'EditUserPage',
        mounted() {
    
            this.headers = {
                headers: {
                    'Authorization': this.token
                }
            }
            this.$store.dispatch('getMe', this.token).then(() => {
                this.imageUrl = this.userInfo.image_path
            })
            this.actionURL = `${baseURL}/me/upload_image`
        },
        computed: {
            ...mapGetters(['token', 'userInfo'])
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js Login',
                editForm: {
                    firstname: '',
                    lastname: ''
                },
                rules: {},
                imageUrl: '',
                actionURL: '',
                headers: {},
                imageFile: ''
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log('handleSucess', res, file)
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            submitUpload() {
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
                console.log(this.imageFile)
                this.$store.dispatch('uploadProfile', this.imageFile.raw).then(() => {
                    console.log('sucess')
                    loadingInstance.close()
                }).catch((err) => {
                    loadingInstance.close()
                    console.error(err)
                })
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
    
                if (!isLt2M) {
                    this.$message.error('Avatar picture size can not exceed 2MB!');
                }
                return isLt2M;
            },
            handlePictureCardPreview(file) {
                if (this.beforeAvatarUpload(file)) {
                    this.imageUrl = file.url;
                    this.imageFile = file
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .avatar-container {
        position: relative;
    }
    
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        /* position: relative; */
        /* overflow: hidden; */
    }
    
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    
    .avatar-uploader-icon {
        font-size: 28px;
        font-weight: 700;
        color: rgb(116, 220, 255);
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        border: 1.5px dashed #409EFF;
        border-radius: 6px;
        /* position: relative; */
        /* background: rgba(0, 0, 0, .25); */
        position: absolute;
        z-index: 2;
    }
    
    .avatar {
        width: 178px;
        height: 178px;
        /* display: block; */
        border-radius: 6px;
        z-index: 1;
        position: relative;
    }
    
    .edit-form {
        margin-top: 16px;
        overflow: auto;
    }
    
    .box-card {}
    
    .form-container {
        margin: 16px 16px;
    }
    
    .upload-btn {
        margin: 16px 0;
    }
</style>
