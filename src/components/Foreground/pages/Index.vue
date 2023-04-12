<template>

  <Nav :activeIndex="'1'"></Nav>

  <RotationChart></RotationChart>

  <h2 id="title1">猜你喜欢</h2>

  <SmartSuggest></SmartSuggest>

  <h2 id="title2">全部分类</h2>

  <Kind></Kind>

<!--  <all-goods></all-goods>-->

</template>

<script setup>
  import Nav from "@/components/Foreground/component/Nav";
  import RotationChart from "../component/RotationChart"
  import SmartSuggest from "../component/SmartSuggest"
  import Kind from "../component/Kind"

</script>

<style scoped>

  .flex-grow {
    flex-grow: 1;
  }

</style>