import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'; //引入vue-router
import './index.css'
import 'amfe-flexible/index.js'
import '@/assets/css/reset.less'
import Vconsole from 'vconsole';

new Vconsole();
const app = createApp(App);
app.use(router); // 挂载到app上
app.mount('#app');