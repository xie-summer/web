<template>
    <el-row>
        <el-col :span="24">
            <div class="chart" ref="chartPie" style="height: 30rem"></div>
        </el-col>
    </el-row>

</template>

<script>
    let echarts=require('echarts/lib/echarts');
    //引入仪表盘图
    require('echarts/lib/chart/pie');

    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {

        data () {
        return {
            monery:300,
            title:"本周入库总货值"
        }
    },
    methods:{
        /*创建图表一*/
        initPie(){
            let chartPie=echarts.init(this.$refs.chartPie);
            chartPie.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: []
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['压力汞','压力汞','压力汞','压力汞','压力汞','压力汞','压力汞','压力汞','压力汞','压力汞']
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        data: [2000, 1900, 1800, 1700, 1600, 1500,1400,1300,1200,1100]
                    }
                ],
                color:["#1DB5EF"]
            })
        }
    },
    mounted(){
        this.initPie();
    }
    }
</script>
<style scoped>
    .monery{font-size: 3rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title{font-size: 1.4rem;text-align: center;height: 4rem}
</style>
