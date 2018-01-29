<template>
    <el-row>
        <el-col :span="24">
            <div class="chartBar chartPsHeight" ref="chartBar"  :class="isShow?'a':'b'"></div>
            <img src="../../../../static/img/wushuju.png" v-if="!isShow"class="imgCenter"/>
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
            valueData:[],
            isShow:true
        }
    },
    methods:{
        /*创建图表一*/
        initPie(nameData,valueData,show){
            if(show==0){
                this.isShow=false;
            }else{
                this.isShow=true;
                let chartBar=echarts.init(this.$refs.chartBar);
                chartBar.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter:function(e){
                           return e[0].name+"："+e[0].value+"元"
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
                        boundaryGap: [0, 0.01],
                        axisLabel:{
                            formatter:function(e){

                                return e/10000+'万'
                            }
                        },

                    },
                    yAxis: {
                        type: 'category',
                        data: nameData.reverse()
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

        }
    },
    mounted(){
        this.initPie(this.nameData,this.valueData);
    }
    }
</script>
