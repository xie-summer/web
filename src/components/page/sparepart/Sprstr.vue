<template>
    <el-row>
        <el-col :span="24">
            <div class="chart" ref="chartPie" style="height: 30rem"></div>
        </el-col>
    </el-row>

</template>

<script>
    let echarts=require('echarts/lib/echarts');
    import './worldcloud.js'
    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {

        data () {
        return {
        }
    },
    methods:{
        /*创建图表一*/
        initPie(){
            let chartPie=echarts.init(this.$refs.chartPie);
            chartPie.setOption({

                tooltip: {
                    show: true
                },
                series: [{
                    name: '热点分析',
                    type: 'wordCloud',
                    sizeRange: [6, 66],
                    rotationRange: [-50, 90],
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 12
                    },
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 100,
                            shadowColor: '#ccc'
                        }
                    },
                    data: [ {name: "柴油机油", value: 470},
                            {name: "斜铁", value: 460},
                            {name: "不锈钢焊条", value: 310},
                            {name: "不锈钢焊条", value: 580},
                            {name: "不锈钢焊条", value: 320},
                            {name: "柴油机油", value: 398},
                            {name: "斜铁", value: 421},
                            {name: "柴油机油", value: 385},
                            {name: "斜铁", value: 425},
                            {name: "柴油机油", value: 400},

                    ]
                }]
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
