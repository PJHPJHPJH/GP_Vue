<template>
  <el-row id="recommand-items" v-for="(o1, index1) in 2">
    <el-col
        v-for="(o, index) in 4"
        :key="o"
        :span="6"
        :offset="index > 0 ? 0 : 0"
        id="box"
    >
      <el-card :body-style="{ padding: '20px' }">
<!--        <img src="../../assets/shopcart.jpg" class="image"/>-->
        <div style="padding: 14px">
          <span>商品ID:{{ (comment_obj[index1 * 2 + index]).itemid }}</span>
<!--          <span>{{ comment_obj }}</span>-->
          <div class="bottom">
            <time class="time">价格:{{ nowPrice }}</time>
            <el-button text class="button">添加到购物车</el-button>
            <el-button text class="button">购买</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
/**
 * 引入必要的模块
 */
import { defineProps, ref, reactive } from 'vue'
import Axios from "axios";
/**
 * 定义数据
 */
const nowPrice = ref(50);
// const props = defineProps(['comment_obj'])

//后期动态获得
//需要解决数据抖动问题
// let comment_obj = null;
let comment_obj = reactive([{itemid: 1}, {itemid: 2}, {itemid: 3}, {itemid: 4}, {itemid: 5}, {itemid: 6},{itemid: 7},{itemid: 8}]);
const userId = 14;
Axios.get("http://127.0.0.1:5000/brp/" + userId).then(
    response => {
      console.log(response.data)
      // comment_obj = JSON.parse(response.data)
      for (let i = 0; i < response.data.length; i++){
        comment_obj[i] = response.data[i]
      }
    }
)
</script>

<style scoped>
#box {
  padding: 20px;
}


.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  width: 15%;
  min-height: auto;
}

.image {
  width: 50%;
  display: block;
}
</style>