<template>
    <el-row>
        <el-col :span="8">
            <div style="height: 15rem;margin-top: 35%;border-right: 1px solid #888888">
                <div class="monery">{{obj.total}}万元</div>
                <div class="title_t">{{obj.title}}</div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="chartPs" ref="chartPs" style="height: 30rem"></div>
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
        props: ['putData'],
        data () {
        return {
               obj:this.putData
        }
    },
    methods:{
        /*创建图表一*/
        initPie(putData){
            let chartPs=echarts.init(this.$refs.chartPs);
            window.onresize=function(){
                chartPs.resize();
            }
            chartPs.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: function(e){
                        return e.name+":"+( e.value).toFixed(2)+"万元"
                    },
                },
                legend: {
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
                        data:putData.value
                    }
                ]
            })
        }
    },
    mounted(){
        this.initPie(this.putData);
    }
    }
</script>
<style scoped>
    .monery{font-size: 3rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title_t{font-size: 1.4rem;text-align: center;height: 4rem}
</style>
