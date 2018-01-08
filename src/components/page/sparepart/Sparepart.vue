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
                 v-model="valueDate"
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
     <el-row style="margin-bottom: 2rem;min-width: 1055px;background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;"type="flex"justify="space-around" >
            <el-col :span="11">
                <el-col :span="24"style="font-size: 2rem;" class="stairFontColor"> 货值总览</el-col>
                <div style="width: 100%;height:33.1rem;">
                    <v-gauge :unit="unit"></v-gauge>
                </div>
            </el-col>
            <el-col :span="11">
                <v-table :child-table="tableName1" ></v-table>
            </el-col>
     </el-row>
      <el-row class="subordinateTitle stairFontColor">库存量监控</el-row>
     <el-row style="background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;min-width: 1055px">
      </el-row>
        <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                   <el-col :span="24" class="title secondFontColor">低库存列表</el-col>
                   <el-col :span="24">
                       <v-table :child-table="tableName2"></v-table>
                   </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">高库存列表</el-col>
                <el-col :span="24">
                    <v-table :child-table="tableName3"></v-table>
                </el-col>
            </el-col>

    </el-row>
     <el-row style="min-width: 1055px">
            <el-col :span="24" class="subordinateTitle stairFontColor">出入库总览</el-col>
        </el-row>
     <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">本周各入库产品货值</el-col>
                <el-col :span="24">
                    <v-pie ref="chartPs" :putData="putData"></v-pie>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">本周各出库产品货值</el-col>
                <el-col :span="24">
                    <v-pies ref="chartPs2" :putData="outData"></v-pies>
                </el-col>
            </el-col>
        </el-row>
        <el-row style="min-width: 1055px">
            <el-col :span="24" class="subordinateTitle stairFontColor">月消耗总览</el-col>
        </el-row>
        <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                <el-col :span="24" class="title  secondFontColor">消耗货值排行前十</el-col>
                <el-col :span="24">
                    <v-bar ref="chartBar"></v-bar>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">消耗量排行前5</el-col>
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
    import vPies from './SprPie2.vue';
   import vStr from './Sprstr.vue';
    import vBar from'./Sprbar.vue'
    export default {
        components:{
            vGauge,vTable,vPie,vBar,vStr,vPies
        },
        data: function(){
            return {
                valueDate: new Date(),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();

            }
        },
        unit:{units:"万元",units2:"M",hig:33.1,radius:150,dist:-70,value:0,limit:1000,floor:500,maxTool:2000},
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
            {name:"date",label:"当前库存量"},],
        putData:{value:
                    [{value:435, name:'柴油'},
                    {value:679, name:'高压清洗机管'},
                    {value:848, name:'高压气管'}
                    ],
                title:"本周入库总货值",
                total:0
            },
        outData:{value:
            [{value:435, name:'柴油'},
                {value:679, name:'高压清洗机管'},
                {value:848, name:'高压气管'}
            ],
            title:"本周入库总货值",
            total:0
        },
    }
    },
    //加载完dom执行的钩子函数
    created:function(){
        this.queryConsumeValue(this.valueDate.format("YYYY-MM-dd"));
        this.queryConsumeAmong(this.valueDate.format("YYYY-MM-dd"));
        this.queryPut(this.valueDate.format("YYYY-MM-dd"));
        this.queryOut(this.valueDate.format("YYYY-MM-dd"));
    },
    filters:{
        formatDate(){
            let date = new Date();
            return date.format("YYYY-MM-dd");

        }
    },
    mounted () {

    },
    methods: {
        //时间组件change事件
        changeHandler:function(value){
            this.queryConsumeValue(value);
            this.queryConsumeAmong(value);
            this.queryOut(value);
            this.queryPut(value);
        },
        queryConsumeValue(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/monthlyconsume/price/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){}else{
                    let nameData=[];
                    let valueData=[];
                    for( let obj of res.data.retval){
                        nameData.push(obj.name);
                        valueData.push(obj.summary);
                    }
                    self.$refs.chartBar.initPie(nameData,valueData)
                }
            });
        },
        queryConsumeAmong(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/monthlyconsume/value/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){}else{
                    let nameData=[];
                    let valueData=[];
                    let percentageData=[];
                    let tool=0;
                    for( let obj of res.data.retval){
                        nameData.push(obj.name);
                        valueData.push(obj.summary);
                        tool+=obj.summary;
                    }
                    for(let i=0;i<valueData.length;i++){
                        percentageData.push(Number(valueData[i]/tool))
                    }
                    self.$refs.chartstr.initPie(percentageData,valueData,nameData,tool)
                }
            });
        },
        queryPut(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/weeklysummary/in/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){

                }else{
                    let objList=[];
                    for(let i =0;i< res.data.retval.length;i++){
                        if(i==res.data.retval.length-1){
                            this.putData.total = (res.data.retval[i].summary)
                        }else{
                            let obj={name:"",value:0};
                            obj.name = res.data.retval[i].name;
                            obj.value = res.data.retval[i].summary;
                            objList.push(obj);
                        }
                    }

                    this.putData.value=objList;
                    self.$refs.chartPs.initPie(this.putData)
                }

            });
        },
        queryOut(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/weeklysummary/out/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){}else{
                    let objList=[];
                    for(let i =0;i< res.data.retval.length;i++){
                        if(i==res.data.retval.length-1){
                            this.outData.total = (res.data.retval[i].summary)
                        }else{
                            let obj={name:"",value:0};
                            obj.name = res.data.retval[i].name;
                            obj.value = res.data.retval[i].summary;
                            objList.push(obj);
                        }
                    }

                    this.outData.value=objList;
                    self.$refs.chartPs2.initPie(this.outData)
                }

            });
        }


    }

    }
</script>
<style scoped>
    .right{float: right;height: 3rem}
    .outCont{margin-bottom: 2rem;background: #ffffff;box-shadow: 2px 5px 2px #E5E5E5;min-width: 1055px}
    .title{font-size: 1.8rem;padding-left: 2rem;height: 3rem;line-height: 3rem}
    .subordinateTitle{font-size: 2rem;height: 5rem;line-height: 5rem}
</style>
