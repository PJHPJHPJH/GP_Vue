<template>
  <el-menu
      id="page"
      :default-active="props.activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      background-color="white"
  >
    <el-menu-item index="0">BRP推荐系统</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="goToIndex">首页</el-menu-item>
    <el-menu-item index="2" @click="goToAllGoods">全部商品</el-menu-item>
    <el-menu-item index="3" @click="goToCart">购物车</el-menu-item>
    <el-sub-menu index="4">
      <template #title>用户中心</template>
      <el-menu-item index="2-1" @click="goToInformation">个人信息</el-menu-item>
      <el-menu-item index="2-2" @click="forgetPassword">修改密码</el-menu-item>
      <el-menu-item index="2-3" @click="loginOff">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
const props = defineProps({
  activeIndex: String
})


//使用路由
const router = useRouter();

// const activeIndex = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const loginOff = function() {
  sessionStorage.removeItem("userId");
  router.push({path:"/"});
}

//跳转到首页
const goToIndex = function() {
  router.push({path:"/index"});
}

//跳转到商品页面
const goToAllGoods= function() {
  router.push({path:"/AllGoods"});
}

//跳转到购物车
const goToCart = function() {
  router.push({path:"/cart"});
}

//跳转到忘记密码界面
const forgetPassword = function() {
  router.push({path:"/forget"})
}


//跳转到个人中心
const goToInformation = function() {
  router.push({path:"/information"})
}




</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu-demo {
  float: top;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 100;
}
</style>