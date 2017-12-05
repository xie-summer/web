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
                        data: [{value: ls.value, name: ''}],
                        axisLine:{
                            show:true,
                            lineStyle: {
                                color:[[0.33, '#3b5898'],[0.67, '#00a8ec'],[1,'#bb4b39']],
                                width: 30
                            }
                        },
                        splitLine:{
                            show:false,
                        },
                        axisTick: {
                            splitNumber: 1,
                            length :0,
                        },
                        axisLabel:{
                                show:true,
                                formatter:function(e){
                                    return e+ls.units2
                                },
                            "distance": ls.dist,
                        },

                        splitNumber:3,
                        startAngle:180,
                        endAngle:0,
                        min:0,
                        max:3000,
                        detail : {
                            show : true,
                            offsetCenter: [0, '25%'],
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
