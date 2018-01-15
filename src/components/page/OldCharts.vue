=<template>
    <div>
        <div class="chart" id="chartGauge" ref="chartGauge" :style="{width: wid+'rem', height:hig+ 'rem'}"></div>
    </div>
</template>

<script>
    let echarts=require('echarts/lib/echarts');
    //引入仪表盘图
    require('echarts/lib/chart/gauge');

    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        props: ['unit'],
        data () {
        return {
            wid:this.unit.wid,
            hig:this.unit.hig
        }
    },
    methods:{
        /*创建图表一*/
        createChartOne(ls){
            console.log(ls)
           let chartOne=echarts.init(this.$refs.chartGauge);
            window.onresize=function(){
                chartOne.resize();
            }
            chartOne.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}"
                },
                grid:{
                    x1:"30",
                    x2:"30"
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        center : ['50%', '60%'],    // 默认全局居中
                        radius : ls.radius,
                        detail: {formatter:'{value}'},
                        data: [{value: ls.value, name: ls.title}],
                        axisLine:{
                            show:true,
                            lineStyle: {
                                color:[[ls.floor/ls.tool, '#3b5898'],[ls.limit/ls.tool, '#00a8ec'],[1,'#bb4b39']],
                                width: 30
                            }
                        },
                        splitLine:{
                            show:false,
                        },
                        axisTick: {
                                splitNumber:1,
                            length :0,
                        },
                        axisLabel:{
                                show:true,
                                formatter:function(e){
                                    console.log(e)
                                    if(e==0){ return e+ls.units2;}
                                    if(e==ls.limit) {return e+ls.units2};
                                    if(e==ls.floor) {return e+ls.units2;}
                                    if(e==ls.tool) return e+ls.units2;
                                },
                            "distance": ls.dist,
                        },

                        splitNumber:ls.tool/100,
                        pointer : {
                            width : 5,
                            length:'50%'
                        },
                        title : {
                            show : true,
                            offsetCenter: [0, '30%'],
                            textStyle: {
                                fontSize:15,
                                color: '#303133',
                            }
                        },
                        startAngle:180,
                        endAngle:0,
                        min:0,
                        max:ls.tool,
                        detail : {
                            show : true,
                            offsetCenter: [0, '15%'],
                            formatter:function(e){
                                return e+ls.units
                            },
                            textStyle: {
                                fontSize : 20,
                            }
                        },

                    }
                ]
            })
        }
    },
    mounted(){
        this.createChartOne(this.unit);
    }
    }
</script>
