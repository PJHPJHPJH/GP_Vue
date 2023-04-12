<template>
  <Nav :activeIndex="'2'"></Nav>

  <div id="good">
    <el-button type="primary" id="back" @click="goBack">
        <el-icon><Back /></el-icon>返回
    </el-button>
    <h5 id="name">商品名：{{item.itemName}}</h5>
    <p id="description">描述：{{item.itemDescription}}</p>
    <p id="details">注意事项：{{item.itemDetails}}</p>
    <p id="fabric">材质：{{item.itemFabric}}</p>
    <p id="weight">重量：{{item.itemWeight}}</p>
    <p id="nation">产地：{{item.itemNation}}</p>
    <p id="price">价格：{{item.itemPrice}}</p>
    <p id="rate">评分：{{item.itemRate}}</p>
  </div>

</template>

<script setup>
import {Back} from '@element-plus/icons-vue'
import {useRoute} from "vue-router/dist/vue-router";
import {reactive} from "vue";
import Axios from "axios";
import Nav from "@/components/Foreground/component/Nav";
import {useRouter} from "vue-router/dist/vue-router";

//使用路由
const router = useRouter();


//使用useRoute()接受参数
const route = useRoute()
//获得商品ID
let itemId = route.query.itemId;
console.log(itemId)

let item = reactive({})

//根据商品ID获得全部信息
const getItem = function() {
  Axios.post("http://localhost:9999/getItem",{
    id: itemId
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        // console.log(response.data)
        item.itemName = response.data.itemName
        item.itemId = response.data.itemId
        item.itemDescription = response.data.itemDescription
        item.itemDetails = response.data.itemDetails
        item.itemFabric = response.data.itemFabric
        item.itemPrice = response.data.itemPrice
        item.itemRate = response.data.itemRate
        item.itemWeight = response.data.itemWeight
        item.itemNation = response.data.itemNation
        console.log(item)
      }
  )
}

//加载时直接调用
getItem()


//返回
const goBack = function() {
  router.back();
}


</script>

<style scoped>
  #back {
    margin-top: 2.5%;
    display: inline-block;
  }



  #good{
    text-align: left;
    padding: 1.5%;
  }
</style>