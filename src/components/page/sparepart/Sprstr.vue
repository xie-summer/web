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
       initPie(sr,dataValue,strValue,tool){
            if(tool==0){
                this.isShow=false
            }else{
                this.isShow=true

                console.log(this.$refs.chartstr);
                let chartstr=echarts.init(this.$refs.chartstr);
                var txFs = 12;
                var value_1_4 = 100000;
                var value_3_4 = 400000;
                var dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                var grayHolderStyle = {
                    normal: {
                        color: '#EEEEEE',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: '#EEEEEE'
                    }
                };
                chartstr.setOption({
                    tooltip: {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        selectedMode: false,
                        orient: 'vertical',
                        x: '52%',
                        y: 50,
                        itemGap: 9,
                        itemWidth: 8,
                        itemHeight: 8,
                        data: [{
                            name: strValue[0] + ': ' + dataValue[0],
                            icon: 'rect',
                        }, {
                            name: strValue[1] + ': ' + dataValue[1],
                            icon: 'rect',
                        }, {
                            name: strValue[2] + ': ' + dataValue[2],
                            icon: 'rect',
                        }, {
                            name: strValue[3] + ': ' + dataValue[3],
                            icon: 'rect',
                        }, {
                            name: strValue[4] + ': ' + dataValue[4],
                            icon: 'rect',
                        }],
                        textStyle: {
                            fontSize: txFs,
                        }
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    color: ['#37A3FD'],
                    series: [{
                        name: '1',
                        type: 'pie',
                        clockWise: false,
                        radius: [112, 120],
                        itemStyle: dataStyle,
                        data: [{
                            value: dataValue[0],
                            name: strValue[0] + ': ' + dataValue[0]
                        },
                            {
                                value: value_3_4 - parseInt(dataValue[0]),
                                name: '',
                                itemStyle: grayHolderStyle
                            },
                            {
                                value: value_1_4,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },
                        {
                            name: '',
                            type: 'pie',
                            clockWise: false,
                            radius: [100, 112],
                            itemStyle: dataStyle,
                            data: [{
                                value: 0,
                                name: ''
                            },
                                {
                                    value: 100,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '2',
                            type: 'pie',
                            clockWise: false,
                            radius: [92, 100],
                            itemStyle: dataStyle,
                            data: [{
                                value: dataValue[1],
                                name: strValue[1] + ': ' + dataValue[1]
                            },
                                {
                                    value: value_3_4 - parseInt(dataValue[1]),
                                    name: '',
                                    itemStyle: grayHolderStyle
                                },
                                {
                                    value: value_1_4,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '',
                            type: 'pie',
                            clockWise: false,
                            radius: [80, 92],
                            itemStyle: dataStyle,
                            data: [{
                                value: 0,
                                name: ''
                            },
                                {
                                    value: 100,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '3',
                            type: 'pie',
                            clockWise: false,
                            radius: [72, 80],
                            itemStyle: dataStyle,
                            data: [{
                                value: dataValue[2],
                                name: strValue[2] + ': ' + dataValue[2]
                            },
                                {
                                    value: value_3_4 - parseInt(dataValue[2]),
                                    name: '',
                                    itemStyle: grayHolderStyle
                                },
                                {
                                    value: value_1_4,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '',
                            type: 'pie',
                            clockWise: false,
                            radius: [60, 72],
                            itemStyle: dataStyle,
                            data: [{
                                value: 0,
                                name: ''
                            },
                                {
                                    value: 100,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '4',
                            type: 'pie',
                            clockWise: false,
                            radius: [52, 60],
                            itemStyle: dataStyle,
                            data: [{
                                value: dataValue[3],
                                name: strValue[3] + ': ' + dataValue[3]
                            },
                                {
                                    value: value_3_4 - parseInt(dataValue[3]),
                                    name: '',
                                    itemStyle: grayHolderStyle
                                },
                                {
                                    value: value_1_4,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '',
                            type: 'pie',
                            clockWise: false,
                            radius: [40, 52],
                            itemStyle: dataStyle,
                            data: [{
                                value: 0,
                                name: ''
                            },
                                {
                                    value: 100,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '5',
                            type: 'pie',
                            clockWise: false,
                            radius: [32, 40],
                            itemStyle: dataStyle,
                            data: [{
                                value: dataValue[4],
                                name: strValue[4] + ': ' + dataValue[4]
                            },
                                {
                                    value: value_3_4 - parseInt(dataValue[4]),
                                    name: '',
                                    itemStyle: grayHolderStyle
                                },
                                {
                                    value: value_1_4,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        }
                    ]
                })
            }

        },
        isBool(v){
            if(v==true){
                this.isShow=true;
            }else{
                this.isShow=false;
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
