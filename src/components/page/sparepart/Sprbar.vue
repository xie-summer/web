<template>
    <el-row>
        <el-col :span="24">
            <div class="chartBar" ref="chartBar" style="height: 30rem"></div>
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
            let chartBar=echarts.init(this.$refs.chartBar);
            window.onresize=function(){
                console.log("bar改变了")
                chartBar.resize();
            }
            chartBar.setOption({
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
</style>
