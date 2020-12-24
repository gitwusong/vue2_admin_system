<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">{{logoTitle.title}}</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-Verify">
                    <Verify
                    @success="VerifyStatus = true;submitForm()"
                    @error="VerifyStatus = false;submitForm()"
                    type="compute"
                    width="290px"
                    height="40px"
                    fontSize="20px"
                    :figure="100"
                    :showButton="true"
                    :arith="0"
                    >
                        <template #check>
                                <el-button type="primary"  style="width:290px;margin-top:10px;">登录</el-button>
                        </template>
                    </Verify>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { logoTitle } from '@/utils'
import Verify from 'vue2-verify'
export default {
    components:{
        Verify
    },
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            logoTitle,
            VerifyStatus:false
        }
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    if (!this.VerifyStatus) return this.$message.warning('请输入验证码')
                    this.$message.success('登录成功')
                    sessionStorage.setItem('robotUserName', this.param.username)
                    this.$router.push('/')
                } else {
                    this.$message.error('请输入账号和密码')
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-Verify {
    text-align: center;
    width: 100%;
    height: 120px;
}

</style>