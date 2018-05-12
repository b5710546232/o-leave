<template>
    <div class="root">
        <el-card class="box-card">
            <div class="container">
                <h1 class="header">Connect <i class="fab fa-line fa-lg green"></i></h1>
                <img class="qr-img margin-t-16" :src="imagePath" v-if="imagePath" alt="" width="150" height="150">
                <div class="margin-t-16">
                    <el-button class="login-btn" type="primary btn" @click="onGetOTP()">Get OTP</el-button>
                </div>
                <div class="margin-t-16">
                    Your otp is <strong>{{otp}}</strong>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import {
        Loading
    } from 'element-ui'
    export default {
        name: 'ConnectLinePage',
        data() {
            return {
                msg: 'Welcome to Your Vue.js Login',
                imagePath: 'initial',
                otp: '...'
            }
        },
        computed: {
            ...mapGetters(['userInfo','OTP'])
        },
        mounted() {
            if (this.userInfo.role === '') {
                this.fetchGetMe()
            }else{
                this.mapImgQR()
            }
        },
        methods: {
            fetchGetMe() {
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
    
                this.headers = {
                    headers: {
                        'Authorization': this.token
                    }
                }
                this.$store.dispatch('getMe', this.token).then(() => {
                    this.mapImgQR()
                    loadingInstance.close()
                })
            },
            onGetOTP(){
                  let loadingInstance = Loading.service({
                    fullscreen: true
                })
                this.$store.dispatch('getOTP').then(()=>{
                    this.otp = this.OTP
                    loadingInstance.close()
                })
            },
            mapImgQR() {
                const ImageQRMapperByRole = {
                    'Administrator': '../../static/images/line-admin.png',
                    'Supervisor': '../../static/images/line-sup.png',
                    'Subordinate': '../../static/images/line-sub.png',
                }
                this.imagePath = ImageQRMapperByRole[this.userInfo.role]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .root {}
    
    .header {
        font-size: 1.5rem;
    }
    
    .qr-img {
        border: solid 1.25px rgba(0, 0, 0, .5);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
    }
    
    .margin-t-16 {
        margin-top: 16px;
    }
    
    .green {
        color: #1FC923;
    }
    
    .box-card {
        margin: 16px 16px;
        min-height: 480px;
    }
</style>
