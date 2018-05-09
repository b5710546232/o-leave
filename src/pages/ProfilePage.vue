<template>
    <div class="root">
        <div class="form-container">
            <el-card class="box-card">
                <h1 class="header">{{userInfo.fname}} {{userInfo.lname}}</h1>
                <div>
                    <div class="colmuns is-12">
                        <div class="avatar-container">
                            <img @error="handleImgError" class="avatar" width="178" height="178" v-if="imageUrl" :src="imageUrl">
                        </div>
                    </div>
    
    
                    <div class="edit-form">
                        <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" :label-position="'left'">
                            <el-row :gutter="30">
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Address" prop="address">
                                        <el-input ref="address" type="text" v-model="editForm.address" auto-complete="off">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Tel. number" prop="telno">
                                        <el-input ref="telno" type="text" v-model="editForm.telno" auto-complete="off">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Facebook" prop="fb">
                                        <el-input ref="fb" type="text" v-model="editForm.fb" auto-complete="off">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Instagram" prop="ig">
                                        <el-input ref="ig" type="text" v-model="editForm.ig" auto-complete="off">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Line" prop="line">
                                        <el-input ref="line" type="text" v-model="editForm.line" auto-complete="off">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Department" prop="department">
                                        <el-input ref="department" type="text" v-model="editForm.department" auto-complete="off">
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
                        <el-button class="submit-btn" type="success btn" @click="onEdit">Edit</el-button>
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
        name: 'ProfilePage',
        mounted() {
            if (this.userInfo.isLoaded) {
                this.mapDataToForm()
                return
            }
            this.fetchGetMe()
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
            fetchGetMe() {
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
                return this.$store.dispatch('getMe', this.token).then(() => {
                    this.mapDataToForm()
                }).then(() => {
                    loadingInstance.close()
                })
            },
            onEdit() {
                this.$router.push(`/edituserprofile`)
            },
            mapDataToForm() {
                this.editForm.firstname = this.userInfo.fname
                this.editForm.lastname = this.userInfo.lname
                this.editForm.department = this.userInfo.department
                this.editForm.address = this.userInfo.address
                this.editForm.fb = this.userInfo.fb
                this.editForm.line = this.userInfo.line
                this.editForm.ig = this.userInfo.ig
                this.editForm.telno = this.userInfo.telno
    
                this.imageUrl = this.userInfo.image_path
            },
            handleImgError() {
                const DEFAULT_IMG = '../../static/images/blank_profile.png'
                this.$store.dispatch('setUserInfoImagePath', DEFAULT_IMG)
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
    
    
    /* img
                    {
                    background-image:url('../../static/images/blank_profile.png');
                    width: 178px;
                    background-size: cover;
                    } */
    
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
        object-fit: cover;
    }
    
    .edit-form {
        margin-top: 16px;
    }
    
    .el-select {
        width: 100%;
    }
    
    .header {
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
