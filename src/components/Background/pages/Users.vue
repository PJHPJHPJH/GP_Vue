<template>
  <p>用户信息</p>
  <p>############ 用户操作待完成 ############(可删除)</p>
  <el-table :data="tableData" height="100vh" style="width: 85%"
            :header-cell-style="{ background: '#5daee5', color: '#FFFFFF'}"
            border
            stripe>
    <el-table-column prop="userId" label="id" width="180" align="center"/>
    <el-table-column prop="userName" label="用户名" width="180"  align="center"/>
    <el-table-column prop="userPassword" label="密码(后期加上hash加密)" width="180"  align="center"/>
    <el-table-column prop="userEmail" label="邮箱" width="300" align="center"/>
    <el-table-column prop="userPhone" label="手机号" width="300" align="center"/>
    <el-table-column prop="userPass" label="" align="center"/>
  </el-table>
</template>

<script setup>

import Axios from "axios";
import {reactive} from "vue";

const tableData = reactive([]);

// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-08',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-06',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-07',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]


Axios.get("http://localhost:9999/getUsers", {
  headers: {
    'Content-Type': 'application/json',
    // other headers here...
  }
}).then(
    response => {
      for (let i = 0; i < response.data.length; i++) {
        tableData[i] = response.data[i];
      }
      console.log(tableData)
    }
)
</script>

<style scoped>

</style>