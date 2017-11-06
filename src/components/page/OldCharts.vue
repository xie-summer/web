=<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="chart" ref="chartOne" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
    let echarts=require('echarts/lib/echarts');
    //引入柱状图
    require('echarts/lib/chart/bar');
    //引入圆饼图
    require('echarts/lib/chart/pie');
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
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            })
        }
    },
    mounted(){
        this.createChartOne();
    }
    }
</script>
