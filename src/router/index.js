import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),/*首页*/
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve),
                    meta: {keepAlive: true}/*首页*/
                },

                {
                    path: '/material',
                    component: resolve => require(['../components/page/Material.vue'], resolve),
                    meta: {keepAlive: true}/*原料库*/
                },
                {
                    path: '/product',
                    component: resolve => require(['../components/page/Product.vue'], resolve),
                    meta: {keepAlive: true}/*产品库*/
                },
              /*  {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)                 //form表单
                },*/
                {
                    path: '/sparepart',
                    component: resolve => require(['../components/page/sparepart/Sparepart.vue'], resolve),
                    meta: {keepAlive: true}/*备品备件库*/
                },
                /*{
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },

                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },*/
                {
                    path: '/personGrade',
                    component: resolve => require(['../components/page/PersonGrade.vue'], resolve) ,
                    meta: {keepAlive: true}// vue-schart组件
                },
                {
                    path: '/logistics',
                    component: resolve => require(['../components/page/logistics/Logistics.vue'], resolve) ,
                    meta: {keepAlive: true}// vue-schart组件
                },
                {
                    path: '/police',
                    component: resolve => require(['../components/page/police/Police.vue'], resolve) ,
                    meta: {keepAlive: true}// vue-schart组件
                },
               {
                    path: '/entering',
                    component: resolve => require(['../components/page/entering/Entering.vue'], resolve) ,
                   meta: {keepAlive: true}// vue-schart组件
                },
                {
                    path: '/pefficiency',
                    component: resolve => require(['../components/page/pefficiency/Pefficiency.vue'], resolve) ,
                    meta: {keepAlive: true}// vue-schart组件
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            meta: {keepAlive: true}
        },
    ]
})
