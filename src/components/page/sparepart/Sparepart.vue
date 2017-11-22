<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 库存监管</el-breadcrumb-item>
                <el-breadcrumb-item>备品备件库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
     <el-row style="margin-bottom: 2rem;min-width: 1055px">
         <div class="right">
             <el-date-picker
                 @change="(value) => changeHandler(value)"
                 v-model="value"
                 type="date"
                 placeholder="选择日期"
                 format="yyyy-MM-dd "
                 value-format="yyyy-MM-dd"
                 :default-value="timeDefaultShow"
                 :picker-options="pickerOptions0"
                 >
             </el-date-picker>
         </div>
     </el-row>
     <el-row style="margin-bottom: 2rem;min-width: 1055px">
            <el-col :span="10">
                <el-col :span="24"style="font-size: 2.4rem;background: #ffffff;width: 90%;padding-left: 2rem">货值总览</el-col>

                <div style="width: 90%;height:33.1rem;background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;">
                    <v-gauge :unit="unit"></v-gauge>
                </div>
            </el-col>
            <el-col :span="14">
                <v-table :child-table="tableName1" ></v-table>
            </el-col>
     </el-row>
     <el-row style="background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;min-width: 1055px">
          <el-col :span="24" class="subordinateTitle">库存量监控</el-col>
      </el-row>
     <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                   <el-col :span="24" class="title"">低库存列表</el-col>
                   <el-col :span="24">
                       <v-table :child-table="tableName2"></v-table>
                   </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title">高库存列表</el-col>
                <el-col :span="24">
                    <v-table :child-table="tableName3"></v-table>
                </el-col>
            </el-col>

    </el-row>
     <el-row style="min-width: 1055px">
            <el-col :span="24" class="subordinateTitle">出入库总览</el-col>
        </el-row>
     <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                <el-col :span="24" class="title">本周各入库产品货值</el-col>
                <el-col :span="24">
                    <v-pie></v-pie>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title">本周各出库产品货值</el-col>
                <el-col :span="24">
                    <v-pie></v-pie>
                </el-col>
            </el-col>
        </el-row>
        <el-row style="min-width: 1055px">
            <el-col :span="24" class="subordinateTitle">月消耗总览</el-col>
        </el-row>
        <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                <el-col :span="24" class="title">消耗货值排行前十</el-col>
                <el-col :span="24">
                    <v-bar></v-bar>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title">消耗量排行前10</el-col>
                <el-col :span="24">
                    <v-str ref="chartstr"></v-str>
                </el-col>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import vGauge from '../OldCharts.vue';
    import vTable from './SprTable.vue';
    import vPie from './SprPie.vue';
    import vStr from './Sprstr.vue';
    import vBar from'./Sprbar.vue'
    export default {
        components:{
            vGauge,vTable,vPie,vStr,vBar
        },
        data: function(){
            return {
                value: new Date(),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();

            }
        },
        unit:{units:"万元",units2:"M",hig:33.1,radius:150,dist:-70},
        tableName1:[{name:"date",label:"货值排行"},
            {name:"date",label:"产品名称   "},
            {name:"date",label:"参考成本价"},
            {name:"date",label:"当前库存量"},
            {name:"date",label:"库存价值"}],
        tableName2:[{name:"date",label:"低库存量排行"},
            {name:"date",label:"产品名称   "},
            {name:"date",label:"参考成本价"},
            {name:"date",label:"当前库存量"},],
        tableName3:[{name:"date",label:"高库存量排行"},
            {name:"date",label:"产品名称   "},
            {name:"date",label:"参考成本价"},
            {name:"date",label:"当前库存量"},]
    }
    },
    //加载完dom执行的钩子函数
    created:function(){

    },
    filters:{
        formatDate(){
            let date = new Date();
            return date.format("YYYY-MM-dd");

        }
    },
    mounted () {
    /*  window.onresize = () => {
        }*/
    },
    methods: {
        //时间组件change事件
        changeHandler:function(value){
                console.log(value)
        },


    }

    }
</script>
<style scoped>
    .right{float: right;height: 3rem}
    .outCont{margin-bottom: 2rem;background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;min-width: 1055px}
    .title{font-size: 1.8rem;padding-left: 2rem;height: 3rem;line-height: 3rem}
    .subordinateTitle{font-size: 2.4rem;padding-left: 2rem;height: 5rem;line-height: 5rem}
</style>
