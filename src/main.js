import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'
import * as echarts from "echarts"
import { setting } from './setting.js'
import socket, { registerSockets, destroySockets } from "@/utils/socket";

import '@/utils/permission'; // 路由控制
import '@/style/main.css';
import '@/style/index.less';
import 'virtual:svg-icons-register'; // icon

// 引入组件库全局样式资源
import 'element-plus/dist/index.css';

const app = createApp(App);

// 便于在任意位置获取到 socket 对象
app.config.globalProperties.$socket = socket;
// 监听事件
app.config.globalProperties.$addSockets = registerSockets;
// 移除事件
app.config.globalProperties.$removeSockets = destroySockets;
// 挂载公共设置
app.config.globalProperties.Setting = setting;
// 挂载echarts
app.config.globalProperties.$echarts = echarts;

app.use(router).use(ElementPlus).use(store).mount('#app');
