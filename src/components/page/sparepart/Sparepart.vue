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
     <el-row style="margin-bottom: 2rem;min-width: 1055px;background: #ffffff;box-shadow: 0px 3px 0px #E5E5E5;"type="flex"justify="space-around" >
            <el-col :span="11">
                <el-col :span="24"style="font-size: 2rem;" class="stairFontColor"> 货值总览</el-col>
                <div style="width: 100%;height:33.1rem;">
                    <v-gauge :unit="unit" ref="chartGauge"></v-gauge>
                </div>
            </el-col>
            <el-col :span="11">
                <v-table :child-table="tableName1" :table-data="tableData1":num-name="name1"ref="multipleTable" ></v-table>
            </el-col>
     </el-row>
        <el-row class="subordinateTitle stairFontColor">当日入出库量</el-row>
        <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">入库列表</el-col>
                <el-col :span="24">
                    <v-paging :paging-data="putTableData" :name-data="putTableName"ref="putTable" @handleCurrentChange="setData":type="putType"></v-paging>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">出库列表</el-col>
                <el-col :span="24">
                    <v-paging :paging-data="outTableData" :name-data="outTableName"ref="outTable"@handleCurrentChange="setData":type="outType"></v-paging>
                </el-col>
            </el-col>

        </el-row>
      <el-row class="subordinateTitle stairFontColor">库存量监控</el-row>
        <el-row class="outCont"type="flex"justify="space-around">
            <el-col :span="11">
                   <el-col :span="24" class="title secondFontColor">低库存列表</el-col>
                   <el-col :span="24">
                       <v-table :child-table="tableName2" :table-data="tableData2":num-name="name2"ref="multipleTableLow"></v-table>
                   </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">高库存列表</el-col>
                <el-col :span="24">
                    <v-table :child-table="tableName3" :table-data="tableData3":num-name="name3"ref="multipleTableHeight"></v-table>
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
                    <v-pie ref="chartPs" :putData="putData" :isPut="put"></v-pie>
                </el-col>
            </el-col>
            <el-col :span="11">
                <el-col :span="24" class="title secondFontColor">本周各出库产品货值</el-col>
                <el-col :span="24">
                    <v-pies ref="chartPs2" :putData="outData" :isOut="out"></v-pies>
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
    import vBar from'./Sprbar.vue';
    import vPaging from'./SprPagingTable.vue'
    export default {
        components:{
            vGauge,vTable,vPie,vBar,vStr,vPies,vPaging
        },
        data: function(){
            return {
                valueDate: new Date().format("YYYY-MM-dd"),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();

            }
        },
        unit:{units:"万元",units2:"M",hig:33.1,radius:150,dist:-63,value:0,limit:1000,floor:500,maxTool:2000,title:"备品备件总货值"},
        tableName1:[{name:"name",label:"产品名称"},
            {name:"referencePrice",label:"参考成本价"},
            {name:"inventory",label:"当前库存量"},
            {name:"inventoryValue",label:"库存价值"}],
        tableName2:[
            {name:"name",label:"产品名称   "},
            {name:"referencePrice",label:"参考成本价"},
            {name:"inventory",label:"当前库存量"},],
        tableName3:[
            {name:"name",label:"产品名称   "},
            {name:"referencePrice",label:"参考成本价"},
            {name:"inventory",label:"当前库存量"},],
        putData:{value:
                    [{value:0, name:''},
                    {value:0, name:''},
                    {value:0, name:''}
                    ],
                title:"本周入库总货值",
                total:0
            },
        outData:{value:
            [{value:0, name:''},
                {value:0, name:''},
                {value:0, name:''}
            ],
            title:"本周出库总货值",
            total:0,
        },
        out:true,
        put:true,
        tableData1:[],
        tableData2:[],
        tableData3:[],
        name1:"货值排行",
        name2:"低库存量排行",
        name3:"高库存量排行",
        putTableName:[{name:"inOutTime",label:"入库时间"},{name:"name",label:"产品名称"},{name:"value",label:"入库量"},{name:"amountPrice",label:"入库货值(元)"}],
        outTableName:[{name:"inOutTime",label:"出库时间"},{name:"name",label:"产品名称"},{name:"value",label:"出库量"},{name:"amountPrice",label:"出库货值(元)"}],
        putTableData:[],
        outTableData:[],
        putType:1,
        outType:0
    }
    },
    //加载完dom执行的钩子函数
    created:function(){
        this.querySum(this.valueDate);
        this.queryValueAmount(this.valueDate);
        this.queryValueHeight(this.valueDate);
        this.queryValueLow(this.valueDate);
        this.queryValue(this.valueDate,1,1,5);
        this.queryValue(this.valueDate,0,1,5);
        this.queryConsumeValue(this.valueDate);
        this.queryConsumeAmong(this.valueDate);
        this.queryPut(this.valueDate);
        this.queryOut(this.valueDate);

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
            this.querySum(value);
            this.queryValueAmount(value);
            this.queryValueHeight(value);
            this.queryValueLow(value);
            this.queryValue(value,1,1,5);
            this.queryValue(value,0,1,5);
            this.queryConsumeValue(value);
            this.queryConsumeAmong(value);
            this.queryPut(value);
            this.queryOut(value);

        },
        /*库存总量*/
        querySum(date){
            let self = this;
            let url = this.$url+"/spare/parts/materials/summary/"+date;
            self.$axios.get(url).then((res)=>{
                let data = res.data.retval;
                if(data==null||data==undefined){
                    this.unit.value=0;
                    self.$refs.chartGauge.createChartOne(this.unit);
                }else{
                    this.unit.value = (data.inventoryValue/10000).toFixed(2);
                    self.$refs.chartGauge.createChartOne(this.unit);
                }
            });
        },
        /*货值总量排行10个*/
        queryValueAmount(date){
            let self = this;
            let url = this.$url+"/spare/parts/materials/summary/detail/"+date;
            self.$axios.get(url).then((res)=>{
                let data = res.data.retval;
                self.$refs.multipleTable.getData(data,self.tableName1,self.name1);

            });
        },
        /*库存高*/
        queryValueHeight(date){
            let self = this;
            let url=this.$url+"/spare/parts/materials/summary/high/detail/"+date;
            self.$axios.get(url).then((res)=>{
                let data = res.data.retval;
                if(data==null||data==undefined){

                }else{
                    self.$refs.multipleTableHeight.getData(data,self.tableName3,self.name3);
                }
            })
        },
        /*库存低*/
        queryValueLow(date){
            let self = this;
            let url=this.$url+"/spare/parts/materials/summary/low/detail/"+date;
            self.$axios.get(url).then((res)=>{
                let data = res.data.retval;
               if(data==null||data==undefined){

               }else{
                   self.$refs.multipleTableLow.getData(data,self.tableName2,self.name2);
               }
            })
        },
        /*货值出入库*/
        queryValue(date,type,page,size){
            let self = this;
            let url=self.$url+"/panoramic/spare/parts/into/inventory/"+date+"/"+type+"/"+page+"/"+size;
                self.$axios.get(url).then((res)=>{
                        let data=res.data.retval;
                       if(data==null){}else{
                           for( let obj of data.list){
                               obj.inOutTime = new Date(obj.inOutTime).format("hh:mm:ss")
                           }
                           if(type==1){
                               self.$refs.putTable.setData(data.list,data.total,self.putTableName,type)
                           }
                           if(type==0){
                               self.$refs.outTable.setData(data.list,data.total,self.outTableName,type)
                           }
                       }
                });
        },
        /*消耗量*/
        queryConsumeValue(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/monthlyconsume/price/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){
                    self.$refs.chartBar.initPie([],[],0)
                }else{
                    let nameData=[];
                    let valueData=[];
                    for( let obj of res.data.retval){
                        nameData.push(obj.name);
                        valueData.push(obj.summary);
                    }
                    self.$refs.chartBar.initPie(nameData,valueData,1)
                }
            });
        },
        /*消耗货值*/
        queryConsumeAmong(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/monthlyconsume/value/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){
                    self.$refs.chartstr.initPie([],[],[],0)
                }else{
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
        /*入库*/
        queryPut(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/weeklysummary/in/"+date;
            self.$axios.get( _url).then((res)=>{

                if(res.data.retval==null){
                    this.put = false;
                    self.$refs.chartPs.initPie(this.putData,this.put)
                }else{
                    if(res.data.retval.length==1){  this.put = false;}else{ this.put = true;}
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
                    self.$refs.chartPs.initPie(this.putData,this.put)
                }

            });
        },
        /*出库*/
        queryOut(date){
            let self = this;
            let _url = this.$url+"/panoramic/spare/parts/into/inventory/weeklysummary/out/"+date;
            self.$axios.get( _url).then((res)=>{
                if(res.data.retval==null){
                    this.out=false;
                    self.$refs.chartPs2.initPie(this.outData,this.out)
                }else{
                    if(res.data.retval.length==1){  this.out = false;}else{ this.out = true;}
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
                    self.$refs.chartPs2.initPie(this.outData,this.out)
                }

            });
        },
        setData(msg){
            let type = msg.type;
            let page = msg.page;
            let size = msg.pageSize;
            this.queryValue(this.valueDate,type,page,size);
        }


    }

    }
</script>
<style scoped>
    .right{float: right;height: 3rem}
    .outCont{margin-bottom: 2rem;background: #ffffff;box-shadow: 0px 3px 0px #E5E5E5;min-width: 1055px}
    .title{font-size: 1.8rem;padding-left: 2rem;height: 3rem;line-height: 3rem}
    .subordinateTitle{font-size: 2rem;height: 5rem;line-height: 5rem}
</style>
