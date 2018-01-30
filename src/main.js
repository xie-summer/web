import 'babel-polyfill'
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Vuex  from 'vuex';
import  store from './vuex/store.js'
import  Login from'./components/page/Login.vue'
import  Icon from'./assets/icon/iconfont.js'
import  * as stringFilters  from './filters/stringFilters.js'
import   * as numberFilter from './filters/numberFilter.js'



import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
/*过滤器*/
/* 字符串过滤*/

Vue.use(ElementUI,Vuex,Icon );
Object.keys(stringFilters).forEach(key => {
    Vue.filter(key, stringFilters[key])
})
/*数字类型过滤*/
Object.keys(numberFilter).forEach(key => {
    Vue.filter(key, numberFilter[key])
})
axios.defaults.withCredentials = true;
/*axios.defaults.headers['Content-Type']="application/json"
axios.defaults.headers.common['Authorization'] = "Basic dXNlcjp1c2Vy";*/
let u1 = "http://192.168.1.106:9000";
let u2="http://gateway.neweplatform.com/manage";
let u7="http://panoramic.neweplatform.com:60002/manage"
/*登录*/
let u3 = "http://192.168.1.106:6002/users";
let u4 = "http://gateway.neweplatform.com/users";
let u8="http://panoramic.neweplatform.com:60002/users";
/*预警*/
let u5="http://192.168.1.106:5000";
let u6="http://gateway.neweplatform.com/risk-warning";
let u9="http://panoramic.neweplatform.com:60002/risk-warning"
Vue.prototype.$axios = axios;
Vue.prototype.$url=u1;
Vue.prototype.$url3=u3;
Vue.prototype.$url5=u5;
/*请求拦截器*/
Vue.prototype.$axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] ="application/x-www-form-urlencoded"
       /*config.headers['Authorization'] = 'Basic dXNlcjp1c2Vy';*/
    return config;
}, function (err) {return Promise.reject(err);
});
/*date格式化*/
Date.prototype.format = function(format,n,p) {
    var b=n|0;
    var c=p|0;
    var newTime = this;
    if(c>0){
        var time = this.getTime();
        newTime = new Date(time-c * 24 * 3600 * 1000);
    }
    var date = {
        "YYYY+":newTime.getFullYear(),
        "MM+": newTime.getMonth() + 1-b,
        "dd+": newTime.getDate(),
        "h+": newTime.getHours(),
        "m+": newTime.getMinutes(),
        "s+": newTime.getSeconds(),
        "q+": Math.floor((newTime.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if(date["MM+"]==0){
        date["MM+"]=12;date["YYYY+"]=date["YYYY+"]-1;
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear()-1 + '').substr(4 - RegExp.$1.length));
        }
    }else{
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
},
    String.prototype.formatDate=function(n){
        let count=n|0;
        var t = Date.parse(this);
        if (!isNaN(t)) {
            let date = new Date(Date.parse(this.replace(/-/g, "/"))).format("YYYY-MM-dd",count);
            let arr=[];
            arr=date.split("-");
            return arr[0]+"-"+arr[1]+"-1"
        } else {
            let time = this.format("YYYY-MM",1);
            let arr=[];
            arr=time.split("-");
            return arr[0]+"-"+arr[1]+"-1"
        }
    },
    Date.prototype.dDate=function(n){
        let p=n|0;
        var dd = new Date();
        dd.setDate(dd.getDate()+p);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        if(m<10){m="0"+m}
        var d = dd.getDate();
        if(d<10){d="0"+d}
        return y+"-"+m+"-"+d;
    },
    Array.prototype.max = function() {
        var max = this[0];
        var len = this.length;
        for (var i = 1; i < len; i++){
            if (this[i] > max) {
                max = this[i];
            }
        }
        return max;
    }
let routers = new VueRouter({
    mode:'history',
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    }],
    scrollBehavior (to, from, savedPosition) {
        return { x:0,y: 0 }
    }
})
let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


