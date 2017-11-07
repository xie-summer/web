=<template>
    <div>
        <div class="chart" ref="chartOne" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
    let echarts=require('echarts/lib/echarts');
    //引入柱状图
    require('echarts/lib/chart/bar');
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
                        data: [{value: 1000, name: ''}],
                        axisLine:{
                            show:true,
                            lineStyle: {
                                color:[[0.33, '#f56954'],[0.67, '#0089ee'],[1,'#1ea75c']],
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
