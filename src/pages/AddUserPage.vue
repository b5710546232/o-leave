<template>
    <div class="root">
        <div class="form-container">
            <el-card class="box-card">
                <h1 class="header">Add user</h1>
                <div>
                    <div class="form">
                        <el-form class=" text-left" :model="addForm" status-icon :rules="rules" ref="addForm" label-width="100px" :label-position="'top'">
                            <el-row :gutter="30">
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="First name" prop="firstname">
                                        <el-input ref="fname" type="text" v-model="addForm.firstname" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Last name" prop="lastname">
                                        <el-input ref="lastname" type="text" v-model="addForm.lastname" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Password" prop="password">
                                        <el-input ref="password" type="password" v-model="addForm.password" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Confirm password" prop="confirmPassword">
                                        <el-input ref="confirmPassword" type="password" v-model="addForm.confirmPassword" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Email" prop="email">
                                        <el-input ref="email" type="text" v-model="addForm.email" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Address" prop="address">
                                        <el-input ref="address" type="text" v-model="addForm.address" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Tel. number" prop="telno">
                                        <el-input ref="telno" type="text" v-model="addForm.telno" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Facebook" prop="fb">
                                        <el-input ref="fb" type="text" v-model="addForm.fb" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Instagram" prop="ig">
                                        <el-input ref="ig" type="text" v-model="addForm.ig" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Line" prop="line">
                                        <el-input ref="line" type="text" v-model="addForm.line" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
    
                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Role" prop="role">
                                        <el-select ref="role" v-model="addForm.role" placeholder="Select...">
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

                                                                <el-col :sm="12" :md="12">
                                    <el-form-item label="Department" v-if="addForm.role!=='Subordinate'" prop="department">
                                        <el-input ref="department" type="text" v-model="addForm.department" auto-complete="off" @keyup.enter.native="checkEnter">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
    
                                <el-col v-if="addForm.role==='Subordinate'" :sm="12" :md="12">
                                    <el-form-item label="Supervisor" prop="supervisor_id">
                                        <el-select ref="task" v-model="addForm.supervisor_id" placeholder="Select...">
                                            <el-option v-for="item in supervisorList" :key="item.id" :label="`${item.fname} ${item.lname}`" :value="String(item.id)">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
    
                            </el-row>
                        </el-form>
                        <el-button class="submit-btn text-center" type="primary btn" @click="onAddUser">Add</el-button>
                        <!-- <el-button class="submit-btn text-center" type="primary btn" @click="mock">Mock</el-button> -->
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
    export default {
        name: "AddUserPage",
        computed: {
            ...mapGetters(['adminMessage', 'supervisorList'])
        },
        mounted() {
            let loadingInstance = Loading.service({
                fullscreen: true
            })
            this.$store.dispatch('getAllSupervisors').then(() => {
                loadingInstance.close()
            }).catch(() => {
                loadingInstance.close()
            })
        },
        methods: {
            checkEnter() {
                this.onAddUser()
            },
            mock(){
                this.addForm = {
                    firstname: "n",
                    password: "secret",
                    confirmPassword: "secret",
                    role: "Supervisor",
                    lastname: "n",
                    address: "n",
                    telno: "0",
                    fb: "n",
                    ig: "n",
                    line: "n",
                    department: "n"
                }
            },  
            addUser() {
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
                let payload = {
                    fname: this.addForm.firstname,
                    lname: this.addForm.lastname,
                    email: this.addForm.email,
                    password: this.addForm.password,
                    c_password: this.addForm.confirmPassword,
                    address: this.addForm.address,
                    telno: this.addForm.telno,
                    fb: this.addForm.fb,
                    ig: this.addForm.ig,
                    line: this.addForm.line,
                    department: this.addForm.department,
                    role: this.addForm.role
                }
                if (payload.role === 'Subordinate') {
                    payload['supervisor_id'] = this.addForm.supervisor_id
                }
                return this.$store.dispatch('addUser', payload)
                    .then(() => {
                        this.$message({
                            message: `Create new a  user successfully`,
                            type: 'success'
                        })
                        loadingInstance.close()
                        this.addForm = this.initAddForm()
                        this.$refs['addForm'].resetFields()
                    }).catch((err) => {
                        let message = JSON.stringify(err.response.data)
                        this.$message.error(`error ${message}`)
                        loadingInstance.close()
                        // console.log(err.response.data)
                        // this.addForm = this.initAddForm()
                        // this.$refs['addForm'].resetFields()
                    })
            },
            onAddUser() {
                this.$refs['addForm'].validate(valid => {
                    if (valid) {
                        this.addUser()
                    }
                })
            },
            initAddForm() {
                return {
                    firstname: '',
                    password: '',
                    confirmPassword: '',
                    role: '',
                    lastname: '',
                    address: '',
                    telno: '',
                    fb: '',
                    ig: '',
                    line: '',
                    department: '',
                    supervisor_id: '',
                    email:''
                }
            }
        },
        data() {
            const checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'))
                } else {
                    if (this.addForm.confirmPassword !== '') {
                        this.$refs.addForm.validateField('confirmPassword')
                    }
                    callback()
                }
            }
            const checkConfirmPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'))
                } else if (value !== this.addForm.password) {
                    callback(new Error(`Two inputs don't match!`))
                } else {
                    callback()
                }
            }
    
            const checkSupervisor = (rule, value, callback) => {
                if (this.addForm.role === 'Subordinate') {
                    if (value === "") {
                        callback(new Error("Please input the supervisor again"))
                    } else {
                        callback()
                    }
                }
            }
            return {
                msg: 'Welcome to Your Vue.js Login',
                addForm: this.initAddForm(),
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
                        trigger: 'blur'
                    }],
                    email: [{
                        required: true,
                        message: 'Please input email address',
                        trigger: 'blur'
                    }],
                    department: [{
                        required: true,
                        message: 'Please select department',
                        trigger: 'blur'
                    }],
                    password: [{
                        validator: checkPass,
                        trigger: 'blur',
                        required: true
                    }],
                    confirmPassword: [{
                        validator: checkConfirmPass,
                        trigger: 'blur',
                        required: true
                    }],
                    supervisor_id: [{
                        validate: checkSupervisor,
                        trigger: 'blur'
                    }],
                    role: [{
                        required: true,
                        message: 'Please input role',
                        trigger: 'blur'
                    }]
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-container {
        margin: 16px 16px;
    }
    
    .header {
        font-size: 1.5rem;
        margin-bottom: 16px;
    }
    
    .el-select {
        width: 100%;
    }
    
    .text-left {
        text-align: left;
    }
</style>
