import { createRouter, createWebHistory } from 'vue-router'

import Index from "@/components/pages/Index"
import LoginOrRegister from "@/components/pages/LoginOrRegister"



//路由数组
const routes = [

    {
        //基本格式
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


]

//路由对象
const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    //上方定义的路径
    routes

})

//导出路由对象，在main.js中引用
export default router