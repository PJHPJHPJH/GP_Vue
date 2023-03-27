import { createRouter, createWebHistory } from 'vue-router'

import Index from "@/components/Foreground/pages/Index"
import LoginOrRegister from "@/components/Foreground/pages/LoginOrRegister"
import Background from "@/components/Background/pages/Background"
import Welcome from "@/components/Background/component/Welcome"
import Users from "@/components/Background/component/Users"
import ForgetPassword from "@/components/Foreground/pages/ForgetPassword"

//路由数组
const routes = [


    //前台路由

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
    {
        //基本格式
        //开启页面默认路由  登录和注册页面
        path: "/forget",
        name: "forget",
        component: ForgetPassword,
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