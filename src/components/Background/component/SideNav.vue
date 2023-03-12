<template>
    <el-row class="tac">
      <el-col>
        <h5 class="mb-2">导航栏</h5>
        <el-menu
            style="height: 100vh;"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>信息管理</span>
            </template>
              <el-menu-item index="1-1" @click="users"><el-icon><User /></el-icon>用户管理</el-menu-item>
              <el-menu-item index="1-2"><el-icon><Goods /></el-icon>商品管理</el-menu-item>
              <el-menu-item index="1-3"><el-icon><Pointer /></el-icon>交互管理</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><View /></el-icon>
            <span>算法参数</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Connection /></el-icon>
            <span>推荐接口</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>

</template>

<script setup>
import {
  Menu,
  User,
  Goods,
  Pointer,
  View,
  Connection,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router/dist/vue-router";



//使用路由
const router = useRouter();


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const users = function() {
  router.push({path:"/background/users"});
}
</script>

<style scoped>


</style>