<template>
    <el-row>
        <el-col :span="24">
            <div class="chartStr" ref="chartstr" style="height: 30rem"></div>
        </el-col>
    </el-row>

</template>

<script>
    let echarts=require('echarts/lib/echarts');
    //引入所需组件
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {

        data () {
        return {
        }
    },
    methods:{
        show:function(){

        },
        /*创建图表一*/
       initPie(sr,ar,name,tool){
               var listName = name;

            var dataList=[];
            var x=155,y=175;
            for(let i=0;i<sr.length;i++){
                let item={
                    name: '', type: 'pie', clockWise: true, hoverAnimation: false,
                    radius: [0, 0], itemStyle:{ normal: {label: {show: false,}, labelLine: {show: false}}}, data: getData(0.4)
                };
                item.name=listName[i];
                item.radius=[x,y];
                item.data=getData(sr[i]);
                dataList.push(item);
                x=x-25;
                y=y-25;
            }
            function getData(percent) {
                return [{
                    value: percent,
                    name: percent,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00B2EE'
                            }, {
                                offset: 1,
                                color: '#00DDE6'
                            }])
                        }
                    }
                }, {
                    value: 1 - percent,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }];
            }
            let chartstr=echarts.init(this.$refs.chartstr);
            chartstr.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.seriesName + ": " + params.name*tool ;
                    }
                },
                legend: {
                    left: "40%",
                    itemWidth:0,
                    itemHeight: 15,
                    data: listName,
                    selectedMode: true,
                    orient: "vertical",

                },
                series: dataList
            })
        }
    },
    mounted(){
        let ar=[];
        let sr=[]
        let name=[]
        this.initPie(sr,ar,name);

    },

    }
</script>
<style scoped>
    .monery{font-size: 3rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title{font-size: 1.4rem;text-align: center;height: 4rem}
</style>
