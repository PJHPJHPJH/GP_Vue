<template>

<div class="kind" v-for="i in 8">
  <button class="kind-btn">分类</button>
</div>

</template>

<script setup>
//待完成
//渲染全部分类的配置列表
const config = [
  {
    kind: "全部",
    color: "",
  },

]

</script>

<style scoped>
.kind {
  margin: 1.5%;
  width: 20%;
  height: 100px;
  display: inline-block;

}

.kind-btn {
  display: block;
  width: 100%;
  height: 100%;

}

</style>