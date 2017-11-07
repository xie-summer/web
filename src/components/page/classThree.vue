=<template>
    <div>
        <div class="chartLine" ref="chartLine" :style="{width: '100%', height: '35rem'}"></div>
    </div>
</template>

<script>
    let echarts=require('echarts/lib/echarts');

    //引入折线图
    require('echarts/lib/chart/line');

    //引入所需组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        props: ['childMsg'],
        data () {
        return {}
    },
    methods:{
        /*创建图表一*/
        createChartOne(name){
            let chartLine=echarts.init(this.$refs.chartLine);

            chartLine.setOption({
                title: {
                    text: '堆叠区域图'
                },

                tooltip : {
                    borderColor:'#01ACED',
                    borderWidth:20,
                    formatter:function(p){
                       for(let i=0;i< p.length;i++){
                           if(p[i].value==""){

                           }else{
                               return '<div style="display: inline-block;background-color:'+p[i].color+'">'+p[i].seriesName+"："+p[i].value+'</div>'
                           }
                       }
                    },
                    trigger: 'axis',

                },
                legend: {
                    data:[]
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : name
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name:'吨'
                    }
                ],
                series : [
                    {
                        name:'早班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:[90, 230, 210,90, 230, 210,90, 230,"","","","","","","","","","","","","","","","",]
                    },
                    {
                        name:'中班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:["","","","","","","","",220, 182, 191, 234, 84, 152, 247,"","","","","","","","",]
                    },
                    {
                        name:'晚班',
                        type:'line',
                        areaStyle: {normal: {}},
                        data:["","","","","","","","","","","","","","","","",220, 182, 191, 234, 98, 256, 310]
                },
                ],
                color:['#01ACED','#BB4B39','#3B5898']


            })
        }
    },
    mounted(){
        this.createChartOne(this.childMsg);
    }
    }
</script>
