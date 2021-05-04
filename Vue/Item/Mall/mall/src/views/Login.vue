<template>
  <div class="login_box">
    <my-tab-bar :title="isLogin?'登陆':'注册'" left-text="返回" left-arrow @click-left="onClickLeft"></my-tab-bar>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <Verify :showButton=false @success="success" @error="error" :type="2" ref="check"></Verify>
      <span @click="isLogin=!isLogin">{{isLogin?"立即注册":"已有账号"}}</span>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">{{isLogin?'登陆':'注册'}}</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Verify from 'vue2-verify'
import { Notify } from 'vant';
import { login, register} from '../api';
import md5 from 'js-md5';
    export default{
      data(){
        return {
          isLogin:true,
          username:'',
          password:'',
        }
      },
      methods:{
        onClickLeft(){},
        onSubmit(){
          //console.log(this.$ref.check.checkCode());
          this.$refs.check.checkCode();
        },
        success(text) {
              //ajax请求
              if(this.islogin){
                login({
                  loginName:this.username,
                  passwordMD5:mds(this.password),
                });
              }else{
                register({
                  loginName:this.username,
                  password:this.password,
                });
              }
            },
        error(){
          Notify({type: 'danger', message: '验证码错误' ,duration:1000});
        },
      },
      components: {
            Verify
        }
    };
</script>