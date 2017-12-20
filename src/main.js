import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Vuex  from 'vuex';
import  Login from'./components/page/Login.vue'
import  Icon from'./assets/icon/iconfont.js'
import  * as custom  from './filters/stringFilters.js'



import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
/*import "babel-polyfill";*/

Vue.use(ElementUI,Vuex,Icon );
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})
axios.defaults.withCredentials = true;
/*axios.defaults.headers['Content-Type']="application/json"
axios.defaults.headers.common['Authorization'] = "Basic dXNlcjp1c2Vy";*/
let u1 = "http://test.neweplatform.com:6002/manage";
let u2="http://panoramic.neweplatform.com:60002/manage"
Vue.prototype.$axios = axios;
Vue.prototype.$url=u1;
Vue.prototype.$axios.interceptors.request.use(function (config) {
   /*  config.headers['Content-Type'] ="application/x-www-form-urlencoded";*/
    /*   config.headers['Authorization'] = 'Basic dXNlcjp1c2Vy'*/
    return config;
}, function (err) {
    return Promise.reject(err);
});
Date.prototype.format = function(format,n) {
    var b=n|0;
    var date = {
        "YYYY+":this.getFullYear(),
        "MM+": this.getMonth() + 1-b,
        "dd+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}
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


