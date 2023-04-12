<template>
  <Nav :activeIndex="'2'"></Nav>

  <div id="all-items">
    <div v-for="(item, index) in showData" class="all-item" :key="index">
      <div v-if="item !== undefined">
      <h4 class="item-title">{{ item.itemName }}</h4>
      <div class="description">
<!--            图片待定      -->
<!--        <img src="../../../assets/phone.jpg" class="phone-image"/>-->
        <div class="text">
          <pv class="itemDescription">商品描述：{{ item.itemDescription }}</pv>
          <p>价格：￥{{ item.itemPrice }}</p>
          <p>评分：{{ item.itemRate }}</p>
          <el-button class="btn" type="primary" @click="goToInformation(item.itemId)">查看详情</el-button>
          <el-button class="btn" type="success" @click="addCart(item.itemId)">加入购物车</el-button>
          <el-button class="btn" type="warning" @click="buy(item.itemPrice)">立即购买</el-button>
        </div>
      </div>
    </div>
    </div>
  </div>
  <el-pagination id="pagination"
                   background layout="prev, pager, next, jumper"
                   :total="total"
                   :page-size="pageSize"
                   v-model:current-page="currentPage"
                  @prev-click="frontPage"
                  @next-click="nextPage"
                  @current-change="currentPageChange"
  />


</template>

<script setup>
import Nav from "@/components/Foreground/component/Nav";
import {reactive, ref} from "vue";
import Axios from "axios";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router/dist/vue-router";

//使用路由
const router = useRouter();


//获得当前用户
const userId = sessionStorage.getItem("userId");

//分页功能
//所有数据
let data = reactive([])
//本页展示的数据
let showData  = reactive([])
//数据总条数
const total = ref(0);
//当前页码
const currentPage = ref(1)
//每页展示的数量
const pageSize = ref(10)


//加载时直接调用
const getAllItemsInformation = async function() {
  Axios.post("http://localhost:9999/getAllItems",{
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        // console.log(response.data)
        data = response.data
        total.value = data.length
        getShowData(1);
      }
  )
}



const getShowData = function(currentPage) {
  let initNum = (currentPage -1) * pageSize.value
  for(let i = initNum;
      i < initNum + pageSize.value;
      i++){
    showData[i - initNum] = data[i];
  }
  console.log(data)
  console.log(showData)
}

getAllItemsInformation()

//上一页
const frontPage = function() {
  // currentPage.value -= 1
  getShowData(currentPage.value)
  scrollTo(0, 0)
}

//下一页
const nextPage = function() {
  // currentPage.value += 1
  getShowData(currentPage.value)
  scrollTo(0, 0)

}

//跳转到某一页
const currentPageChange = function() {
  getShowData(currentPage.value)
  scrollTo(0, 0)

}


//跳转到详情商品页面
const goToInformation = function(itemId) {
  router.push({path:"/goodInformation", query:{
    itemId: itemId
    }});
}



//加入购物车
const addCart = function(itemId) {
  Axios.post("http://localhost:9999/addCart",{
    itemId: String(itemId),
    userId: userId
  }, {
    headers: {
      'Content-Type': 'application/json',
      // other headers here...
    }
  }).then(
      response => {
        console.log(response.data)
        if (response.data === true) {
          ElMessage({
            message: '商品加入购物车',
            type: 'success',
          })
        }
        else{
          ElMessage({
            message: '重复添加',
            type: 'warning',
          })
        }
      }
  )

}


//立即购买
const buy = function(price) {
  ElMessage({
    message: '购买成功，一共消费￥' + String(price),
    type: 'success',
  })
}



</script>

<style scoped>
  .description {
    display: block;
  }

  #all-items {
    width: 90%;
    height: 100%;
    padding: 2.5%;
    margin: 2.5%;
  }

  .all-item {
    padding: 1%;
    margin: 1%;
    width:45%;
    height: 30%;
    text-align: left;
    display: inline-block;
    border: #ffffff solid 1px;
  }

  .all-item:hover{
    /*border: #475669 solid 1px;*/
    box-shadow: 0 0 10px rgba(80, 77, 77, 0.3);
  }

  .itemDescription{
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 50px;
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

  /*.text {*/
  /*  height: 300px;*/
  /*}*/

  .btn {
    margin: 20px;
  }




  #pagination{
    position: relative;
    bottom: 0px;
    left: 25%;
    width: 50%;
  }


</style>