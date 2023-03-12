<template>
  <div id="sidenav"><SideNav></SideNav></div>
  <div id="content">
    <router-view></router-view>
  </div>

</template>

<script setup>
import SideNav from "@/components/Background/component/SideNav"


</script>

<style scoped>
#sidenav{
  width: 15%;
  height: 1000px;
  display: inline-block;
  position: fixed;
  left: 0px;
  top: 0px;
  /*border-right: 2px solid #CCCCCC;*/
}

#content{
  position: relative;
  left: 15%;
}

</style>