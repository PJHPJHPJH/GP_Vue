<template>
  <!--  style="filter: grayscale(100%);"-->
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h3>BPR推荐系统密码找回</h3>
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

          <div class="mb-2 flex items-center text-sm">
            <el-form-item label="验证方式：" prop="password">
              <el-radio-group v-model="radioValue" class="ml-4" @change="resetRadio">
                <el-radio label="email" size="large">邮箱验证</el-radio>
                <el-radio label="phone" size="large">手机号验证</el-radio>
              </el-radio-group>
            </el-form-item>

          </div>

          <div v-if="radioValue === 'email'">
            <el-form-item label="邮箱：">
              <el-input type="text" prefix-icon="el-icon-lock" v-model="email" autocomplete="off" @keyup.enter="confirm"
                        placeholder="请输入邮箱" clearable @blur="setEmailmsg"
              ></el-input>
            </el-form-item>
            <br v-show="emailmsg === ''">
            <p v-show="emailmsg !== ''" style="height:20px; margin: 0px;">{{ emailmsg }}</p>
            <br>
          </div>


          <div v-if="radioValue === 'phone'">
            <el-form-item label="手机号：">
              <el-input type="text" prefix-icon="el-icon-lock" v-model="phone" autocomplete="off" @keyup.enter="confirm"
                        placeholder="请输入手机号" clearable @blur="setPhonemsg"
              ></el-input>
            </el-form-item>
            <br v-show="phonemsg === ''">
            <p v-show="phonemsg !== ''" style="height:20px; margin: 0px;">{{ phonemsg }}</p>
            <br>
          </div>

          <el-form-item label="新密码：" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="password" show-password autocomplete="off" @keyup.enter="confirm"
                      :placeholder="passwordPlaceholder" clearable @blur="setPasswordmsg" :disabled="isinput"
            ></el-input>
          </el-form-item>
          <br v-show="passwordmsg === ''">
          <p v-show="passwordmsg !== ''" style="height:20px; margin: 0px;">{{ passwordmsg }}</p>
          <br>


          <el-form-item label="新密码确认：" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="repeat_password" show-password autocomplete="off" @keyup.enter="confirm"
                      :placeholder="passwordPlaceholder" clearable @blur="setRepeatPasswordmsg" :disabled="isinput"
            ></el-input>
          </el-form-item>
          <br v-show="repeatPasswordmsg === ''">
          <p v-show="repeatPasswordmsg !== ''" style="height:20px; margin: 0px;">{{ repeatPasswordmsg }}</p>
          <br>

          <el-form-item>
            <el-button class="forgetButton" type="primary" @click="forget" :disabled="confirm_disabled">修 改</el-button>
            <el-button class="resetButton" type="primary" @click="reset">重 置</el-button>
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


//控制按钮的变量，true为禁用
let confirm_disabled = ref(true);
//用户名
let name = ref("");
//密码
let password = ref("");
//确认密码
let repeat_password = ref("");
//单选框取值
let radioValue = ref("email");
//邮箱
let email = ref("");
//手机号
let phone = ref("");

//是否允许输入，用于验证后才能输入新密码
let isinput = ref(true)
//密码输入框的提示文字，根据邮箱和手机号的验证通过与否进行变换
let passwordPlaceholder = ref("邮箱/手机号验证通过后即可输入");
//标记邮箱/手机号是否验证成功
let validationFlag = ref(false);


//失去焦点后反馈信息
let namemsg = ref("\t");
let passwordmsg = ref("\t");
let repeatPasswordmsg = ref("\t");
let emailmsg = ref("\t");
let phonemsg = ref("\t");

//使用路由
const router = useRouter();

//重置函数
const reset = function() {
  name.value = "";
  password.value = "";
  repeat_password.value = "";
  email.value = "";
  phone.value = "";
  radioValue.value = "email";
  passwordPlaceholder.value = "邮箱/手机号验证通过后即可输入";
  isinput.value = true;
  validationFlag.value = false;

  namemsg.value = "\t";
  passwordmsg.value = "\t";
  repeatPasswordmsg.value = "\t";
  emailmsg.value = "\t";
  phonemsg.value = "\t";


  confirm_disabled.value = true;
}

//单选按钮切换时重置邮箱和手机号
const resetRadio = function() {
  phone.value = "";
  email.value = "";
  emailmsg.value = "\t";
  phonemsg.value = "\t";

  password.value = "";
  repeat_password.value = "";

  passwordmsg.value = "\t";
  repeatPasswordmsg.value = "\t";
  passwordPlaceholder.value = "邮箱/手机号验证通过后即可输入";
  isinput.value = true;
  validationFlag.value = false;



  confirm_disabled.value = true;
}



//前端验证

//用户名验证
const setNamemsg = function() {
  if (name.value.length < 6) {
    namemsg.value = "用户名不能少于6位";
    confirm_disabled.value = true;
  } else if (name.value.length > 16) {
    namemsg.value = "用户名不能多于16位";
    confirm_disabled.value = true;
  } else {
    namemsg.value = "";
    //对所有条件进行验证
    if (validationFlag && namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
      confirm_disabled.value = false;
    }
  }
}



//密码验证
const setPasswordmsg = function() {
  if (password.value.length < 6) {
    passwordmsg.value = "密码不能少于6位";
    confirm_disabled.value = true;
  }
  else if (password.value.length > 16) {
    passwordmsg.value = "密码不能多于16位";
    confirm_disabled.value= true;
  }
  else if (password.value !== repeat_password.value) {
    passwordmsg.value = "";
    repeatPasswordmsg.value = "两次密码输入不一致";
    confirm_disabled.value= true;
  }
  else{
    passwordmsg.value = "";
    //对所有条件进行验证
    if (validationFlag && namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
      confirm_disabled.value =false;
    }
  }
}

//二次密码验证
const setRepeatPasswordmsg = function() {
  if (repeat_password.value.length < 6) {
    repeatPasswordmsg.value = "密码不能少于6位";
    confirm_disabled.value = true;
  }
  else if (repeat_password.value.length > 16) {
    repeatPasswordmsg.value = "密码不能多于16位";
    confirm_disabled.value= true;
  }
  else if (password.value !== repeat_password.value) {
    repeatPasswordmsg.value = "两次密码输入不一致";
    confirm_disabled.value= true;
  }
  else{
    repeatPasswordmsg.value = "";
    //对所有条件进行验证
    if (validationFlag && namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
      confirm_disabled.value =false;
    }
  }
}



//邮箱验证
const setEmailmsg = function() {
  //邮箱的正则表达式
  const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  //请求用户名数据，检查是否为该用户的邮箱
  Axios.post("http://localhost:9999/emailValidation", {
    name: name.value,
    email: email.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        if (!regEmail.test(email.value)) {
          emailmsg.value = "邮箱格式不正确";
        } else if (!(response.data)) {
          emailmsg.value = "邮箱验证未通过";
          confirm_disabled.value = true;
        } else {
          emailmsg.value = "";
          //开启密码输入框的同时设置验证标志
          afterValidationSuccess();
          //对所有条件进行验证
          if (validationFlag &&namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
            confirm_disabled.value = false;
          }
        }
      }
  )
}

//手机号验证
const setPhonemsg = function() {
  //手机号的正则表达式
  const regPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
  //请求用户名数据，检查是否重名
  Axios.post("http://localhost:9999/phoneValidation", {
    name: name.value,
    phone: phone.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        if (!regPhone.test(phone.value)) {
          phonemsg.value = "手机号格式不正确";
        } else if (!(response.data)) {
          phonemsg.value = "手机号验证未通过";
          confirm_disabled.value = true;
        } else {
          phonemsg.value = "";
          //开启密码输入框的同时设置验证标志
          afterValidationSuccess();
          //对所有条件进行验证
          if (validationFlag && namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
            confirm_disabled.value = false;
          }
        }
      }
  )
}


const afterValidationSuccess = function() {
  validationFlag.value = true
  isinput.value = false;
  passwordPlaceholder.value = "请输入新密码";
}



//修改密码函数
const forget = function(){
  Axios.post("http://localhost:9999/forget",{
    name: name.value,
    password: password.value,
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        if (response.data) {
          //等待3秒后跳转到首页
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
.forgetButton{
  /*margin-left: 120px;*/
  margin-right: 120px;
}
.resetButton{

}
</style>
