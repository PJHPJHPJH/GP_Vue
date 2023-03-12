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
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">全部商品</el-menu-item>
    <el-menu-item index="3">购物车</el-menu-item>
    <el-sub-menu index="4">
      <template #title>用户中心</template>
      <el-menu-item index="2-1">个人信息</el-menu-item>
      <el-menu-item index="2-2">修改密码</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {ref, defineProps} from "vue";
const props = defineProps({
  activeIndex: String
})


// const activeIndex = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>