import { createRouter, createWebHistory } from 'vue-router'

import Index from "@/components/Foreground/pages/Index"
import LoginOrRegister from "@/components/Foreground/pages/LoginOrRegister"
import Background from "@/components/Background/pages/Background"
import Welcome from "@/components/Background/pages/Welcome"
import Users from "@/components/Background/pages/Users"
import ForgetPassword from "@/components/Foreground/pages/ForgetPassword"
import AllGoods from "@/components/Foreground/pages/AllGoods"
import Information from "@/components/Foreground/pages/Information"
import Cart from "@/components/Foreground/pages/Cart"
import GoodInformation from "@/components/Foreground/pages/GoodInformation"

//路由数组
const routes = [


    //前台路由

    {
        //基本格式
        //主页
        path: "/index",
        name: "index",
        component: Index,
    },
    {
        //基本格式
        //开启页面默认路由  登录和注册页面
        path: "/",
        name: "login",
        component: LoginOrRegister,
    },
    {
        //基本格式
        //忘记密码
        path: "/forget",
        name: "forget",
        component: ForgetPassword,
    },
    {
        //基本格式
        //所有商品页面
        path: "/allGoods",
        name: "allGoods",
        component: AllGoods,
    },
    {
        //基本格式
        //个人中心
        path: "/information",
        name: "information",
        component: Information,
    },
    {
        //基本格式
        //购物车
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        //基本格式
        //商品详情页
        path: "/goodInformation",
        name: "goodInformation",
        component: GoodInformation,
    },









    //后台路由



    {
        //基本格式
        //后台入口
        path: "/background",
        name: "background",
        component: Background,
        children: [
            {
                path: "welcome",
                component: Welcome
            },
            {
                path: "users",
                component: Users
            }
        ]
    },


]

//路由对象
const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    //上方定义的路径
    routes

})

//导出路由对象，在main.js中引用
export default router