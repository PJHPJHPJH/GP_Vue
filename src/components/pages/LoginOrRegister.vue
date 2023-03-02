<template>
  <div id="body">
    <div id="change">
      <el-radio-group v-model="isLogin" style="margin-bottom: 20px"
                      text-color="#FFFFFF" fill="#0000FF" size="20">
        <el-radio-button :label="true" class="btn">登 录</el-radio-button>
        <el-radio-button :label="false">注 册</el-radio-button>
      </el-radio-group>
    </div>
    <div id="show">
      <Login v-show="isLogin"></Login>
      <Register v-show="!isLogin"></Register>

    </div>
  </div>
</template>

<script setup>

import Login from '@/components/pages/Login'
import {ref} from "vue"
import Register from '@/components/pages/Register'
let isLogin = ref(true);


</script>

<style scoped>
#body{
  width: 65%;
  position: relative;
}

#change{
  right: 0px;
  position: absolute;
  top: 120px;
  z-index: 10;
}

</style>


