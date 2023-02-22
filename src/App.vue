<template>
<!--  <HelloWorld msg="Hello"/>-->
  <Index></Index>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Index from "@/components/Index";
import Index from "@/components/Index";


export default {
  name: 'App',
  components: {
    Index,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
