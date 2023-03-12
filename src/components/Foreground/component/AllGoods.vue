<template>
  <div id="all-items">
    <div v-for="(item,index) in 10" class="all-item">
      <h5 class="item-title">商品名称</h5>
      <div class="description">
        <img src="../../../assets/phone.jpg" class="phone-image"
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
const description = "华为手机";
// const lastPrice = "￥100";
const nowPrice = "￥50";
</script>

<style scoped>
  #title1 {

  }


  /*#recommand-items {*/
  /*  width:600px;*/
  /*  height:400px;*/
  /*}*/





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