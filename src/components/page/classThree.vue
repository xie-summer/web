=<template>

    <div>
        <div class="contents">
            <div style="width: 15rem">
                <el-col :span="5"style="height: 2.8rem;background-color: #01ACED;margin-top: 0.7rem"></el-col>
                <el-col :span="1" style="height: 1px"></el-col>
                <el-col :span="12">
                    <el-col :span="24" style="font-size: 1.2rem;line-height: 2.6rem">{{obj.class1.name}}</el-col>
                    <el-col :span="24" style="font-size: 1.8rem;line-height: 1rem">{{obj.class1.value}}吨</el-col>
                </el-col>

            </div>
            <div style="width: 15rem">
                <el-col :span="5"style="height: 2.8rem;background-color: #BB4B39;margin-top: 0.7rem"></el-col>
                <el-col :span="1" style="height: 1px"></el-col>
                <el-col :span="12">
                    <el-col :span="24" style="font-size: 1.2rem;line-height: 2.6rem">{{obj.class2.name}}</el-col>
                    <el-col :span="24" style="font-size: 1.8rem;line-height: 1rem">{{obj.class2.value}}吨</el-col>
                </el-col>
            </div>
            <div style="width: 15rem">
                <el-col :span="5"style="height: 2.8rem;background-color: #3B5898;margin-top: 0.7rem"></el-col>
                <el-col :span="1" style="height: 1px"></el-col>
                <el-col :span="12">
                    <el-col :span="24" style="font-size: 1.2rem;line-height: 2.6rem">{{obj.class3.name}}</el-col>
                    <el-col :span="24" style="font-size: 1.8rem;line-height: 1rem">{{obj.class3.value}}吨</el-col>
                </el-col>
            </div>

        </div>
        <div class="chartLine" ref="chartLine" :style="{width: '100%', height: '29rem'}"></div>
    </div>
</template>

<script>
    let echarts=require('echarts/lib/echarts');

    //引入折线图
    require('echarts/lib/chart/line');

    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        props: ['childMsg'],
        data () {
        return {
            obj:this.childMsg
        }
    },
    methods:{
        /*创建图表一*/
        createChartOne(obj){
            let chartLine=echarts.init(this.$refs.chartLine);
            window.onresize=function(){
                chartLine.resize();
            }
            chartLine.setOption({
                tooltip : {
                    borderColor:'#ffffff',
                    borderWidth:0,
                    backgroundColor:'rgba(0,0,0,0)',
                    formatter:function(p){
                       for(let i=0;i< p.length;i++){
                           if(p[i].value==""){

                           }else{
                                   return '<div style="width:100px;height:50px;display: inline-block;background-color:'+p[i].color+'">'+p[i].seriesName+"："+p[i].value+'</div>'
                           }
                       }
                    },
                    trigger: 'axis',

                },
                legend: {
                    data:[]
                },

                grid: {
                    left: '3%',
                    right: '7%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        name:'时间',
                        boundaryGap : false,
                        data : obj.date
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name:'吨'
                    }
                ],
                series : [
                    {
                        name:'晚班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:obj.data1
                    },
                    {
                        name:'早班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:obj.data2
                    },
                    {
                        name:'中班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:obj.data3
                },
                ],
                color:['#01ACED','#BB4B39','#3B5898']


            })
        }
    },
    mounted(){
        this.createChartOne(this.childMsg);
    }
    }
</script>
<style scoped>
    .contents{width: 100%;
        height: 5rem;
        justify-content:space-around;
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
        flex-wrap:wrap;}
</style>
