<template>
    <el-row>
        <el-col :span="24">
            <div class="chartBar" ref="chartBar" style="height: 30rem"></div>
        </el-col>
    </el-row>

</template>

<script>
    let echarts=require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {

        data () {
        return {
            nameData:[],
            valueData:[]
        }
    },
    methods:{
        /*创建图表一*/
        initPie(nameData,valueData){
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
                    data: nameData
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        data: valueData.reverse()
                    }
                ],
                color:["#1DB5EF"]
            })
        }
    },
    mounted(){
        this.initPie(this.nameData,this.valueData);
    }
    }
</script>
<style scoped>
</style>
