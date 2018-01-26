<template>
    <el-row>
        <el-col :span="24" >
            <div class="chartStr chartPsHeight" ref="chartstr" :class="isShow?'a':'b'" ></div>
            <img src="../../../../static/img/wushuju.png" v-if="!isShow"class="imgCenter"/>
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
       initPie(sr,dataValue,strValue,unitData,tool){
            if(tool==0){
                this.isShow=false
            }else{
                this.isShow=true
                let chartstr=echarts.init(this.$refs.chartstr);
                var txFs = 12;
                var value_1_4 = Math.ceil(dataValue.max()/3*4);
                var value_3_4 = dataValue.max()*4;
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
                        y: 23,
                        itemGap: 8,
                        itemWidth: 8,
                        itemHeight: 8,
                        data: [{
                            name: strValue[0]+'('+unitData[0] + '): ' + dataValue[0],
                            icon: 'rect',
                        }, {
                            name: strValue[1] +'('+unitData[1] + '): ' + dataValue[1],
                            icon: 'rect',
                        }, {
                            name: strValue[2] +'('+unitData[2] + '): ' + dataValue[2],
                            icon: 'rect',
                        }, {
                            name: strValue[3] +'('+unitData[3] + '): ' + dataValue[3],
                            icon: 'rect',
                        }, {
                            name: strValue[4] +'('+unitData[4] + '): ' + dataValue[4],
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
                            name: strValue[0] +'('+unitData[0] + '): ' + dataValue[0]
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
                                name: strValue[1] +'('+unitData[1] + '): ' + dataValue[1]
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
                                name: strValue[2] +'('+unitData[2] + '): ' + dataValue[2]
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
                                name: strValue[3] +'('+unitData[3] + '): ' + dataValue[3]
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
                                name: strValue[4] +'('+unitData[4] + '): ' + dataValue[4]
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
        let unit=[]
        this.initPie(sr,ar,name,unit);

    },

    }
</script>
<style scoped>
    .monery{font-size: 3rem;color:#1DB5EF;text-align: center;height: 9rem;line-height: 12rem}
    .title{font-size: 1.4rem;text-align: center;height: 4rem}
</style>
