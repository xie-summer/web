<template>
    <div class="login-wrap_fff">
       <!-- <div class="ms-title">全景监控系统</div>-->
      <el-row>
          <el-col :span="7"style="height: 952px">
             <el-col :span="11" :offset="6"class="login_title"></el-col>
              <el-col :span="11":offset="6"class="login_header"></el-col>
              <div class="ms-login">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="6rem" class="demo-ruleForm" >
                      <el-form-item prop="username">
                          <el-input class="input_border"v-model="ruleForm.username" placeholder="用户名">
                              <i slot="prefix">
                                  <svg class="icon" aria-hidden="true"style="width: 2rem;height: 3rem">
                                      <use xlink:href="#el-icon-erp-user"></use>
                                  </svg>
                              </i>
                          </el-input>
                      </el-form-item>
                     <el-form-item prop="password" >
                          <el-input  class="input_border"type="password"placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                              <i slot="prefix">
                                  <svg class="icon" aria-hidden="true"style="width: 2rem;height: 3rem">
                                      <use xlink:href="#el-icon-erp-password"></use>
                                  </svg>
                              </i>
                          </el-input>
                      </el-form-item>
                      <p v-if="bool" style="font-size:12px;line-height:18px;color:red;margin-bottom: 5px;margin-left:22%">*用户名或密码错误</p>
                      <div class="login-btn">
                          <el-button style="width:70%;margin-left:22%;　border-radius: 15px;"type="primary" native-type="button" @click="submitForm('ruleForm')">登录</el-button>
                      </div>

                      <p style="font-size:12px;line-height:30px;color:#999;margin-left:22%">Tips : 用户名：admin  密码：admin</p>
                  </el-form>
              </div>
          </el-col>
          <el-col class="back_img" :span="17"></el-col>
      </el-row>
    </div>
</template>

<script>
    var qs = require('qs');
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                bool:false,
                rules: {
                    username: [

                    ],
                    password: [

                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {

                const self = this;
                self.$refs[formName].validate((valid) => {
                   if (valid&&this.ruleForm.username=="admin"&&this.ruleForm.password=="admin") {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/readme');
                    } else {
                        this.bool=true
                        return false;
                    }
                });
            },
        },
    created:function(){

    }
    }
</script>

<style>
    .login_header{
        height: 50px;
        position: relative;
        top:11%;
        -o-background-image: url("../../../static/img/headr.png");
        background-image: url("../../../static/img/headr.png");
        /*background-position: center center;*/
        background-repeat: no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
    }
    .login_title{
        position: relative;
        height: 100px;
        top:10%;
        -o-background-image: url("../../../static/img/title.png");
        background-image: url("../../../static/img/title.png");
        /*background-position: center center;*/
        background-repeat: no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
    }
    .ms-login .el-input__inner{border-left:0px;border-top:0px;border-right:0px;border-bottom: solid 1px #888888;}
    .input_border{}
    .back_img{
        height: 952px;
        -o-background-image: url("../../../static/img/blg.png");
        background-image: url("../../../static/img/blg.png");
        /*background-position: center center;*/
        background-repeat: no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
    }
    .login-wrap_fff{
        min-width: 1055px;
        position: relative;
        width:100%;
        height:952px;
        background-color: #ffffff;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: relative;
        left:5%;
        top:25%;
        width:300px;
        padding:10px 10%;
        border-radius: 5px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }


    .login-wrap_fff .ms-login input[type=text]:focus, input[type=password]:focus, textarea:focus {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        border-bottom: 1px solid #888888;
    }
</style>
