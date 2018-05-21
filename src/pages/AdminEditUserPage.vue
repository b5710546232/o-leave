<template>
    <div class="root">
        <div class="form-container">
            <el-card class="box-card">
                <h1 class="header">Manange user</h1>
                <div>
                    <div class="colmuns is-12">
                        <div class="avatar-container">
                            <img @error="handleImgError" class="avatar" width="178" height="178" v-if="imageUrl" :src="imageUrl">
                        </div>
                        <el-button v-if="imageFile" class="upload-btn" size="small" type="primary" @click="submitUpload">Upload</el-button>
                    </div>
    
    
                    <div class="edit-form">
                        <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="140px" :label-position="'left'">
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
    
                                <!-- <el-col :sm="12" :md="12">
                              <el-form-item label="Password" prop="password">
                                <el-input ref="password" type="password" v-model="editForm.password" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                              </el-form-item>
                            </el-col>
              
                            <el-col :sm="12" :md="12">
                              <el-form-item label="Confirm password" prop="confirmPassword">
                                <el-input ref="confirmPassword" type="password" v-model="editForm.confirmPassword" auto-complete="off" @keyup.enter.native="checkEnter">
                                </el-input>
                              </el-form-item>
                            </el-col> -->
    
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
    
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Role" prop="role">
                                        <el-select ref="role" v-model="editForm.role" placeholder="Select...">
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
                                        </el-select>
                                    </el-form-item>
                                </el-col>
    
                                <el-col v-if="editForm.role==='Subordinate'" :sm="12" :md="12">
                                    <el-form-item label="Supervisor" prop="supervisor_id">
                                        <el-select ref="task" v-model="editForm.supervisor_id" placeholder="Select...">
                                            <el-option v-for="item in supervisorList" :key="item.id" :label="`${item.fname} ${item.lname}`" :value="String(item.id)">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
    
                            </el-row>
                        </el-form>
                        <el-button class="submit-btn" type="primary btn" @click="onSubmitEdit('editForm')">Confirm</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
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
            this.prepareData()
        },
        computed: {
            ...mapGetters(['token', 'userInfo', 'userList', 'editUserTarget', 'supervisorList'])
        },
        data() {
            const checkPass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("Please input the password"))
                } else {
                    if (this.editForm.confirmPassword !== "") {
                        this.$refs.editForm.validateField("confirmPassword")
                    }
                    callback()
                }
            }
            const checkConfirmPass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("Please input the password again"))
                } else if (value !== this.editForm.password) {
                    callback(new Error("Two inputs don't match!"))
                } else {
                    callback()
                }
            }
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
                    department: '',
                    role: '',
                    supervisor_id: ''
                },
                imageUrl: '',
                imageFile: '',
                rules: {
                    //                password: [{
                    //     validator: checkPass,
                    //     trigger: "blur",
                    //     required: true
                    //   }],
                    //   confirmPassword: [{
                    //     validator: checkConfirmPass,
                    //     trigger: "blur",
                    //     required: true
                    //   }],
                    role: [{
                        required: true,
                        message: 'Please input role',
                        trigger: 'blur'
                    }],
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
                        trigger: 'blur'
                    }],
                    department: [{
                        required: true,
                        message: 'Please select department',
                        trigger: 'blur'
                    }]
                }
            }
        },
        watch: {
            // call again the method if the route changes
            '$route': 'prepareData'
        },
        methods: {
            prepareData() {
                console.log('prepare')
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
                return this.$store.dispatch('getAllUser')
                    .then(res => {
                        const userId = this.$route.query.userId
                        let targetUser = _.find(this.userList, e => e.id == userId)
                        this.$store.dispatch('setEditUserTarget', targetUser)
                        // this.$store.dispatch
                    })
                    .then(() => {
                        return this.$store.dispatch('getAllSupervisors')
                    })
                    .then(() => {
                        this.mapDataToForm()
                    })
                    .then(() => {
                        loadingInstance.close()
                    })
            },
            handleAvatarSuccess(res, file) {
                console.log('handleSucess', res, file)
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            submitUpload() {
    
            },
            mapDataToForm() {
                console.log(this.editUserTarget)
                this.editForm.firstname = this.editUserTarget.fname
                this.editForm.lastname = this.editUserTarget.lname
                this.editForm.department = this.editUserTarget.department
                this.editForm.address = this.editUserTarget.address
                this.editForm.fb = this.editUserTarget.fb
                this.editForm.line = this.editUserTarget.line
                this.editForm.ig = this.editUserTarget.ig
                this.editForm.telno = this.editUserTarget.telno
                this.editForm.role = this.editUserTarget.role
                this.supervisor_id = this.editUserTarget.supervisor_id
    
                this.imageUrl = this.editUserTarget.image_path
            },
            checkEnter() {
                this.onSubmitEdit()
            },
            onSubmitEdit() {
                this.$refs['editForm'].validate(valid => {
                    if (valid) {
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
                            department: this.editForm.department,
                            role: this.editForm.role
                        }
                        if (payload.role === 'Subordinate') {
                            payload['supervisor_id'] = this.editForm.supervisor_id
                        }
    
                        this.$store.dispatch('adminUpdateUserByID', payload)
                            .then(() => {
                                return this.prepareData()
                            })
                            .then(() => {
                                loadingInstance.close()
                            }).catch((err) => {
                                loadingInstance.close()
                                console.error(err)
                                this.$message.error(`${err.message}`)
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
            handleImgError() {
                const DEFAULT_IMG = '../../static/images/blank_profile.png'
                // this.$store.dispatch('seteditUserTargetImagePath',DEFAULT_IMG)
                this.imageUrl = DEFAULT_IMG
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
