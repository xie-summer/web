=<template>
    <div>
        <div class="chart" ref="chartOne" :style="{width: '22rem', height: '21rem'}"></div>
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
        data () {
        return {}
    },
    methods:{
        /*创建图表一*/
        createChartOne(){
            let chartOne=echarts.init(this.$refs.chartOne);

            chartOne.setOption({
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },

                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        center : ['50%', '60%'],    // 默认全局居中
                        radius : 120,
                        detail: {formatter:'{value}吨'},
                        data: [{value: 500, name: ''}],
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
                                return e+'吨'
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
        this.createChartOne();
    }
    }
</script>
