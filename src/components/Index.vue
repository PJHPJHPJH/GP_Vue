<template>
  <el-menu
      id="page"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      background-color="white"

  >
    <el-menu-item index="0">推荐系统</el-menu-item>
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

  <el-carousel :interval="2000" type="card" height="200px"
               id="carousel" :autoplay="true">
    <el-carousel-item v-for="item in ['热销商品1', '热销商品2', '热销商品3', '热销商品4']" :key="item">
      <h3 text="2xl" justify="center" >{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

  <h2 id="title1">猜你喜欢</h2>

  <el-row id="recommand-items" v-for="(o1, index1) in 2">
    <el-col
        v-for="(o, index) in 4"
        :key="o"
        :span="6"
        :offset="index > 0 ? 0 : 0"
        id="box"
    >
      <el-card :body-style="{ padding: '20px' }">
        <img
            src="../assets/shopcart.jpg"
            class="image"
        />
        <div style="padding: 14px">
          <span>推荐商品{{ (index1 * 4 + index) + 1 }}</span>
          <div class="bottom">
            <time class="time">价格:{{ nowPrice }}</time>
            <el-button text class="button">添加到购物车</el-button>
            <el-button text class="button">购买</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <h2 id="title2">全部商品</h2>

  <div id="all-items">
    <div v-for="(item,index) in 10" class="all-item">
      <h5 class="item-title">商品名称</h5>
      <div class="description">
        <img src="../assets/phone.jpg" class="phone-image"
        />
        <div class="text">
          <p>商品描述：{{ description }}</p>
          <p>价格：{{ nowPrice }}</p>
          <!--        后期做成五颗星，可交互-->
          <p>评分：5星</p>
          <button>查看详情</button><br>
          <button>加入购物车</button>
          <br>
          <button>立即购买</button>

        </div>





      </div>
    </div>

  </div>




</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1');
const description = "华为手机";
// const lastPrice = "￥100";
const nowPrice = "￥50";
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

.flex-grow {
  flex-grow: 1;
}


#carousel {
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


#title1 {

}


/*#recommand-items {*/
/*  width:600px;*/
/*  height:400px;*/
/*}*/

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



.description {
  display: block;
}


.phone-image {
  width: 400px;
  height: 300px;
  display:flex;
  float: left;

}

.item-title {
  display: flex;
}

.text {

  height: 300px;
}


</style>