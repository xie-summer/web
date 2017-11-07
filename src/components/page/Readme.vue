<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 全景监控</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-date-picker
                @change="(value) => changeHandler(value)"
                v-model="value11"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd "
                value-format="yyyy-MM-dd"
                :default-value="timeDefaultShow"
                :picker-options="pickerOptions0"
                >
            </el-date-picker>
        </div>
        <div class="title">
            物资监管
        </div>
        <div class="titleCount">
            <div  v-for=" i in item" style="flex-grow:1">
                <el-col :span="23" class="count">
                    <el-col :span="24" class="fontCenter font1">磷矿粉</el-col>
                    <el-col :span="24"  class="fontCenter">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                        </svg>
                        <span>高</span>
                    </el-col>
                    <el-col :span="24" class="fontCenter font2">100.110</el-col>
                </el-col>
                <el-col  :span="1" style="height: 11rem" v-if="i<6"></el-col>
            </div>
        </div>
        <div class="goods">
            <el-col :span="24" class="goodsTitle">出库监控</el-col>
            <div  style="display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%">
                <el-col :md="10" :xs=24 :sm="24"class="goodsHeight" style="flex-grow:1">
                    <el-col :span="12">
                        <div class="numberHint">5</div>
                        <div class="titleHint">今日异常出库次数</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="timeTitle">最近一次异常出库</div>
                        <ul class="li">
                            <li>
                                <span>抓拍时间：</span><span>2017/01/01</span>
                            </li>
                            <li>
                                <span>车牌：</span><span>挂138</span>
                            </li>
                            <li>
                                <span>出库状态：</span><span>超重</span>
                            </li>
                        </ul>
                    </el-col>
                </el-col>
                <el-col :md="14":xs="24":sm="24" class="goodsHeight" style="flex-grow:1">
                    <v-table></v-table>
                </el-col>
            </div>
        </div>
        <div class="goods">
            <el-col :md="24":xs="24":sm="24" class="goodsTitle">生产监管</el-col>
            <div style="display: flex;display: -webkit-flex;flex-direcion:row ;width: 100%; flex-wrap:wrap;">
                <el-col :md="10"  class="top"style="flex-grow:1">
                    <div style="width: 50%;display: inline-block;flex-grow:1;float: left" class="noticeBoard" v-for=" (i,index) in items" >
                        <div class="noticeBoardNumber":class='i.color'>{{i.number}}</div>
                        <div class="noticeBoardText">{{i.text}}</div>
                    </div>
                </el-col>
                <el-col :md="14" :xs="24" :sm="24" class="tableColor"style="flex-grow:1">
                    <el-table :data="tableData" border style="width: 100%;"  >
                        <el-table-column prop="date" label="检修工段"  >
                        </el-table-column>
                        <el-table-column prop="name" label="检修设备" >
                        </el-table-column>

                    </el-table>
                </el-col>
            </div>
        </div>
        <div class="numberVerify">
            <el-col :md="24">
                <div style="float: left;font-size: 2.4rem">数据校验</div>

                <div class="time" >0.00-24.00</div>
                <div class="time timeRight">{{date|formatDate}}</div>
            </el-col>

                <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;justify-content:space-between;"class="row-bg dataVerify">
                    <el-col :md="6" class="backgroundVerify">
                        <el-col :md="12"  :xs="12" :sm="12">
                            <el-col :md="24" :xs="24"style="height:5rem;font-size: 1.6rem;padding-left: 1rem;padding-top: 0.5rem">磷矿粉消耗（吨）</el-col>
                            <el-col :md="24" :xs="24"style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #0D0D0D">520.00</el-col>
                            <el-col :md="24" :xs="24"style="height:5rem;font-size: 1.6rem;text-align: center">计量</el-col>
                        </el-col>
                        <el-col :md="12":xs="12" :sm="12">
                            <el-col :md="24" :xs="24" style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;">
                                <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <span style="color:#BB4B39">0.00</span>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">520.00</el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center">记录</el-col>
                        </el-col>
                    </el-col>


                </div>

            </div>
        </div>

</template>

<script>
    import vTable from './BaseTable.vue';
        import {formatDate} from './../../../static/js/dateFormat.js'

    export default {
        components:{
            vTable
        },
        data: function(){

            return {
                value11: new Date(),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();
            }
        },

        item:['1','2','3','4','5','6'],
        items:[
            {'number':'3%','text':'巡检作业项完成率','color':'red'},
            {'number':'3%','text':'作业项异常次数','color':'blue'},
            {'number':'3%','text':'巡检作业项数','color':'green'},
            {'number':'3%','text':'检修次数','color':'yellow'}
        ],
        tableData:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
        date:new Date()
            }
        },
    created:function(){

    },
   filters:{
        formatDate(){
            let date = new Date();
            return formatDate(date,'yyyy-MM-dd');
            //此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
        }
    },
    methods: {
        changeHandler:function(value){
            //选择时间后触发事件，预留
        }
    }
    }
</script>

<style>

   .right{float:right}
   .titleCount{display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;box-shadow: 5px 5px 3px #888888;margin-bottom: 2rem}
    .title{margin-top: 4.5rem;font-size: 2.4rem}
    .count{background-color: #ffffff;height:10rem}
    .fontCenter{text-align: center;}
    .font1{font-size: 1.8rem}
    .font2{font-size: 2.4rem}

    .goods{background-color: #ffffff;box-shadow: 5px 5px 3px #888888;margin-bottom: 2rem}
    .goodsTitle{font-size: 2rem;padding-left:2rem}
    .goodsHeight {height: 30.8rem}

    .numberHint{height:15.4rem;color: red;font-size: 4.8rem;text-align: center;line-height: 23rem}
    .titleHint{text-align: center;font-size: 1.8rem}
    .timeTitle{height: 5rem;line-height: 15rem;font-size: 1.8rem}
    .li{margin-top: 5rem}
    .li li{list-style-type:none;height: 3rem;font-size: 1.6rem}
    .top:nth-child(1){padding-top: 3rem}
   .top:nth-child(2){padding-top: 3rem}
   .noticeBoard{height:14rem}
    .noticeBoardNumber{font-size: 3.6rem;text-align: center}
    .noticeBoardText{font-size: 1.8rem;text-align: center}
   .row-bg {  padding: 10px 0; width: 100%}
   .backgroundVerify {  background: #ffffff; box-shadow: 5px 5px 3px #888888; }
    .red{color:red}
    .blue{color:blue}
    .yellow{color: yellow}
    .green{color: green}
    .numberVerify .time{float: right;font-size: 1.8rem;color:#888888}
    .numberVerify .timeRight{margin-right: 1rem}

</style>
