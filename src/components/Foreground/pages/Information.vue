<template>
  <Nav :activeIndex="'2-1'"></Nav>

  <div class="header">
    <h1>个人中心</h1>
    <h3 class="headerInformation">全部信息</h3>
  </div>
  <div id="information">
    <div id="name">
        <h4 class="informationShow">姓  名：</h4>
        <p class="informationShow">{{userInformation.name}}&nbsp;&nbsp;</p>
        <el-button @click="nameDialogVisible = true"><el-icon><Edit /></el-icon></el-button>
    </div>




<!--    用户名弹窗-->
    <el-dialog
        v-model="nameDialogVisible"
        title="Notice"
        width="30%"
        destroy-on-close
        center
    >
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
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="updateName" :disabled="confirm_disabled">
          修改
        </el-button>
      </span>
      </template>
    </el-dialog>



    <div id="password">
      <h4 class="informationShow">密  码：</h4>
      <p class="informationShow">{{userInformation.password}}&nbsp;&nbsp;</p>
    </div>



    <div id="email">
      <div>

        <div v-if="userInformation.email !== ''">
          <h4 class="informationShow">邮  箱：</h4>
          <p class="informationShow">{{userInformation.email}}&nbsp;&nbsp;</p>
          <el-button @click="emailDialogVisible = true"><el-icon><Edit /></el-icon></el-button>
        </div>
        <div v-if="userInformation.email === ''">
          <h4 class="informationShow">邮  箱：</h4>
          <p class="informationShow">未设置&nbsp;&nbsp;</p>
          <el-button @click="emailDialogVisible = true"><el-icon><CirclePlus /></el-icon></el-button>
        </div>
      </div>
    </div>


<!--      邮箱弹窗     -->
    <el-dialog
        v-model="emailDialogVisible"
        title="Notice"
        width="30%"
        destroy-on-close
        center
    >
      <el-form label-width="100px" class="login_form">
        <el-form-item label="邮箱：" prop="no">
          <el-input type="text" prefix-icon="el-icon-s-custom" v-model="email" autocomplete="off"
                    placeholder="请输入邮箱" clearable @blur="setEmailmsg"
          ></el-input>
        </el-form-item>
        <br v-show="emailmsg === ''">
        <p v-show="emailmsg !== ''" style="height:20px; margin: 0px;">{{ emailmsg }}</p>
        <br>

        <el-form-item label="密码：" prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="password" show-password autocomplete="off" @keyup.enter="confirm"
                    placeholder="请输入密码" clearable @blur="setPasswordmsg"
          ></el-input>
        </el-form-item>
        <br v-show="passwordmsg === ''">
        <p v-show="passwordmsg !== ''" style="height: 20px; margin: 0px;">{{ passwordmsg }}</p>
        <br>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="updateEmail" :disabled="confirm_disabled">
          修改
        </el-button>
      </span>
      </template>
    </el-dialog>



    <div id="phone">
      <div>
        <div v-if="userInformation.phone !== ''">
          <h4 class="informationShow">手机号：</h4>
          <p class="informationShow">{{userInformation.phone}}&nbsp;&nbsp;</p>
          <el-button @click="phoneDialogVisible = true"><el-icon><Edit /></el-icon></el-button>
        </div>
        <div v-if="userInformation.phone === ''">
          <h4 class="informationShow">手机号：</h4>
          <p class="informationShow">未设置&nbsp;&nbsp;</p>
          <el-button @click="phoneDialogVisible = true"><el-icon><CirclePlus /></el-icon></el-button>

        </div>
      </div>
    </div>


<!--    手机号弹窗       -->
    <el-dialog
        v-model="phoneDialogVisible"
        title="Notice"
        width="30%"
        destroy-on-close
        center
    >
      <el-form label-width="100px" class="login_form">
        <el-form-item label="手机号：" prop="no">
          <el-input type="text" prefix-icon="el-icon-s-custom" v-model="phone" autocomplete="off"
                    placeholder="请输入手机号" clearable @blur="setPhonemsg"
          ></el-input>
        </el-form-item>
        <br v-show="phonemsg === ''">
        <p v-show="phonemsg !== ''" style="height:20px; margin: 0px;">{{phonemsg }}</p>
        <br>

        <el-form-item label="密码：" prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="password" show-password autocomplete="off" @keyup.enter="confirm"
                    placeholder="请输入密码" clearable @blur="setPasswordmsg"
          ></el-input>
        </el-form-item>
        <br v-show="passwordmsg === ''">
        <p v-show="passwordmsg !== ''" style="height: 20px; margin: 0px;">{{ passwordmsg }}</p>
        <br>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="updatePhone" :disabled="confirm_disabled">
          修改
        </el-button>
      </span>
      </template>
    </el-dialog>



    <hr>
    <div class="header">
      <h3 class="headerInformation">全部消息</h3>
    </div>






  </div>

</template>

<script setup>
import Nav from "@/components/Foreground/component/Nav";
import {reactive, ref} from "vue";
import Axios from "axios";
import {Edit, CirclePlus} from '@element-plus/icons-vue'

const id = ref(sessionStorage.getItem("userId"));
let userInformation = reactive({})


//弹窗确认按钮验证
let confirm_disabled = ref(true);
//需要修改的值
let name = ref("");
let password = ref("");
let email = ref("");
let phone = ref("");


//验证提示信息
let namemsg = ref("\t");
let passwordmsg = ref("\t");
let emailmsg = ref("\t");
let phonemsg = ref("\t");

//控制弹窗的显示
let nameDialogVisible = ref(false);
let emailDialogVisible = ref(false);
let phoneDialogVisible = ref(false);


//启动时就请求用户信息
const getUserInformation = function() {
  Axios.post("http://localhost:9999/getUserInformation",{
    id: id.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        // console.log(response.data)
        userInformation.name = response.data.userName;
        userInformation.password = response.data.userPassword;
        userInformation.email = response.data.userEmail;
        userInformation.phone = response.data.userPhone;
        name.value = response.data.userName;
        email.value = response.data.userEmail;
        phone.value = response.data.userPhone;
      }
  )
}
getUserInformation();




//用户名验证
const setNamemsg = function() {
  console.log(name.value)
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
          if (namemsg.value === "" && passwordmsg.value === "") {
            confirm_disabled.value =false;
          }
        }
      }
  )
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
  else if (password.value !== userInformation.password) {
    passwordmsg.value = "密码错误";
    confirm_disabled.value= true;
  }
  else{
    passwordmsg.value = "";
    //进行验证，保证用户名，验证码和密码都正确才能登录
    if ((namemsg.value === "" || emailmsg.value === "" || phonemsg.value === "")
        && passwordmsg.value === ""){
      confirm_disabled.value = false;
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
          confirm_disabled.value = true;
        } else if (repeatEmail) {
          emailmsg.value = "该邮箱已被验证";
          confirm_disabled.value = true;
        } else {
          emailmsg.value = "";
          //对所有条件进行验证
          if (emailmsg.value === "" && passwordmsg.value === "") {
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
          confirm_disabled.value = true;
        } else if (repeatPhone) {
          phonemsg.value = "该手机号已被验证";
          confirm_disabled.value = true;
        } else {
          phonemsg.value = "";
          //对所有条件进行验证
          if (phonemsg.value === "" && passwordmsg.value === ""){
            confirm_disabled.value = false;
          }
        }
      }
  )
}


const cancel = function() {

  confirm_disabled.value= true;

  //点击取消以及确认操作完成后将所有变量初始化
  name.value = userInformation.name;
  password.value = "";
  email.value = userInformation.email;
  phone.value = userInformation.phone;

  namemsg.value = "\t";
  passwordmsg.value = "\t";
  emailmsg.value = "\t";
  phonemsg.value = "\t";

  //取消弹框
  nameDialogVisible.value = false;
  emailDialogVisible.value = false;
  phoneDialogVisible.value = false;

}

//修改用户名
const updateName = function() {
  Axios.post("http://localhost:9999/updateName",{
    name: name.value,
    id: id.value,
    password: password.value
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data);
        //对用户信息进行更新
        getUserInformation();
        cancel();
      }
  )
}


//修改或添加用户邮箱
const updateEmail = function() {

  //添加邮箱
    Axios.post("http://localhost:9999/updateEmail",{
      email: email.value,
      id: id.value,
      password: password.value
    }, {
      headers: {
        'Content-Type': 'application/json',
        // other headers here...
      }
    }).then(
        response => {
          console.log(response.data);
          //对用户信息进行更新
          getUserInformation();
          cancel();
        }
    )

}



//修改或添加用户手机号
const updatePhone = function() {
  //添加邮箱
    Axios.post("http://localhost:9999/updatePhone",{
      phone: phone.value,
      id: id.value,
      password: password.value
    }, {
      headers: {
        'Content-Type': 'application/json',
        // other headers here...
      }
    }).then(
        response => {
          console.log(response.data);
          //对用户信息进行更新
          getUserInformation();
          cancel();
        }
    )

}





</script>

<style scoped>
.header{
  margin-top: 75px;
  text-align: left;
}

.headerInformation{

}


#information{
  text-align: left;
}

.informationShow{
  display: inline-block;
}
</style>