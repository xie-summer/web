<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index":text-color="color">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index":text-color="color" >
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
        <el-menu
            default-active="onRoutes"
            class="el-menu-vertical-demo"
            unique-opened>
                <template>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            生产监管
                        </template>
                        <el-menu-item index="1-1" @click="show1()":text-color="color">实时通讯监控</el-menu-item>
                        <el-menu-item index="1-2"@click="show2()":text-color="color">生产监管</el-menu-item>
                    </el-submenu>
                </template>
                <template>
                    <el-menu-item index="8" @click="show3()":text-color="color">
                        <i class="el-icon-menu"></i>
                       资金监管
                    </el-menu-item>
                </template>
                <template>
                    <el-menu-item index="9"@click="show4()":text-color="color">
                        <i class="el-icon-setting"></i>
                       设备监管
                    </el-menu-item>
                </template>
                 <template>
                    <el-menu-item index="10" @click="show5()":text-color="color">
                        <i class="el-icon-setting"></i>
                        在途物资
                    </el-menu-item>
                </template>
        </el-menu>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template>
                <el-menu-item index="police":text-color="color" >
                    <i class="el-icon-bell"></i>报警状态一览
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHeight:true,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '全景监控'
                    },
                    /*{
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }
                        ]
                    },*/
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '库存监管',
                        subs: [
                            {
                                index: 'material',
                                title: '原料库'
                            },
                            {
                                index: 'product',
                                title: '产品库'
                            },
                            {
                                index: 'sparepart',
                                title: '备品备件库'
                            }
                        ]
                    },/*{
                        icon: 'el-icon-menu',
                        index: '4',
                        title: '生产监管',
                        subs: [
                            {
                                index: '',
                                title: '实时通讯监控',
                            },
                            {
                                index: '',
                                title: '生产监管',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '',
                        title: '资金监管',
                    },

                    {
                        icon: 'el-icon-menu',
                        index: '',
                        title: '设备管理',
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '',
                        title: '在途物资',
                    },*/

                  /*  {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '人员效率监控',
                        subs: [
                            {
                                index: 'pefficiency',
                                title: '生产人员效率'
                            }
                        ]
                    },*/


                 /*   {
                        icon: 'el-icon-bell',
                        index: 'police',
                        title: '报警状态一览'
                    },*/
                  /*  {
                        icon: 'el-icon-star-off',
                        index: 'entering',
                        title: '人工录入'
                    },*/
                    /*{
                        icon: 'el-icon-date',
                        index: 'baseform',
                        title: '基本表单'
                    },*/
                    /*{

                        icon: 'el-icon-date',
                        index: '4',
                        title: '表单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    },*/
                 /*   {
                        icon: 'el-icon-upload2',
                        index: 'personGrade',
                        title: '评分'
                    }*/
                ],
                color:"#ffffff"
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods:{
            show(name,item){
             /*   console.log(item)*/
              /* if(name=="资金监管"){window.open("http://flowasset.newefactory.com")}
                if(name=="生产监管"){window.open("http://www.newefactory.com ")}
                if(name=="在途物资"){window.open(" http://g7s.huoyunren.com ")}
                if(name=="设备管理"){window.open("http://116.62.116.10/")}*/
            },
            show1(){
                window.open("http://116.62.116.10:5510/fmWebView.asp")
            },
            show2(){
                window.open("http://www.newefactory.com")
            },
            show3(){
                window.open("http://flowasset.newefactory.com")
            },
            show4(){
                window.open("http://116.62.116.10/")
            },
            show5(){
                window.open(" http://g7s.huoyunren.com ")
            },
            showHeight(){
                if( this.isHeight==true){
                    this.isHeight=false;
                }else{
                    this.isHeight==true
                }

            }
        }
    }
</script>

y<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
/*    .sidebar > ul {
        height:312px;
    }*/
  /*  .is-active{color: #ffffff}*/
    /*.el-menu-vertical-demo{background-color: #444D59;}*/

</style>
