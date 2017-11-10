<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 库存</el-breadcrumb-item>
                <el-breadcrumb-item>产品库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="select_time">
            <button class="button_class" :class="{blue:change==key}"@click="cut(key,item.name)" v-for=" (item,key) in nameData " :key="key" style="width: 8rem">{{item.name}}</button>
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
        </div>
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;box-shadow: 5px 5px 3px #E5E5E5;">
            <el-col :md="24" :xs="24":sm="24" class="bigTitle">实时库存</el-col>
            <el-col :md="12" style="border-right: solid 1px #888888">
                <el-col :md="24" :xs="24":sm="24" class="title">库存状态</el-col>
                <el-col :md="12" :sm="24" :xs="24" style="flex-flow: 1">
                    <v-pone :public-data="publicOneData"></v-pone>
                </el-col>
                <el-col :md="12" :sm="24" :xs="24" style="flex-flow: 1">
                    <v-gauge></v-gauge>
                </el-col>
            </el-col>
            <el-col :md="12">
                <el-col :md="24" :xs="24" :sm="24" class="title">{{productTitle}}</el-col>
            </el-col>
        </div>
        <div  style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;">
            <el-col :md="24" :xs="24":sm="24" class="solidTitle">实时库存</el-col>
            <el-col :md="14" :xs="24" :sm="24">
                <v-line :child-msg="obj"></v-line>
            </el-col>
            <el-col :md="10" :sm="24" :xs="24">
                <v-accurate :curNum="0"></v-accurate>
            </el-col>
        </div>
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;">

            <el-col :md="24" :xs="24":sm="24"class="solidTitle">产品质检</el-col>
            <el-col :md="8":xs="24":sm="24">
                <v-percentage :per-data="perData" ></v-percentage>
            </el-col>
            <el-col :md="16":xs="24":sm="24">
                <v-materialTable></v-materialTable>
            </el-col>
        </div>
    </div>

</template>

<script>
    import vPone from './PublicOne.vue';
    import vGauge from './OldCharts.vue';
    import vLine from './classThree.vue';
    import vAccurate from './accurate.vue';
    import vPercentage from './percentage.vue';
    import vMaterialTable from './MaterialTable.vue';
    import {formatDate} from './../../../static/js/dateFormat.js'

    export default {
        components:{
            vPone,vGauge,vLine,vAccurate,vPercentage,vMaterialTable
        },

        data: function(){

            return {
                title:'库存状态',
                perData:{"value":85,"status":"success"},
                obj:{
                    "date":['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',],
                    "data1":[1, 8, 9,10, 14, 11,12, 1,"","","","","","","","","","","","","","","","",],
                    "data2":["","","","","","","","",1, 10, 11, 15, 8, 9, 1,"","","","","","","","",],
                    "data3":["","","","","","","","","","","","","","","","",1, 7, 8, 6, 9, 4, 1],
                    "class1":{"name":"早班产量","value":35},
                    "class2":{"name":"中班产量","value":25},
                    "class3":{"name":"晚班产量","value":15}
                },
                publicOneData:{"num":"", "remindtext":"当前库存值较低，未来7日预计 出货量2.300.00吨","bool":false},
                productTitle:"近7日预计销售出库",
                date:new Date(),
                nameData:[{"name":"磷钙"},{"name":"普钙"}],
                change:0,
                value11: new Date(),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();
            }
        },
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

        },
        cut:function(key){
            this.change = key;

        }
    }

    }
</script>

<style scoped>
    .bigTitle{font-size: 2.4rem;height: 3rem;border-bottom: solid 1px #5e7382}
    .title{font-size: 2rem;color: #000000;padding-left: 2rem}
    .solidTitle{font-size: 2.4rem;height: 3rem;}
    .select_time{margin-bottom: 3rem;height: 3rem}
    .right{float:right}
    .button_class{height: 3rem;background-color:#ffffff;border: 1px solid #888888;margin-right: 1rem;cursor: pointer}
    .blue{background-color: #1DB5EF;color: #ffffff;border: solid 0px #ffffff}
</style>
