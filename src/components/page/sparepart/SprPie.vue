<template>
    <el-row>
        <el-col :span="8">
            <div style="height: 15rem;margin-top: 35%;border-right: 1px solid #888888">
                <div class="monery">{{monery}}万元</div>
                <div class="title">{{title}}</div>
            </div>
        </el-col>
        <el-col :span="16">
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
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",

                },
                legend: {
                   /* orient: 'vertical',
                    x: 'right',
                    itemWidth: 10,
                    itemHeight: 10,
                    align: 'left',
*/
                    data:[],

                },
                series: [

                    {
                        name:'入库货值',
                        type:'pie',
                        radius: ['32%', '45%'],
                        color: ['#3b5898', '#00a8ec', '#bb4b39', '#21b6b9','#60a900','#01949b',' #f17677'],
                        label: {
                            normal: {
                                formatter: '{b}\n{d}%'
                            },

                        },
                        data:[
                            {value:435, name:'柴油'},
                            {value:679, name:'高压清洗机管'},
                            {value:848, name:'高压气管'},

                        ]
                    }
                ]
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
