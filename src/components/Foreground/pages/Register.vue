<template>
  <!--  style="filter: grayscale(100%);"-->
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h3>BPR推荐系统用户注册</h3>
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
          <p v-show="passwordmsg !== ''" style="height:20px; margin: 0px;">{{ passwordmsg }}</p>
          <br>


          <el-form-item label="密码确认：" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="repeat_password" show-password autocomplete="off" @keyup.enter="confirm"
                      placeholder="请确认密码" clearable @blur="setRepeatPasswordmsg"
            ></el-input>
          </el-form-item>
          <br v-show="repeatPasswordmsg === ''">
          <p v-show="repeatPasswordmsg !== ''" style="height:20px; margin: 0px;">{{ repeatPasswordmsg }}</p>
          <br>


          <div class="mb-2 flex items-center text-sm">
            <el-form-item label="验证方式：" prop="password">
              <el-radio-group v-model="radioValue" class="ml-4">
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



          <el-form-item>
            <el-button class="registerButton" type="primary" @click="register" :disabled="confirm_disabled">注 册</el-button>
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


  namemsg.value = "\t";
  passwordmsg.value = "\t";
  repeatPasswordmsg.value = "\t";
  emailmsg.value = "\t";
  phonemsg.value = "\t";



  confirm_disabled.value = true;






}



//前端验证

//用户名验证
const setNamemsg = function() {
  let repeatName = false;
  //请求用户名数据，检查是否重名
  Axios.post("http://localhost:9999/repeatName",{
    name: name.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        repeatName = response.data;
        if (name.value.length < 6) {
          namemsg.value = "用户名不能少于6位";
          confirm_disabled.value = true;
        }
        else if (name.value.length > 16) {
          namemsg.value = "用户名不能多于16位";
          confirm_disabled.value = true;
        }
        else if (repeatName) {
          namemsg.value = "该用户名已存在";
          confirm_disabled.value = true;
        }
        else {
          namemsg.value = "";
          //对所有条件进行验证
          if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
            confirm_disabled.value =false;
          }

        }
      }
  )


  // if (name.value.length < 6) {
  //   namemsg.value = "用户名不能少于6位";
  //   confirm_disabled.value = true;
  // }
  // else if (name.value.length > 16) {
  //   namemsg.value = "用户名不能多于16位";
  //   confirm_disabled.value = true;
  // }
  // else if (repeatName) {
  //   namemsg.value = "用户名已存在";
  //   confirm_disabled.value = true;
  // }
  // else {
  //   namemsg.value = "";
  //   //对所有条件进行验证
  //   if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
  //     confirm_disabled.value =false;
  //   }
  //
  // }


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
    if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
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
    if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
      confirm_disabled.value =false;
    }
  }
}



//邮箱验证
const setEmailmsg = function() {
  //邮箱的正则表达式
  const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  let repeatEmail = false;
  //请求用户名数据，检查是否重名
  Axios.post("http://localhost:9999/repeatEmail", {
    email: email.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        repeatEmail = response.data;
        if (!regEmail.test(email.value)) {
          emailmsg.value = "邮箱格式不正确";
        } else if (repeatEmail) {
          emailmsg.value = "该邮箱已被验证";
          confirm_disabled.value = true;
        } else {
          emailmsg.value = "";
          //对所有条件进行验证
          if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
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
  let repeatPhone = false;
  //请求用户名数据，检查是否重名
  Axios.post("http://localhost:9999/repeatPhone", {
    phone: phone.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        repeatPhone = response.data;
        if (!regPhone.test(phone.value)) {
          phonemsg.value = "手机号格式不正确";
        } else if (repeatPhone) {
          phonemsg.value = "该手机号已被验证";
          confirm_disabled.value = true;
        } else {
          phonemsg.value = "";
          //对所有条件进行验证
          if (namemsg.value === "" && passwordmsg.value === "" && repeatPasswordmsg.value === "" && radioValue.value === "email" ? (emailmsg.value === "") : (phonemsg.value === "")) {
            confirm_disabled.value = false;
          }
        }
      }
  )
}



//注册函数
const register = function(){
  Axios.post("http://localhost:9999/register",{
      name: name.value,
      password: password.value,
      repeatPassword: repeat_password.value,
      email: email.value,
      phone: phone.value
    }, {
      headers: {
    'Content-Type': 'application/json',
    // other headers here...
  }
}).then(
      response => {
        console.log(response.data);
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
.registerButton{
  /*margin-left: 120px;*/
  margin-right: 120px;
}
.resetButton{

}
</style>
