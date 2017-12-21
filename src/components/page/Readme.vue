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
        <div class="titleCount" style="min-width: 1055px;height: 10.5rem">
            <el-col :span="4"   v-for=" (i,value) in item" :key="value" style="flex-grow:1">
                <el-col :span="23" :offset="1" class="count">
                    <el-col :span="24" class="fontCenter font1">{{i.name}}</el-col>
                    <el-col :span="24"  class="fontCenter">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                        </svg>
                        <span style="font-size: 1.5rem" :class="i.text=='高' ? 'colorRed':'colorBlue'">{{i.text}}</span>
                    </el-col>
                    <el-col :span="24" class="fontCenter font2">{{i.number}}</el-col>
                </el-col>
            </el-col>
        </div>
        <div class="goods" style="min-width: 1055px">
            <el-col :span="24" class="goodsTitle">出厂监控</el-col>
            <div  style="display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%">
                <el-col :span="10" class="goodsHeight" style="flex-grow:1">
                    <el-col :span="12">
                        <div class="numberHint">{{numberSize}}</div>
                        <div class="titleHint">今日异常出库次数</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="timeTitle">最近一次异常出库</div>
                        <ul class="li">
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
                </el-col>
                <el-col :span="14" class="goodsHeight" style="flex-grow:1">
                    <v-table :table-con="tableData_1" ref="son" @handleCurrentChange="toShow"></v-table>
                </el-col>
            </div>
        </div>
        <el-row :span="24" class="goodsTitle"style="font-size: 2rem;">生产监管</el-row>
            <el-row type="flex"  justify="space-between" style="min-width: 1055px;box-shadow: 5px 5px 3px #E5E5E5;margin-bottom: 3rem">
                <div style="width: 25rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙矿耗</el-col>
                    <div class="gu_1" id="gu_1" ref="gu_1" style="height: 14rem"></div>
                </div>
                <div style="width: 25rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙酸耗</el-col>
                    <div class="gu_2" id="gu_2" ref="gu_2" style="height: 14rem"></div>
                </div>
                <div style="width: 25rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙煤耗</el-col>
                    <div class="gu_3" id="gu_3" ref="gu_3" style="height: 14rem"></div>
                </div>
                <div style="width: 25rem">
                    <el-col :span="24" style="text-align: center;font-size: 1.8rem;color: #888888">磷钙电耗</el-col>
                    <div class="gu_4" id="gu_4" ref="gu_4" style="height: 14rem"></div>
                </div>
            </el-row>
        <div class="goods" style="min-width: 1055px">
            <el-col :span="24" class="goodsTitle" style="font-size: 2rem">巡检检修</el-col>
            <div style="display: flex;display: -webkit-flex;flex-direcion:row ;width: 100%; flex-wrap:wrap;">
                <el-col :span="10"  class="top"style="flex-grow:1">
                    <div style="width: 50%;display: inline-block;flex-grow:1;float: left" class="noticeBoard" v-for=" (i,index) in items" >
                        <div class="noticeBoardNumber":class='i.color'>{{i.number}}<span style="font-size: 2rem">{{i.symbol}}</span></div>
                        <div class="noticeBoardText">{{i.text}}</div>
                    </div>
                </el-col>
                <el-col :span="14" class="tableColor"style="flex-grow:1">
                    <el-table :data="tableData" border style="width: 100%;" height=282>
                        <el-table-column prop="date" label="检修工段"  align="center" >
                        </el-table-column>
                        <el-table-column prop="name" label="检修设备" align="center" >
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            @current-change ="handleCurrentChange1"
                            layout="total, prev, pager, next"
                            :total="totalCount1"
                            :current-page="currentPage1"
                            :page-size="pageSize"
                            >
                        </el-pagination>
                    </div>
                </el-col>
            </div>
        </div>
        <div class="numberVerify" style="min-width: 1055px">
            <el-col :span="24">
                <div style="float: left;font-size: 2rem">数据校验</div>

                <div class="time" >0.00-24.00</div>
                <div class="time timeRight">{{date}}</div>
            </el-col>

                <div class="row-bg yyyyy">
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12"  >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">磷矿粉消耗（吨）</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valueLKF}}</el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center">计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;">
                                <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <span style="color:#BB4B39">{{dat.dataIoLKF}}%</span>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValueLKF}}</el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center">记录</el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12" >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">磷钙（吨）</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valueLG}}</el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center">计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;">
                                    <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <span style="color:#BB4B39">{{dat.dataIoLG}}%</span>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValueLG}}</el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center">记录</el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="7" class="backgroundVerify">
                        <el-col :span="12" >
                            <el-col :span="24" style="height:5rem;font-size: 1.4rem;padding-left: 1rem;padding-top: 0.5rem">普钙（吨）</el-col>
                            <el-col :span="24" style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;border-right:solid 1px #c7c7c7">{{dat.valuePG}}</el-col>
                            <el-col :span="24" style="height:5rem;font-size: 1.6rem;text-align: center">计量</el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="24"  style="height:5rem;font-size: 1.6rem;padding-left: 3rem;padding-top: 1rem">
                                <svg class="icon" aria-hidden="true" style=" width: 3rem; height: 3rem;">
                                    <use xlink:href="#el-icon-erp-shebeibaojing"></use>
                                </svg>
                                <span style="color:#BB4B39">{{dat.dataIoPG}}%</span>
                            </el-col>
                            <el-col style="height:6rem;font-size: 2.4rem;text-align: center;line-height:6rem;">{{dat.dataIoValuePG}}</el-col>
                            <el-col style="height:5rem;font-size: 1.6rem;text-align: center">记录</el-col>
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
                totalCount1: 500,
                pageSize:6,
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
        tableData_1:[1,2],
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
        tableData:[],
        date:new Date().format("YYYY-MM-dd")
            }
        },
    created:function(){
        this.queryOneCall();
        this.queryTable(this.value11.format("YYYY-MM-dd"),this.cur_page,this.pageSize);
        this.querynventoryDay(this.value11.format("YYYY-MM-dd"));
        this.queryDatIoValue(this.value11.format("YYYY-MM-dd"));

    },
    mounted(){
        this.queryProduction_1(3000);
        this.queryProduction_2(3000);
        this.queryProduction_3(3000);
        this.queryProduction_4(3000);
    },
   filters:{

    },
    methods: {
        changeHandler:function(value){
            this.date=value;
            this.queryTable(value,this.cur_page,this.pageSize);
            this.querynventoryDay(value);
            this.queryDatIoValue(value);
        },
        handleCurrentChange1(val){
            this.$message.success(val)
            //页码
            this.cur_page = val;

        },
        queryTable(date,page,size){
            let self = this;
            let _url=self.$url+"/into/the/factory/records/"+date+"/"+page+"/"+size;
            self.$axios.get(_url).then((res)=>{
                this.tableData_1=res.data.retval.list;
             self.$refs.son.getData( this.tableData_1);

            });
        },
        queryOneCall(){
                let self = this;
                let _url=self.$url+"/into/the/factory/records/"+this.value11.format("YYYY-MM-dd");
                self.$axios.get(_url).then((res)=>{
               if(res.data.retval==null) return false;
                this.uTime  = new Date(res.data.retval.outTime).format("YYYY/MM/dd");
                this.numberPlate  = res.data.retval.numberPlate;
                this.errMsg = res.data.retval.errMsg;


            });
            let _url_size=self.$url+"/into/the/factory/records/count/"+this.value11.format("YYYY-MM-dd");
            self.$axios.get(_url_size).then((res)=>{

                this.numberSize  = res.data.retval;
            });

        },
        querynventoryDay(date){
            let self = this;
            let _url=self.$url+"/daily/inventory/summary/list/"+date;
            let code=[];
            let item=[];
            self.$axios.get(_url).then((res)=>{
                let  list = res.data.retval;
                let _url_1=self.$url+"/daily/inventory/summary/check/"+date;
                for(let o of res.data.retval){
                    code.push( o.code);
                }
                self.$axios.get(_url_1,{params: {codeList: code}}).then((res)=>{
                   let arr=[];
                    for(let j  of list){
                        let k=0;
                        let obj={};
                        obj.name= j.name;
                        obj.number= j.value;
                        obj.text=res.data.retval[j.code];
                        item.push(obj);
                    }
                });
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
            var self = this;
            function queryLKF(){
                return self.$axios.get(self.$url+"/real/time/consumption/gather/day/statistics/"+date+"/HG01XY75000")
            };
            function queryLG(){
                return self.$axios.get(self.$url+"/real/time/consumption/gather/day/statistics/"+date+"/HG01XY750510")
            };
            function queryPG(){
                return self.$axios.get(self.$url+"/real/time/consumption/gather/day/statistics/"+date+"/HG01XY750410")
            }

           self.$axios.all([queryLKF(), queryLG(),queryPG()])
                .then(self.$axios.spread(function (lkf, lg,pg) {

                   self.dat.valueLKF=lkf.data.retval.value;
                   self.dat.dataIoLKF=lkf.data.retval.ratio;
                   self.dat.dataIoValueLKF=lkf.data.retval.recordValues;

                   self.dat.valueLG=lg.data.retval.value;
                   self.dat.dataIoLG=lg.data.retval.ratio;
                   self.dat.dataIoValueLG=lg.data.retval.recordValues;

                   self.dat.valuePG=pg.data.retval.value;
                   self.dat.dataIoPG=pg.data.retval.ratio;
                   self.dat.dataIoValuePG=pg.data.retval.recordValues;
                }));
        },
        queryProduction_1(v){
            let self = this;
            let gu_1=echarts.init(self.$refs.gu_1);

            gu_1.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}万"
                },
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 100,
                        splitNumber:70,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:7000,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[v/7000, '#3B48A8'],[4500/7000, '#C4CBFF'],[1,'#E4E4E4']],
                                width: 30
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                if(e==0) return e
                                if(e==7000) return e

                            },
                            "distance": -39,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:0,

                        },
                        title : {
                            show : true,
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
                            offsetCenter: [0, '-15%'],       // x, y，单位px
                            formatter:function(e){
                                return (e/10000).toFixed(2)+'万元'
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: 'title'}]
                    },

                ],
            });
        },
        queryProduction_2(v){
            let self = this;
            let gu_2=echarts.init(self.$refs.gu_2);

            gu_2.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}万"
                },
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 100,
                        splitNumber:1,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:7000,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[v/7000, '#01ACED'],[4500/7000, '#A0E5FF'],[1,'#E4E4E4']],
                                width: 30
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                return e
                            },
                            "distance": -39,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:0,

                        },
                        title : {
                            show : true,
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
                            offsetCenter: [0, '-15%'],       // x, y，单位px
                            formatter:function(e){
                                return (e/10000).toFixed(2)+'万元'
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: 'title'}]
                    },

                ],
            });
        },
        queryProduction_3(v){
            let self = this;
            let gu_3=echarts.init(self.$refs.gu_3);

            gu_3.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}万"
                },
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 100,
                        splitNumber:1,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:7000,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[v/7000, '#4875B4'],[4500/7000, '#A3C9FF'],[1,'#E4E4E4']],
                                width: 30
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                return e
                            },
                            "distance": -39,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:0,

                        },
                        title : {
                            show : true,
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
                            offsetCenter: [0, '-15%'],       // x, y，单位px
                            formatter:function(e){
                                return (e/10000).toFixed(2)+'万元'
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 20,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: 'title'}]
                    },

                ],
            });
        },
        queryProduction_4(v){
            let self = this;
            let gu_4=echarts.init(self.$refs.gu_4);

            gu_4.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}万"
                },
                series : [
                    {
                        name:'',
                        type:'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center : ['50%', '70%'],    // 默认全局居中
                        radius : 100,
                        splitNumber:1,
                        splitLine:{
                            show:false,
                            length:10
                        },
                        min:0,
                        max:7000,
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                color:[[v/7000, '#3B48AA'],[4500/7000, '#BBC3FF'],[1,'#E4E4E4']],
                                width: 30
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 1,   // 每份split细分多少段
                            length :0,        // 属性length控制线长
                        },

                        axisLabel:{
                            show:true,
                            formatter:function(e){
                                return e
                            },
                            "distance": -39,
                            textStyle:{
                                color:"#000000"
                            }
                        },
                        pointer: {
                            width:0,

                        },
                        title : {
                            show : true,
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
                            offsetCenter: [0, '-15%'],       // x, y，单位px
                            formatter:function(e){
                                return (e/10000).toFixed(2)+'万元'
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontSize : 25,
                                color:'#000000'
                            }
                        },

                        data:[{value: v, name: 'title'}]
                    },

                ],
            });
        },
    }
    }
</script>

<style>

   .right{float:right}
   .titleCount{display: flex;display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;box-shadow: 5px 5px 3px #E5E5E5;margin-bottom: 2rem;justify-content:space-between}
    .title{margin-top: 4.5rem;font-size: 2rem;height: 4rem;line-height: 4rem}
    .count{background-color: #ffffff;height:10.5rem}
    .fontCenter{text-align: center;}
    .font1{font-size: 1.8rem}
    .font2{font-size: 2.1rem}

    .goods{background-color: #ffffff;box-shadow: 5px 5px 3px #E5E5E5;margin-bottom: 3rem}
    .goodsTitle{font-size: 1.8rem;padding-left:2rem}
    .goodsHeight {height: 27.8rem}

    .numberHint{height:15.4rem;color: red;font-size: 4.8rem;text-align: center;line-height: 23rem}
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
   .backgroundVerify {  background: #ffffff; box-shadow: 5px 5px 3px #E5E5E5; }
    .red{color:red}
    .blue{color:#0082e6}
    .yellow{color: yellow}
    .green{color: green}
    .numberVerify .time{float: right;font-size: 1.8rem;color:#a29999}
    .numberVerify .timeRight{margin-right: 1rem}
    .colorRed{color: red}
    .colorBlue{color: blue}
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

</style>
