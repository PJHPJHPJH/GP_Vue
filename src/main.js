import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from "@/components/router";

createApp(App)
    .use(ElementPlus, { locale })
    .use(router)
    .mount('#app')
