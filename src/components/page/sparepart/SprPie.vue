<template>
    <el-row>
        <el-col :span="8">
            <div style="height: 15rem;margin-top: 35%;border-right: 1px solid #888888">
                <div class="monery">{{obj.total|numToFixed}}元</div>
                <div class="title_t">{{obj.title}}</div>
            </div>
        </el-col>
        <el-col :span="16" v-if="put">
            <div class="chartPs" ref="chartPs" style="height: 30rem"></div>
        </el-col>
        <el-col :span="16" v-else class="imgCenter" style="height: 30rem;padding-top: 5rem">
            <img src="../../../../static/img/wushuju.png"/>
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
        props: ['putData','isPut'],
        data () {
        return {
               obj:this.putData,
                put:this.isPut
        }
    },
    methods:{
        /*创建图表一*/
        initPie(putData,p){
            if(p==false){
                this.put = p;
            }else{
                this.put = p;
                let chartPs=echarts.init(this.$refs.chartPs);
                chartPs.setOption({
                    title : {
                        show:true,
                        text: '未来一周气温变化adfsfdsfsdfrgfdgfdgdfgdfgdfgdfg',
                        subtext: '纯属虚构',
                        x:"center",
                        y:"center"
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            return e.name+":"+( e.value).toFixed(2)+"元"
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


        }
    },
    mounted(){
        this.initPie(this.putData,this.isPut);
    }
    }
</script>
<style scoped>
    .monery{font-size: 2.5rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title_t{font-size: 1.4rem;text-align: center;height: 4rem}
    .imgCenter{text-align:center;vertical-align:middle;height: 25rem;}
</style>
