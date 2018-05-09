<template>
    <div class="root">
        <div class="form-container">
            <el-card class="box-card">
                <h1 class="header">Edit your profile</h1>
                <div>
                    <div class="colmuns is-12">
                        <div class="avatar-container">
                            <el-upload class="avatar-uploader" :action="''" :headers="headers" :on-change="handlePictureCardPreview" :show-file-list="false" :auto-upload="false">
                                <i :class="{'el-icon-plus avatar-uploader-icon':imageUrl,'el-icon-plus avatar-uploader-icon p-relative':!imageUrl}"></i>
                                <img class="avatar" width="178" height="178" v-if="imageUrl" :src="imageUrl">
                            </el-upload>
                        </div>
                        <div v-if="!imageFile">Select your new profile</div>
                        <el-button v-if="imageFile" class="upload-btn" size="small" type="primary" @click="submitUpload">Upload</el-button>
                    </div>
    
    
                    <div class="edit-form">
                        <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" :label-position="'left'">
                            <el-row :gutter="30">
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="First name" prop="firstname">
                                        <el-input ref="email" type="text" v-model="editForm.firstname" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Last name" prop="lastname">
                                        <el-input ref="lastname" type="text" v-model="editForm.lastname" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Address" prop="address">
                                        <el-input ref="address" type="text" v-model="editForm.address" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Tel. number" prop="telno">
                                        <el-input ref="telno" type="text" v-model="editForm.telno" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Facebook" prop="fb">
                                        <el-input ref="fb" type="text" v-model="editForm.fb" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Instagram" prop="ig">
                                        <el-input ref="ig" type="text" v-model="editForm.ig" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Line" prop="line">
                                        <el-input ref="line" type="text" v-model="editForm.line" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Department" prop="department">
                                                    <el-input ref="department" type="text" v-model="editForm.department" auto-complete="off" @keyup.enter.native="checkEnter">
                                                    </el-input>
                                                </el-form-item>
                                    <!-- <el-form-item label="Department" prop="department">
                                        <el-select ref="department" v-model="editForm.department" placeholder="Select...">
                                            <el-option v-for="item in [
                                                {
                  value: 'Administrator',
                  label: 'Administrator'
                },
                {
                  value: 'Supervisor',
                  label: 'Supervisor'
                },
                {
                  value: 'Subordinate',
                  label: 'Subordinate'
                }]" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select> -->
    
                                    <!-- </el-form-item> -->
                                </el-col>
                            </el-row>
                        </el-form>
                        <el-button  class="submit-btn" type="primary btn" @click="onSubmitEdit('editForm')">Confirm</el-button>
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
            let loadingInstance = Loading.service({
                fullscreen: true
            })
    
            this.headers = {
                headers: {
                    'Authorization': this.token
                }
            }
            this.$store.dispatch('getMe', this.token).then(() => {
                this.imageUrl = this.userInfo.image_path
                this.mapDataToForm()
            }).then(() => {
                loadingInstance.close()
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
                    lastname: '',
                    address: '',
                    telno: '',
                    fb: '',
                    ig: '',
                    line: '',
                    department: ''
                },
                imageUrl: '',
                actionURL: '',
                headers: {},
                imageFile: '',
                rules: {
                    firstname: [{
                        required: true,
                        message: 'Please input firstname',
                        trigger: 'blur'
                    }],
                    lastname: [{
                        required: true,
                        message: 'Please input lastname',
                        trigger: 'blur'
                    }],
                    address: [{
                        required: true,
                        message: 'Please input address',
                        trigger: 'blur'
                    }],
                    telno: [{
                        required: true,
                        message: 'Please input telephone number',
                        trigger: 'blur'
                    }],
                    fb: [{
                        required: true,
                        message: 'Please input facebook',
                        trigger: 'blur'
                    }],
                    ig: [{
                        required: true,
                        message: 'Please input instagram',
                        trigger: 'blur'
                    }],
                    line: [{
                        required: true,
                        message: 'Please input line',
                        trigger: 'blur,change'
                    }],
                    department: [{
                        required: true,
                        message: 'Please select department',
                        trigger: 'change'
                    }]
                }
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
                    loadingInstance.close()
                }).catch((err) => {
                    loadingInstance.close()
                    console.error(err)
                    this.$message.error('Upload picture has an error.');
                })
            },
             mapDataToForm(){
                this.editForm.firstname = this.userInfo.fname
                this.editForm.lastname = this.userInfo.lname
                this.editForm.department = this.userInfo.department
                this.editForm.address = this.userInfo.address
                this.editForm.fb = this.userInfo.fb
                this.editForm.line = this.userInfo.line
                this.editForm.ig = this.userInfo.ig
                this.editForm.telno = this.userInfo.telno
            },
            checkEnter() {
                this.onSubmitEdit()
            },
            onSubmitEdit() {
              this.$refs['editForm'].validate(valid => {
                    if(valid){
                        // do some task.
                    let loadingInstance = Loading.service({
                fullscreen: true
            })
                // updateUser
                const payload = {
                    fname: this.editForm.firstname,
                    lname: this.editForm.lastname,
                    address: this.editForm.address,
                    telno: this.editForm.telno,
                    fb: this.editForm.fb,
                    ig: this.editForm.ig,
                    line: this.editForm.line,
                    department: this.editForm.department
                }

                this.$store.dispatch('updateUser', payload).then(() => {
                    loadingInstance.close()
                }).catch((err) => {
                    loadingInstance.close()
                    console.error(err)
                    this.$message.error('Upload picture has an error.');
                })
                    }
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
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
    }
    
    .edit-form {
        margin-top: 16px;
    }
    
    .el-select {
        width: 100%;
    }
    .header{
        font-size: 1.5rem;
        margin-bottom: 16px;
    }
    
    .box-card {}
    
    .form-container {
        margin: 16px 16px;
    }
    
    .p-relative {
        position: relative;
    }
    
    .upload-btn {
        margin: 16px 0;
    }
</style>
