<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form 
            label-width="80px" 
            :model="from" 
            ref="from" 
            :rules="rules">
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="from.username"></el-input>
                </el-form-item>
                <el-form-item  label="密码：" prop="password">
                    <el-input type="password" v-model="from.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('from')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
import { nameRule,passRule} from '../utils/vaildate'
import {setToken} from'@/utils/setToken'
import {login} from'@/api/api'

export default {
    name: "Login",
    data() {
        return {
            from: {
                username: '',
                password: ''
            },
            rules:{
                username:[{validator:nameRule,trigger:'blur'}],
                password:[{validator:passRule,trigger:'blur'}]
            }
        }
    },
    methods:{
        login(from){
           this.$refs[from].validate((valid)=>{
            if (valid) {
             /*this.service.post('/login',this.from)
                .then((res)=>{
                    if (res.data.status===200) {
                        setToken('username',res.data.username)
                        setToken('token',res.data.token)
                        this.$message({message:res.data.message,type:'success'})
                        this.$router.push('/home')
                    }  
                 })*/ 
                    login(this.from).then(res=>{
                        if (res.data.status===200) {
                        setToken('username',res.data.username)
                        setToken('token',res.data.token)
                        this.$message({message:res.data.message,type:'success'})
                        this.$router.push('/home')
                    }
                    })   
            }
           })
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/bg.png') center no-repeat;
    background-size:100% 100%;
    .el-card{
        background-color: #65768557;
    }

    .box-card {
        width: 450px;
        margin: 200px auto;
        color: #fff;
   
        .clearfix {
            font-size: 34px;
        }
        .el-button {
            width: 100%;
        }
    }
}
</style>