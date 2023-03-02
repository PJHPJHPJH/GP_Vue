<template>
  <el-carousel :interval="2000" type="card" height="300px"
               id="carousel" :autoplay="true">
    <el-carousel-item v-for="item in ['热销商品1', '热销商品2', '热销商品3', '热销商品4']" :key="item">
      <h3 text="2xl" style="text-align: center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "RotationChart"
}
</script>

<style scoped>
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

</style>