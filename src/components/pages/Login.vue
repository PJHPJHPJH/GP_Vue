<template>
  <!--  style="filter: grayscale(100%);"-->
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h3>BRP推荐系统登录</h3>
      </div>
      <div class="formdata">
<!--        <el-form :model="loginForm" label-width="100px" :rules="rules" ref="loginForm" class="login_form">-->
        <el-form label-width="100px" class="login_form">
          <el-form-item label="账号：" prop="no">
            <el-input type="text" prefix-icon="el-icon-s-custom" v-model="name" autocomplete="off"
             placeholder="请输入账号" clearable
            ></el-input>
          </el-form-item>
          <br>
          <el-form-item label="密码：" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="password" show-password autocomplete="off" @keyup.enter="confirm"
             placeholder="请输入密码" clearable
            ></el-input>
          </el-form-item>
          <br>
          <el-form-item>
            <el-button class="loginButton" type="primary" @click="login" :disabled="confirm_disabled">登 录</el-button>
            <el-button class="resetButton" type="primary" @click="reset" :disabled="confirm_disabled">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script setup>

import {ref} from "vue";
import Axios from "axios";
import {useRouter} from "vue-router/dist/vue-router";


let confirm_disabled = ref(false);
let name = ref("");
let password = ref("");
const router = useRouter();

const confirm = function() {
      confirm_disabled.value = true;
}
const reset = function() {
  name.value = "";
  password.value = "";
  console.log(name.value)
  console.log(typeof name.value)


}
const login = function(){
  Axios.post("http://localhost:9999/login",{
      name: name.value,
      password: password.value
    }, {
      headers: {
    'Content-Type': 'application/json',
    // other headers here...
  }
}).then(
      response => {
        console.log(response.data)
        console.log(typeof response.data)
        if (response.data === true) {
          router.push({path:"/index"});
        }
      }
  )
}

//测试方法
// const change = function(){
//   console.log(name, password)
// }

// 利用@方法进行前端验证




</script>

<style>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1500px;
  /*background-image: url("../assets/loginbg.jpg");*/
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  width: 600px;
  margin-bottom: 20px;
  margin-left: -80px;
  line-height: 50px;
  text-align: center;
  font-size: 48px;
  font-weight: bolder;
  color: black;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}
.loginButton{
  /*margin-left: 120px;*/
  margin-right: 120px;
}
.resetButton{

}
</style>
