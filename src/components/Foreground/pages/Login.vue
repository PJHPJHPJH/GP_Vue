<template>
  <!--  style="filter: grayscale(100%);"-->
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h3>BPR推荐系统登录</h3>
      </div>
      <div class="formdata">
<!--        <el-form :model="loginForm" label-width="100px" :rules="rules" ref="loginForm" class="login_form">-->
        <el-form label-width="100px" class="login_form">
          <el-form-item label="账号：" prop="no">
            <el-input type="text" prefix-icon="el-icon-s-custom" v-model="name" autocomplete="off"
             placeholder="请输入账号" clearable @blur="setNamemsg"
            ></el-input>
          </el-form-item>
          <br v-show="namemsg === ''">
          <p v-show="namemsg !== ''" style="height:20px; margin: 0px;">{{ namemsg }}</p>
          <br>
          <el-form-item label="密码：" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="password" show-password autocomplete="off" @keyup.enter="confirm"
             placeholder="请输入密码" clearable @blur="setPasswordmsg"
            ></el-input>
          </el-form-item>
          <br v-show="passwordmsg === ''">
          <p v-show="passwordmsg !== ''" style="height: 20px; margin: 0px;">{{ passwordmsg }}</p>
          <br>
          <el-form-item>
            <el-button class="loginButton" type="primary" @click="login" :disabled="confirm_disabled">登 录</el-button>
            <el-button class="resetButton" type="primary" @click="reset">重 置</el-button>
          </el-form-item>
        </el-form>
        <br>
          <a id="forgetPassword" @click.prevent="login" href="https://www.baidu.com/">忘记密码？</a>
      </div>
    </div>
  </div>
</template>


<script setup>

import {ref} from "vue";
import Axios from "axios";
import {useRouter} from "vue-router/dist/vue-router";
import {ElMessage} from "element-plus";

//控制按钮的变量，true为禁用
let confirm_disabled = ref(true);
//用户名和密码
let name = ref("");
let password = ref("");
//设定管理员的用户名，仅在开发阶段使用，上线后固定为admin
let adminName = "PJH";

//使用路由
const router = useRouter();

//验证提示信息
let namemsg = ref("\t");
let passwordmsg = ref("\t");

//重置按钮点击绑定事件
const reset = function() {
  name.value = "";
  password.value = "";
  namemsg.value = "\t";
  passwordmsg.value = "\t";
  confirm_disabled.value = true;
}


//前端验证

//用户名验证
const setNamemsg = function (){
  //首先排除管理员用户，并要求普通用户用户名不低于6位
  if (name.value.length < 6 && name.value !== adminName) {
    namemsg.value = "用户名不能少于6位";
    confirm_disabled.value = true;
  }
  else if (name.value.length > 16) {
    namemsg.value = "用户名不能多于16位";
    confirm_disabled.value = true;
  }
  else {
    namemsg.value = "";
    //对密码进行验证，保证用户名和密码都正确才能登录
    if (passwordmsg.value === ""){
      confirm_disabled.value = false;
    }

  }
}

//密码验证
const setPasswordmsg = function() {


  if (password.value.length < 6 && (name.value !== adminName)) {
    passwordmsg.value = "密码不能少于6位";
    confirm_disabled.value = true;
  }
  else if (password.value.length > 16) {
    passwordmsg.value = "密码不能多于16位";
    confirm_disabled.value= true;
  }
  else{
    passwordmsg.value = "";
    //对用户名进行验证，保证用户名和密码都正确才能登录
    if (namemsg.value === ""){
      confirm_disabled.value = false;
    }

  }
}

//向后端发送POST请求验证登录信息
const login = function(){


  Axios.post("http://localhost:9999/login",{
    name: name.value,
    password: password.value,
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data)
        console.log(typeof response.data)
        if (response.data !== false) {
          sessionStorage.setItem("userId", response.data)
          if (name.value === adminName) {
            router.push({path:"/background/welcome"});
          }
          else {
            router.push({path:"/index"});
          }

        }
        else {
          reset();
          ElMessage({
            message: '用户名或密码错误，请重试！',
            type: 'warning',
          })

        }
      }
  )

}



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

#forgetPassword {
  position: absolute;
  right: 0px;
}


</style>
