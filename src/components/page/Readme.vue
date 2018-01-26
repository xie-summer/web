<template>
    <div class="back">
        <div class="crumbs"style="margin-bottom:1rem ">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 全景监控</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right" style="height: 5rem;line-height: 5rem">
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
        <div class=" stairFontColor newTitle">
            物资监管
        </div>
        <el-row :span="24" class="goodsTitle secondFontColor" style="min-width: 1019px;box-shadow: 0px 3px 0px #E5E5E5;background-color: #ffffff;height: 4rem">库存量监控</el-row>
        <el-row type="flex" justify="space-between" style="min-width: 1019px;min-height: 10.5rem;margin-bottom: 3rem;box-shadow: 0px 3px 0px #E5E5E5;background-color: #ffffff"v-if="isGoods">
            <el-col :span="4"   v-for=" (i,value) in item" :key="value"  >
                <el-col :span="24"  class="count">
                    <el-col :span="24" class="fontCenter font1">{{i.name}}</el-col>
                    <el-col :span="24"  class="fontCenter" style="padding-left: 1rem">
                        <svg class="icon" aria-hidden="true" v-if="i.text=='高'|i.text=='低'">
                            <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" v-if="i.text=='正常'">
                            <use xlink:href="#el-icon-erp-zhengchang"></use>
                        </svg>
                        <span style="font-size: 1.5rem" :class="i.text=='高'||i.text=='低' ? 'colorRed':'colorBlue'">{{i.text}}</span>
                    </el-col>
                    <el-col :span="24" class="fontCenter font2">{{i.number}}</el-col>
                </el-col>
            </el-col>
        </el-row>
        <el-row  class="titleCount" style="min-width: 1019px;min-height: 8rem;background-color: #ffffff;" v-else>
            <img src="../../../static/img/wushuju.png" class="imgCenter"/>
        </el-row>
        <div class="goods" style="min-width: 1019px">
            <el-col :span="24" class="goodsTitle secondFontColor">出厂监控</el-col>
            <div  style="display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%">
                <el-col :span="10" class="goodsHeight" style="flex-grow:1">
                    <el-col :span="12">
                        <div class="numberHint">{{numberSize}}</div>
                        <div class="titleHint">今日异常出库次数</div>
                    </el-col>
                    <el-col :span="12"v-if="isAbnormal">
                        <div class="timeTitle">最近一次异常出库</div>
                        <ul class="li" >
                            <li>
                                <span>抓拍时间：</span><span>{{uTime}}</span>
                            </li>
                            <li>
                                <span>车牌：</span><span>{{numberPlate}}</span>
                            </li>
                            <li>
                                <span>出库状态：</span><span>{{errMsg}}</span>
                            </li>
                        </ul>

                    </el-col>
                    <el-col :span="12"v-else class="imgCenter_home">
                        <el-col :span="24" style="height: 8rem"></el-col>
                        <img src="../../../static/img/yichang.png" />
                        <el-col :span="24":offset="0" style="height: 4rem;line-height: 4rem;font-size: 2rem">无异常</el-col>
                    </el-col>
                </el-col>
                <el-col :span="14" class="goodsHeight" style="flex-grow:1">
                    <v-table :table-con="tableData_1" :table-total="totalCount1" ref="son" @handleCurrentChange="toShow"></v-table>
                </el-col>
            </div>
        </div>
        <el-row :span="24"style="height:5rem;min-width: 1019px;line-height: 5rem">
            <div style="float: left;" class="title stairFontColor newTitle"> 单耗、能耗</div>
            <div  style="float: right;font-size: 1.8rem;color:#a29999" >8:00-8:00</div>
            <div style="float: right;margin-right: 1rem;font-size: 1.8rem;color:#a29999">{{dateTitles}}</div>
        </el-row>
        <el-row type="flex"  justify="space-between" style="min-width: 1019px;box-shadow: 0px 3px 0px #E5E5E5;margin-bottom: 3rem;background-color: #ffffff">
                <div style="width: 20rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙矿耗(吨/吨)</el-col>
                    <div class="gu_1" id="gu_1" ref="gu_1" style="height: 14rem"></div>
                </div>
                <div style="width: 20rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙酸耗(吨/吨)</el-col>
                    <div class="gu_2" id="gu_2" ref="gu_2" style="height: 14rem"></div>
                </div>
                <div style="width: 20rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙煤耗(吨/吨)</el-col>
                    <div class="gu_3" id="gu_3" ref="gu_3" style="height: 14rem"></div>
                </div>
                <div style="width: 20rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙电耗(度/吨)</el-col>
                    <div class="gu_5" id="gu_5" ref="gu_5" style="height: 14rem"></div>
                </div>
                <div style="width: 20rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">普钙电耗(度/吨)</el-col>
                    <div class="gu_4" id="gu_4" ref="gu_4" style="height: 14rem"></div>
                </div>
            </el-row>
        <div class="numberVerify" style="min-width: 1019px">
            <el-col :span="24">
                <div style="float: left;" class="stairFontColor newTitle">数据校验</div>
                <div class="time" >8:00-8:00</div>
                <div class="time timeRight">{{dateTitles}}</div>
            </el-col>

                <div class="row-bg yyyyy">
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12"  >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">矿粉-磷钙消耗量</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valueLKF}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center"class="secondFontColor">IOT计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-if="dat.dataIoLKF*100>=150||dat.dataIoLKF*100<=-150">
                                <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-else-if="dat.dataIoLKF*100>-150||dat.dataIoLKF*100<150">
                                    <use xlink:href="#el-icon-erp-shebeibaojing1"></use>
                                </svg>
                                <div  style="display: inline-block">
                                    <p style="color:#BB4B39"v-if="dat.dataIoLKF*100>=150||dat.dataIoLKF*100<=-150">{{dat.dataIoLKF}}%</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoLKF*100>-150||dat.dataIoLKF*100<150">{{dat.dataIoLKF}}%</p>
                                    <p style="color:#BB4B39"v-if="dat.dataIoLKF*100>=150||dat.dataIoLKF*100<=-150">偏差</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoLKF*100>-150||dat.dataIoLKF*100<150">偏差</p>
                                </div>


                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValueLKF}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center" class="secondFontColor">ERP记录</el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12" >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">磷钙产量</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valueLG}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center"class="secondFontColor">IOT计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-if="dat.dataIoLG*100>=150||dat.dataIoLG*100<=-150">
                                    <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-else-if="dat.dataIoLG*100>-150||dat.dataIoLG*100<150">
                                    <use xlink:href="#el-icon-erp-shebeibaojing1"></use>
                                </svg>
                                <div style="display: inline-block">
                                    <p style="color:#BB4B39"v-if="dat.dataIoLG*100>=150||dat.dataIoLG*100<=-150">{{dat.dataIoLG}}%</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoLG*100>-150||dat.dataIoLG*100<150">{{dat.dataIoLG}}%</p>
                                    <p style="color:#BB4B39"v-if="dat.dataIoLG*100>=150||dat.dataIoLG*100<=-150">偏差</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoLG*100>-150||dat.dataIoLG*100<150">偏差</p>
                                </div>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValueLG}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center"class="secondFontColor">ERP记录</el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12" >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">普钙产量</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valuePG}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center"class="secondFontColor">IOT计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-if="dat.dataIoPG*100>=150||dat.dataIoPG*100<=-150">
                                    <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;"v-else-if="dat.dataIoPG*100>-150||dat.dataIoPG*100<150">
                                    <use xlink:href="#el-icon-erp-shebeibaojing1"></use>
                                </svg>
                                <div style="display: inline-block">
                                    <p style="color:#BB4B39"v-if="dat.dataIoPG*100>=150||dat.dataIoPG*100<=-150">{{dat.dataIoPG}}%</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoPG*100>-150||dat.dataIoPG*100<150">{{dat.dataIoPG}}%</p>
                                    <p style="color:#BB4B39"v-if="dat.dataIoPG*100>=150||dat.dataIoPG*100<=-150">偏差</p>
                                    <p style="color:#00a8ec"v-else-if="dat.dataIoPG*100>-150||dat.dataIoPG*100<150">偏差</p>
                                </div>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValuePG}}<small style="font-size: 10px;color:#606266">吨</small></el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center"class="secondFontColor">ERP记录</el-col>
                        </el-col>
                    </el-col>

                </div>

            </div>
        </div>

</template>

<script>
    import vTable from './BaseTable.vue';
    let echarts=require('echarts/lib/echarts');
    //引入仪表盘图
    require('echarts/lib/chart/gauge');

    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');

    export default {
        components:{
            vTable
        },
        data: function(){

            return {
                dat:{
                    valueLKF:"",
                    dataIoLKF:"",
                    dataIoValueLKF:"",
                    valueLG:"",
                    dataIoLG:"",
                    dataIoValueLG:"",
                    valuePG:"",
                    dataIoPG:"",
                    dataIoValuePG:"",
                },
                cur_page: 1,
                currentPage1: 1,
                totalCount1: 0,
                pageSize:5,
                value11: new Date(),
                timeDefaultShow:new Date(),
                pickerOptions0: {
                    disabledDate(time) {
                return time.getTime() > Date.now();
            }
        },
        numberPlate:"",
        uTime:"",
        numberSize:"",
        errMsg:"",
        production:{"ccp":0,"cpac":0,"cpc":0,"cpoc":0,"pcc":0},
        tableData_1:[1,2],
        benchmark:[0,0,0,0,0],
        item:[{"name":"磷矿粉(吨)","number":85,"text":"高"},
            {"name":"硫酸(立方米)","number":85,"text":"高"},
            {"name":"石灰(吨)","number":85,"text":"低"},
            {"name":"煤(吨)","number":85,"text":"高"},
            {"name":"磷钙(吨)","number":85,"text":"低"},
            {"name":"普钙(吨)","number":85,"text":"高"}],
        redOrblue:"colorRed",
        items:[
            {'number':'0','text':'巡检作业项完成率','color':'red',"symbol":"%"},
            {'number':'0','text':'作业项异常次数','color':'blue',"symbol":"次"},
            {'number':'0','text':'巡检作业项数','color':'green',"symbol":"次"},
            {'number':'0','text':'检修次数','color':'green',"symbol":"次"}
        ],
        isGoods:true,
        isAbnormal:true,
        tableData:[],
        dateTitles:new Date().dDate(-1)
            }
        },
    created:function(){
        this.queryOneCall(this.value11.format("YYYY-MM-dd"));
        this.querynventoryDay(this.value11.format("YYYY-MM-dd"));
        this.queryDatIoValue(this.value11.format("YYYY-MM-dd"));
        this.queryProduction(this.value11.format("YYYY-MM-dd"));


    },
    mounted(){
        this.queryTable(this.value11.format("YYYY-MM-dd"),this.cur_page,this.pageSize);
        this.queryProduction_1(this.production.ccp);
        this.queryProduction_2(this.production.cpac);
        this.queryProduction_3(this.production.cpc);
        this.queryProduction_4(this.production.cpoc);
        this.queryProduction_5(this.production.pcc);
    },
   filters:{

    },
    methods: {
        changeHandler:function(value){
            this.dateTitles=new Date(Date.parse(value)-1000*60*60*24).format("YYYY-MM-dd");
            this.date=value;
            this.queryTable(value,this.cur_page,this.pageSize);
            this.querynventoryDay(value);
            this.queryDatIoValue(value);
            this.queryOneCall(value);
            this.queryProduction(value)
        },
        handleCurrentChange1(val){
            this.$message.success(val)
            //页码
            this.cur_page = val;

        },
        queryTable(date,page,size){
            let self = this;
            let _url=self.$url+"/into/the/factory/records/"+date+"/"+page+"/"+size+"?"+Date.now();
            self.$axios.get(_url).then((res)=>{
                if(res.data.retval.list==null){
                    self.$refs.son.getDatas( [],0,false);
                }else{
                    this.tableData_1=res.data.retval.list;
                    this.totalCount1=res.data.retval.total;
                    self.$refs.son.getDatas( this.tableData_1,this.totalCount1,false);
                }
            }).catch((e)=>{
                self.$refs.son.getDatas( [],0,false);
            });
        },
        queryOneCall(value){
                let self = this;
                let _url=self.$url+"/into/the/factory/records/"+value+"?"+Date.now();
                self.$axios.get(_url).then((res)=>{
               if(res.data.retval==null){
                  this.isAbnormal=false;
               }else{
                   this.isAbnormal=true;
                   this.uTime  = new Date(res.data.retval.outTime).format("YYYY/MM/dd");
                   this.numberPlate  = res.data.retval.numberPlate;
                   this.errMsg = res.data.retval.errMsg;
               }



            });
            let _url_size=self.$url+"/into/the/factory/records/count/"+value+"?"+Date.now();
            self.$axios.get(_url_size).then((res)=>{
                if(res.data.retval==null){  this.numberSize=0}else{  this.numberSize  = res.data.retval;}

            });

        },
        querynventoryDay(date){
            let self = this;
            let _url=self.$url+"/daily/inventory/summary/list/"+date+"?"+Date.now();
            /*硫酸  磷矿粉  石灰   煤炭  普钙  磷钙["HG01XY750000","HG01XY750100","HG01XY750200","HG01XY750300","HG01XY750410","HG01XY750510"];*/
            let code=[];
            let item=[];
            self.$axios.get(_url).then((res)=>{
                let  list = res.data.retval;
                let newList=[];
                if(list==null||list==undefined||list.length==0){
                        this.isGoods=false;
                }else{
                    this.isGoods=true;
                    let _url_1=self.$url+"/daily/inventory/summary/check/"+date+"?"+Date.now();
                    let a="", b="", c="", d="", e="",f="";
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750000"){if(a== o.code){}else{a= o.code;newList.push(o)}};

                    }
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750100"){if(b== o.code){}else{a= o.code;newList.push(o)}};

                    }
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750300"){if(c== o.code){}else{a= o.code;newList.push(o)}};

                    }
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750200"){if(d== o.code){}else{a= o.code;newList.push(o)}};

                    }
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750510"){if(e== o.code){}else{a= o.code;newList.push(o)}};

                    }
                    for(let o of res.data.retval){
                        if(o.code=="HG01XY750410"){if(f== o.code){}else{a= o.code;newList.push(o)}};
                    }
                    for( let p of newList){
                        code.push( p.code);
                    }
                    self.$axios.get(_url_1,{params: {codeList: code}}).then((res)=>{
                        if(res.data.retval==null||res.data.retval==undefined){

                        }else{
                            let arr=[];
                            for(let j  of newList){
                                let k=0;
                                let obj={};
                                obj.name= j.name+"("+j.unit+")";
                                obj.number= j.value;
                                obj.text=res.data.retval[j.code];
                                item.push(obj);
                            }
                        }
                    });
                }

            });
            this.item=item;

        },
        toShow(msg){
           let date="";
            if((this.value11+"").indexOf("-")==-1){
                date=this.value11.format("YYYY-MM-dd");
            }else{
                date=this.value11;
            }
            this.cur_page=msg.page;
            this.pageSize=msg.pageSize;
            this.queryTable(date, this.cur_page,this.pageSize);
        },
        queryDatIoValue(date){
           /* let date="2018-01-03";*/
            let d = new Date(Date.parse(date)-1000*60*60*24).format("YYYY-MM-dd")
            var self = this;
            function queryLKF(){
                return self.$axios.get(self.$url+"/data/verification/HG01XY750000/"+d)
            };
            function queryLG(){
                return self.$axios.get(self.$url+"/data/verification/HG01XY750510/"+d)
            };
            function queryPG(){
                return self.$axios.get(self.$url+"/data/verification/HG01XY750410/"+d)
            }

           self.$axios.all([queryLKF(), queryLG(),queryPG()])
                .then(self.$axios.spread(function (lkf, lg,pg) {
                    if(lkf.data.retval==null){
                        self.dat.dataIoLKF=0;
                        self.dat.valueLKF=0;
                        self.dat.dataIoValueLKF=0;
                    }else{
                        self.dat.dataIoLKF=lkf.data.retval.bias==""?0:lkf.data.retval.bias;
                        self.dat.valueLKF=lkf.data.retval.valueAuto==""?0:lkf.data.retval.valueAuto;
                        self.dat.dataIoValueLKF=lkf.data.retval.valueManual==""?0:lkf.data.retval.valueManual;
                    }
                    if(lg.data.retval==null){
                        self.dat.dataIoLG=0;
                        self.dat.valueLG=0;
                        self.dat.dataIoValueLG=0;
                    }else{
                        self.dat.dataIoLG=lg.data.retval.bias==""?0:lg.data.retval.bias;
                        self.dat.valueLG=lg.data.retval.valueAuto==""?0:lg.data.retval.valueAuto;
                        self.dat.dataIoValueLG=lg.data.retval.valueManual==""?0:lg.data.retval.valueManual;
                    }
                    if(pg.data.retval==null){
                        self.dat.dataIoPG=0;
                        self.dat.valuePG=0;
                        self.dat.dataIoValuePG=0;
                    }else{
                        self.dat.dataIoPG=pg.data.retval.bias==""?0:pg.data.retval.bias;
                        self.dat.valuePG=pg.data.retval.valueAuto==""?0:pg.data.retval.valueAuto;
                        self.dat.dataIoValuePG=pg.data.retval.valueManual==""?0:pg.data.retval.valueManual;
                    }
                }));
        },
        queryProduction(date){
            let self = this;
            let _url=self.$url+"/production/monitoring/content/"+new Date(Date.parse(date)-24*60*60*1000).format("YYYY-MM-dd")+"?"+Date.now();
            let _url_1 = self.$url+"/material/threshold/configuration/list/benchmarking"
            self.$axios.get(_url_1).then((res)=>{
                let benchmarking=[];
                for(let obj of res.data.retval){
                    /*防止undefined,简单粗暴*/
                    benchmarking.push( obj.upperLimit==undefined?1:obj.upperLimit);
                }
                this.benchmark = benchmarking;
                /*没做异常处理，除非挂服务*/
            })
            self.$axios.get(_url).then((res)=>{
                if(res.data.retval==null){
                    this.queryProduction_1(0);
                    this.queryProduction_2(0);
                    this.queryProduction_3(0);
                    this.queryProduction_4(0);
                    this.queryProduction_5(0);
                }else{
                    this.production=res.data.retval;
                    this.queryProduction_1(this.production.cpoc==undefined?0:this.production.cpoc);
                    this.queryProduction_2(this.production.cpac==undefined?0:this.production.cpac);
                    this.queryProduction_3(this.production.ccp==undefined?0:this.production.ccp);
                    this.queryProduction_4(this.production.cpc==undefined?0:this.production.cpc);
                    this.queryProduction_5(this.production.pcc==undefined?0:this.production.pcc);
                }


            });


        },
        queryProduction_1(v){
            let self = this;
            let gu_1=echarts.init(self.$refs.gu_1);
            gu_1.setOption({

                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 90,
                        splitNumber:200,

                        splitLine:{
                            show:false,
                            length:1
                        },
                        min:0,
                        max:2,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[ this.benchmark[0]/2, '#01ACED'],[ 1, '#BB4B39']],
                                width: 15
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==0){return e }
                                if(e==2){return e }
                               if(e==self.benchmark[0]){return e}

                            },
                            "distance": 17,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:3,
                            length:'60%'

                        },
                        title : {
                            show : false,
                            offsetCenter: [0, '-45%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#888888',
                                fontSize: 14
                            }
                        },
                        detail : {
                            show : true,
                            borderWidth: 0,
                            borderColor: '#ccc',
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            formatter:function(e){
                                return e
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name:'对标值'+this.benchmark[0]}]
                    },

                ],
            });
        },
        queryProduction_2(v){
            let self = this;
            let gu_2=echarts.init(self.$refs.gu_2);
            gu_2.setOption({
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 90,
                        splitNumber:130,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:1.3,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[ this.benchmark[1]/1.3, '#01ACED'],[ 1, '#BB4B39']],
                                width: 15
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==0||e==1.3||e==self.benchmark[1]){return e}

                            },
                            "distance": 10,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:3,
                            length:'60%'

                        },
                        title : {
                            show : false,
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#888888',
                                fontSize: 14
                            }
                        },
                        detail : {
                            show : true,
                            borderWidth: 0,
                            borderColor: '#ccc',
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            formatter:function(e){
                                return e
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: '对标值'+this.benchmark[1]}]
                    },

                ],
            });
        },
        queryProduction_3(v){
            let self = this;
            let gu_3=echarts.init(self.$refs.gu_3);
            gu_3.setOption({
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 90,
                        splitNumber:60,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:0.06,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[ this.benchmark[2]/0.06, '#01ACED'],[ 1, '#BB4B39']],
                                width: 15
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==0||e==0.06||e==self.benchmark[2]){  return e}

                            },
                            "distance": 10,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:3,
                            length:"60%"

                        },
                        title : {
                            show : false,
                            offsetCenter: [0, '-45%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#888888',
                                fontSize: 14
                            }
                        },
                        detail : {
                            show : true,
                            borderWidth: 0,
                            borderColor: '#ccc',
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            formatter:function(e){
                                return e
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: '对标值'+this.benchmark[2]}]
                    },

                ],
            });
        },
        queryProduction_5(v){
            let self = this;
            let gu_4=echarts.init(self.$refs.gu_4);
            gu_4.setOption({
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 90,
                        splitNumber:32,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:80,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[ this.benchmark[3]/80, '#01ACED'],[ 1, '#BB4B39']],
                                width: 15
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==self.benchmark[3]){return e}
                                if(e==0||e==80){ return e}
                            },
                            "distance":10,
                            textStyle:{
                                color:"#000000"
                            },
                        },
                        pointer: {
                            width:3,
                            length:"60%"

                        },
                        title : {
                            show : false,
                            offsetCenter: [0, '-45%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#888888',
                                fontSize: 14
                            }
                        },
                        detail : {
                            show : true,
                            borderWidth: 0,
                            borderColor: '#ccc',
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            formatter:function(e){
                                return e
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: '对标值'+this.benchmark[3]}]
                    },

                ],
            });
        },
        queryProduction_4(v){
            let self = this;
            let gu_5=echarts.init(self.$refs.gu_5);
            gu_5.setOption({
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 90,
                        splitNumber:5,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:100,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[ this.benchmark[4]/100, '#01ACED'],[ 1, '#BB4B39']],
                                width: 15
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==0||e==100||e==self.benchmark[4]){ return e}
                            },
                            "distance":10,
                            textStyle:{
                                color:"#000000"
                            },
                        },
                        pointer: {
                            width:3,
                            length:"60%"

                        },
                        title : {
                            show : false,
                            offsetCenter: [0, '-45%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#888888',
                                fontSize: 14
                            }
                        },
                        detail : {
                            show : true,
                            borderWidth: 0,
                            borderColor: '#ccc',
                            offsetCenter: [0, '14%'],       // x, y，单位px
                            formatter:function(e){
                                return e
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: '对标值'+this.benchmark[4]}]
                    },

                ],
            });
        },
    }
    }
</script>

<style>

   .right{float:right}
   .titleCount{display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;box-shadow: 0px 3px 0px #E5E5E5;margin-bottom: 2rem;justify-content:space-between}
  /*  .title{margin-top: 2.5rem;font-size: 2rem;height: 4rem;line-height: 4rem;}*/
    .count{background-color: #ffffff;height:10.5rem}
    .fontCenter{text-align: center;}
    .font1{font-size: 1.8rem;color:#606266}
    .font2{font-size: 2.1rem;color:#414141}

    .goods{background-color: #ffffff;box-shadow: 0px 3px 0px #E5E5E5;margin-bottom: 3rem}
    .goodsTitle{font-size: 1.8rem;padding-left:2rem}
    .goodsHeight {height: 27.8rem}

    .numberHint{height:15.4rem;color: #bb4b39;font-size: 4.8rem;text-align: center;line-height: 23rem}
    .titleHint{text-align: center;font-size: 1.8rem}
    .timeTitle{height: 5rem;line-height: 15rem;font-size: 1.8rem}
    .li{margin-top: 5rem}
    .li li{list-style-type:none;height: 3rem;font-size: 1.6rem}
    .top:nth-child(1){padding-top: 3rem}
   .top:nth-child(2){padding-top: 3rem}
   .noticeBoard{height:9rem}
    .noticeBoardNumber{font-size: 3.6rem;text-align: center}
    .noticeBoardText{font-size: 1.8rem;text-align: center;color:#888888}
   .row-bg {  padding: 10px 0; width: 100%}
   .backgroundVerify {  background: #ffffff; box-shadow: 0px 3px 0px #E5E5E5; }
    .red{color:red}
    /*.blue{color:#0082e6}*/
    .yellow{color: yellow}
    .green{color: green}
    .numberVerify .time{float: right;font-size: 1.8rem;color:#a29999;height: 5rem;line-height: 5rem}
    .numberVerify .timeRight{margin-right: 1rem}
    .colorRed{color: #bb4b39}
    .colorBlue{color: #00a8ec}
    .yyyyy{
        display: -moz-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -moz-box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -moz-box-pack: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        flex-wrap:wrap;justify-content:space-between;
    }
    .imgCenter_home{text-align:center;vertical-align:middles;height: 11rem}
    .newTitle{height: 5rem;line-height: 5rem;font-size: 2rem}
</style>
