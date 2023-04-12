<template>
  <el-carousel :interval="2000" type="card" height="300px"
               id="carousel" :autoplay="true">
<!--    <el-carousel-item v-for="item in ['热销商品1', '热销商品2', '热销商品3', '热销商品4', '热销商品5']" :key="item">-->
    <el-carousel-item v-for="item in hotItems" :key="item" style="text-align: center">
      <h3 text="2xl" >热销商品：{{ item.itemid }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import {reactive} from "vue";
import Axios from "axios";

let hotItems = reactive([])
Axios.get("http://127.0.0.1:5000/hot_item").then(
    response => {
      console.log(response.data)
      for (let i = 0; i < response.data.length; i++){
        hotItems[i] = response.data[i]
      }
    }
)

</script>

<style scoped>
  #carousel {
    margin-top: 50px;
    padding-top: 20px;
    align-content: center;
    justify-content: center;
  }
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

</style>