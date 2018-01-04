<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 库存监管</el-breadcrumb-item>
                <el-breadcrumb-item>原料库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="select_time" style="min-width: 1059px">
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
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;box-shadow: 5px 5px 3px #E5E5E5;;min-width: 1059px">
            <el-col :span="24" class="bigTitle">实时库存</el-col>
            <el-col :span="10" style="border-right: solid 1px #c7c7c7">
                <el-col :span="24" style="flex-flow: 1">
                    <v-pone :public-data="publicOneData"></v-pone>
                </el-col>

            </el-col>
            <el-col :span="14">
                <el-col :span="12"  >
                    <v-gauge  :unit="unit" ref="chartGauge"></v-gauge>
                </el-col>
                <el-col :span="11":offset="1">
                    <div style="padding-top: 5rem;padding-left: 4rem">
                        <div  class="outStyle">
                            <div class="inStyle">
                                <div class="circle" style="background-color: #3b5898"></div>
                            </div>
                            <div class="textStyle">较低</div>
                            <div class="textStyle">0-{{unit.floor}}</div>
                        </div>
                        <div  class="outStyle">
                            <div class="inStyle">
                                <div class="circle"style="background-color: #00a8ec"></div>
                            </div>
                            <div class="textStyle">正常</div>
                            <div class="textStyle">{{unit.floor}}-{{unit.limit}}</div>
                        </div>
                        <div class="outStyle">
                            <div class="inStyle">
                                <div class="circle"style="background-color: #bb4b39"></div>
                            </div>
                            <div class="textStyle">较高</div>
                            <div class="textStyle">{{unit.limit}}-20000</div>
                        </div>
                    </div>
                </el-col>
            </el-col>
        </div>
        <div  style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;;min-width: 1059px;height: 40rem">
            <el-col :span="24"  class="solidTitle">实时消耗</el-col>
               <el-col :span="14" >
                   <v-line :child-msg="obj" ref="chartLine"></v-line>
               </el-col>
               <el-col :span="8" :offset="2" >
                   <v-accurate :curNum="change" :curNumber="curNumber"></v-accurate>
               </el-col>
        </div>
<!--
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #E5E5E5;;min-width: 1059px">
            <el-col :span="24" class="solidTitle">原料质检</el-col>
            <el-col :span="8">
                <v-percentage :per-data="perData"></v-percentage>
            </el-col>
            <el-col :span="16">
                <v-materialTable></v-materialTable>
            </el-col>
        </div>
-->
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
                screenWidth: document.body.clientWidth,
                title:'库存状态',
                obj:{
                    "date":['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',],
                    "data1":[],
                    "data2":[],
                    "data3":[],
                    "class1":{"name":"晚班消耗量","value":""},
                    "class2":{"name":"早班消耗量","value":""},
                    "class3":{"name":"中班消耗量","value":""}
                },
                publicOneData:{ "num":"", "remindtext":"磷矿粉库存较低","bool":true},
                perData:{"value":0,"status":"success"},
                date:new Date(),
                unit:{"units":"吨","units2":"",wid:32,hig:21,radius:120,dist:-57,value:0,limit:0,floor:0,maxTool:20000},
                curNumber:{
                    "text1":"月累积消耗量",
                    "text2":"月累积出库量",
                    "text3":"月总计消耗量",
                    "text4":"月总计出库量",
                    "value1":"",
                    "value2":"",
                    "value3":"",
                    "value4":"",
                    deviation1:"0",
                    deviation2:"0",
                    date1:new Date().format("YYYY-MM"),
                    date2:new Date().format("YYYY-MM",1)
                },
                id:"HG01XY750000",
                nameTitle:"磷矿粉",
                nameData:[{"name":"磷矿粉"},{"name":"硫酸"}],
                change:0,
                value11: new Date().format("YYYY-MM-dd"),
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
        mounted () {
        /*物料上下限*/
            this.queryBound(this.change==0?"HG01XY750000":"HG01XY750100",this.value11);

            this.queryClass(this.change==0?"HG01XY750000":"HG01XY750100",this.value11);
            this.queryMonthConsume(this.change==0?"HG01XY750000":"",this.formatDateTime(this.value11));/*yue*/

        },
        filters:{
            /*时间过滤*/
            formatDate(){
            let date = new Date();
            return date.format("YYYY-MM-dd");

             }
    },
    methods: {
        /*时间选择*/
        changeHandler:function(value){
            this.curNumber.date1= this.formatDateTime(this.value11)
            this.curNumber.date2= this.formatDateTime(this.value11,1)
            this.queryClass(this.change==0?"HG01XY750000":"HG01XY750100",value);
            this.queryGround(this.change==0?"HG01XY750000":"HG01XY750100",value);
            this.queryMonthConsume(this.change==0?"HG01XY750000":"HG01XY750100",this.formatDateTime(value));/*yue*/
        },
        /*原料切换*/
        cut:function(key,name){
           this.nameTitle = name;
            this.change = key;
            this.queryClass(this.change==0?"HG01XY750000":"HG01XY750100",this.value11);
            this.queryGround(this.change==0?"HG01XY750000":"HG01XY750100",this.value11);
            this.queryMonthConsume(this.change==0?"HG01XY750000":"HG01XY750100",this.formatDateTime(this.value11));

        },
        dys:function(){
        },
        /*实时消耗*/
        queryClass(id,date){
            let self = this;
                var _url=self.$url+'/real/time/consumption/gather/'+date+'/'+id;
                self.$axios.get(
                        _url
                ).then((res) => {
                    let data=res.data.retval;
                if(data==null||data==undefined) return;
                    if(data.length==0||data==null) return false;
                    let value=[];
                    let value1=[];
                    let value2=[];
                    let value3=[];
                    let date=[];
                    let sum1=0;
                    let sum2=0;
                    let sum3=0;
                    for(let i of data){
                        value.push(i.value);
                        date.push(i.gatherTime.split(" ")[1]);
                    }
                    if(data.length<8){
                        for(let j of data){
                            sum1+=j.value;
                            value1.push(j.value)
                        }
                        this.obj.date=date;
                        this.obj.value1=value1;
                    }else if(data.length>=8&&data.length<16){
                        value.find(function(v,index){
                            if(index<8){
                                sum1+=v;
                                value1.push(v);
                            }else{
                                sum2+=v;
                                value2.push(v);
                            }
                        });
                        let arr=["","","","","","","",0];
                        value2.unshift.apply(value2,arr);
                    }else if(data.length>=16){
                        value.find(function( v,index){
                            if(index<8){
                                sum1+=v;
                                value1.push(v);
                            }else if(index>=8&&index<16){
                                sum2+=v;
                                value2.push(v);

                            }else if(index>=16){
                                sum3+=v;
                                value3.push(v);
                            }
                        });
                        let arr=["","","","","","","",0];
                        value2.unshift.apply(value2,arr);
                        let arr2=["","","","","","","","","","","","","","","",0];
                        value3.unshift.apply(value3,arr2);
                    }
                    this.obj.date=date;
                    this.obj.data1=value1;
                    this.obj.data2=value2;
                    this.obj.data3=value3;
                    this.obj.class1.value=sum1;
                    this.obj.class2.value=sum2;
                    this.obj.class3.value=sum3;
                    this.$refs.chartLine.createChartOne(this.obj);

                });

        },
        /*月累计量*/
        queryMonthConsume(id,date){
            if(id=="")return false;
            let self = this;
            let _url = self.$url+"/data/verification/thismonthbios/"+id+"/"+date.formatDate();
            let _url_1 = self.$url+"/data/verification/thismonthbios/"+id+"/"+date.formatDate(1);
             self.$axios.get(_url).then((res)=>{

                    if (res.data.retval!=null) {
                        this.curNumber.deviation1=res.data.retval.bias;
                        this.curNumber.value1=res.data.retval.valueAuto;
                        this.curNumber.value2=res.data.retval.valueManual;
                    } else {
                        return 0;
                    }


             });
             self.$axios.get(_url_1).then((res)=>{
                    if (res.data.retval!=null) {
                        this.curNumber.deviation2=res.data.retval.bias;
                        this.curNumber.value3=res.data.retval.valueAuto;
                        this.curNumber.value4=res.data.retval.valueManual;
                    } else {
                        return 0
                    }


             });
        },
        /*实时库存*/
        queryGround(id,date){
            let self = this;
            let _url = self.$url+"/daily/inventory/summary/"+date+"/"+id;
            console.log(_url);
            let _url_1  = self.$url+"/raw/materials/"+id+"/"+date;
            self.$axios.get(_url).then((res)=>{
                this.unit.value=(function() {
                    if (res.data.retval!=null) {
                        console.log(res.data.retval);
                        if(res.data.retval.value<self.unit.floor){
                            self.publicOneData.remindtext=  self.nameTitle+"库存较低"
                        }
                        if(res.data.retval.value>=self.unit.floor&&res.data.retval.value<=self.unit.limit){
                            self.publicOneData.remindtext=  self.nameTitle+"库存正常"
                        }
                        if(res.data.retval.value>self.unit.limit){
                            self.publicOneData.remindtext=  self.nameTitle+"库存较高"
                        }
                        return res.data.retval.value
                    } else {
                        self.publicOneData.remindtext=  self.nameTitle+"库存较低"
                        return 0
                    }
                })();
                this.$refs.chartGauge.createChartOne(this.unit);

        });
            /*库存待使用天数*/
            self.$axios.get(_url_1).then((res)=>{
                if(res.data.retval==null){}else{
                   this.publicOneData.num=res.data.retval;
                }

            })
        },
        /*物料上下限*/
        queryBound(id){
            let self = this;
            let _url= self.$url+"/material/threshold/configuration/stock/"+id;
            self.$axios.get(_url).then((res)=>{
                this.unit.limit=res.data.retval.upperLimit;
                this.unit.floor=res.data.retval.lowerLimit;
                self.$refs.chartGauge.createChartOne(this.unit);
                this.queryGround(this.change==0?"HG01XY750000":"HG01XY750100",this.value11);
               /*没做异常处理，除非挂服务*/

            })
        },
        formatDateTime(date,n){
            let count=n|0;
            let time = Date.parse(date);
            let dates = new Date(Date.parse(date.replace(/-/g, "/"))).format("YYYY-MM",count);
            let arr=[];
            arr=dates.split("-");
            return arr[0]+"-"+arr[1]
        }
        },




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
    .circle{height: 100%;box-sizing: border-box;border-radius: 50%;-webkit-border-radius:50%}
</style>
