<template>
    <el-row>
        <el-col :span="8">
            <div style="height: 15rem;margin-top: 35%;border-right: 1px solid #888888">
                <div class="monery">{{obj.total}}元</div>
                <div class="title_t">{{obj.title}}</div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="chartPs2" ref="chartPs2" style="height: 30rem"></div>
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

            let chartPs2=echarts.init(this.$refs.chartPs2);
            window.onresize=function(){
                chartPs2.resize();
            }
            chartPs2.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: function(e){
                        return e.name+":"+( e.value).toFixed(2)+"元"
                    },

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
    .monery{font-size: 2.5rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title_t{font-size: 1.4rem;text-align: center;height: 4rem}
</style>
