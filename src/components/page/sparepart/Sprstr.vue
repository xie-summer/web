<template>
    <el-row>
        <el-col :span="24" v-if="isShow">
            <div class="chartStr" ref="chartstr" style="height: 30rem"></div>
        </el-col>
        <el-col :span="24" v-else class="imgCenter" style="height: 30rem;padding-top: 5rem">
            <img src="../../../../static/img/wushuju.png"/>
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
            isShow:true
        }
    },
    methods:{
        show:function(){

        },
        /*创建图表一*/
       initPie(sr,ar,name,tool){
            if(tool==0){
                this.isShow=false
            }else{
                this.isShow=true;
                var listName = name;
                var dataList=[];
                var x=155,y=175;
                for(let i=0;i<sr.length;i++){
                    let item={
                        name: '', type: 'pie', clockWise: false, hoverAnimation: false,
                        radius: [0, 0], itemStyle:{ normal: {label: {show: false,  position : 'inner'}, labelLine: {show: false}}}, data: getData(0.4)
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
                            return params.seriesName + ": " + params.value*tool ;
                        }
                    },
                    legend: {
                        left: "50%",
                        itemWidth:0,
                        itemHeight: 15,
                        data: listName,
                        selectedMode: true,
                        orient: "vertical",

                    },
                    series: dataList
                })
            }

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
    .imgCenter{text-align:center;vertical-align:middle;height: 25rem;}
</style>
