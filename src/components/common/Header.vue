<template>
    <div class="header">
        <div class="logo">企业全景监控系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    var qs = require('qs');
    import {mapActions } from 'vuex'
    export default {
        methods: mapActions({//与vuex中的actions关联
            userName: "saveName"
        }),
        data() {
            return {
                name: '测试用户'
            }
        },
            computed:{
            username(){
                let username = this.$store.state.username;
                    console.log(username);
                return username ? username : sessionStorage.getItem('ms_username');
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                  /*  sessionStorage.removeItem('ms_username');*/
                    let _url =this.$url3+"/user/weblogout"+"?"+Date.now();
                    let self=this;
                    self.$axios.post(_url,qs.stringify({username:sessionStorage.getItem('ms_username')})).then((res)=>{

                    })
                    sessionStorage.clear();
                    this.$router.push('/login');
                }
            }
        },
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;

        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:249px;
        text-align: center;
        background-color: #494545;
    }
    .user-info {
        width:164px;
        float: right;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #414141;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
