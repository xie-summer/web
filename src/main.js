import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Vuex  from 'vuex';
import  Login from'./components/page/Login.vue'
import  Icon from'./assets/icon/iconfont.js'


import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI,Vuex,Icon );
Vue.prototype.$axios = axios;
let routers = new VueRouter({
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    }]
})
let vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


