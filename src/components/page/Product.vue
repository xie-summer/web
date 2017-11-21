<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 库存监管</el-breadcrumb-item>
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
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;box-shadow: 5px 5px 3px #E5E5E5;min-width: 1055px">
            <el-col :span="24"  class="bigTitle">实时库存</el-col>
            <el-col :span="10" style="border-right: solid 1px #c7c7c7">

                <el-col :span="24"  style="flex-flow: 1">
                    <v-pone :public-data="publicOneData"></v-pone>
                </el-col>

            </el-col>
            <el-col :span="14">
                <el-col :span="1" style="height: 1px"></el-col>
                <el-col :span="12">
                    <v-gauge :unit="unit"></v-gauge>
                </el-col>
                <el-col :span="11">
                    <div style="padding-top:5rem">
                        <div  class="outStyle">
                            <div class="inStyle">
                                <div class="circle" style="border: 2px solid #3b5898;"></div>
                            </div>
                            <div class="textStyle">较低</div>
                            <div class="textStyle">1000-2000</div>
                        </div>
                        <div  class="outStyle">
                            <div class="inStyle">
                                <div class="circle"style="border: 2px solid #00a8ec;"></div>
                            </div>
                            <div class="textStyle">正常</div>
                            <div class="textStyle">1000-2000</div>
                        </div>
                        <div class="outStyle">
                            <div class="inStyle">
                                <div class="circle"style="border: 2px solid #bb4b39;"></div>
                            </div>
                            <div class="textStyle">较高</div>
                            <div class="textStyle">2000-3000</div>
                        </div>
                    </div>
                </el-col>
            </el-col>
        </div>
        <div  style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;;min-width: 1055px">
            <el-col :span="24"  class="solidTitle">实时下线</el-col>
            <el-col :span="14" >
                <v-line :child-msg="obj"></v-line>
            </el-col>
            <el-col :span="10" >
                <v-accurate :curNum="0" :curNumber="curNumber"></v-accurate>
            </el-col>
        </div>
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;;min-width: 1055px">

            <el-col :span="24" class="solidTitle">产品质检</el-col>
            <el-col :span="8">
                <v-percentage :per-data="perData" ></v-percentage>
            </el-col>
            <el-col :span="16">
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
                    "data1":[1, 8, 9,10, 14, 11,12, 2,1,"","","","","","","","","","","","","","","",],
                    "data2":["","","","","","","","",1, 10, 11, 15, 8, 9,3,2,1,"","","","","","",],
                    "data3":["","","","","","","","","","","","","","","","",1, 7, 8, 6, 9, 4, 1],
                    "class1":{"name":"晚班产量","value":35},
                    "class2":{"name":"早班产量","value":25},
                    "class3":{"name":"中班产量","value":15}
                },
                curNumber:{
                    "text1":"月累积产量",
                    "text2":"月累积入库量",
                    "text3":"月总计产量",
                    "text4":"月总计入库量",
                },
                unit:{"units":"吨","units2":"",wid:32,hig:21,radius:120,dist:-57},
                publicOneData:{"num":"", "remindtext":"当前库存值较低，未来7日预计 出货量2.300.00吨","bool":false},

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
            return date.format("YYYY-MM-dd");
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
    .bigTitle{font-size: 2.4rem;height: 3rem;}
    .title{font-size: 2rem;color: #000000;padding-left: 2rem}
    .solidTitle{font-size: 2.4rem;height: 3rem;}
    .select_time{margin-bottom: 3rem;height: 3rem}
    .right{float:right}
    .button_class{height: 3rem;background-color:#ffffff;border: 1px solid #888888;margin-right: 1rem;cursor: pointer}
    .blue{background-color: #1DB5EF;color: #ffffff;border: solid 0px #ffffff}
    .textStyle{display: inline-block;height: 2rem;line-height: 2rem;padding-left: 2rem;font-size: 1.6rem}
    .outStyle{width: 100%;height: 2rem;display: inline-block;margin-bottom: 1rem}
    .inStyle{width: 1.2rem;height: 1.2rem;display: inline-block}
    .circle{height: 100%;box-sizing: border-box;border-radius: 50%;}
</style>
