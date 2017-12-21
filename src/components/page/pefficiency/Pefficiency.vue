<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 人员效率监控</el-breadcrumb-item>
                <el-breadcrumb-item>生产人员效率</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row style="min-width: 1059px;margin-bottom: 3rem">
            <el-col :span="5" :offset="17"class="enter">
                    <el-date-picker
                        @change="(value) => changeHandler(value)"
                        placeholder="请选择时间"
                        type="month"
                        v-model="value6"
                        align="right"
                        :editable="zreo"
                        >
                    </el-date-picker>
                </el-col>
            <el-col :span="24">
                <el-col :span="24">
                    <el-col :span="5" class="production_title">生产效率排名</el-col>

                    <el-col :span="3":offset="14" class="production_regulation">
                        <el-button type="text" @click="open">评分规则?</el-button>
                    </el-col>
                </el-col>
            </el-col>
            <el-col :span="22" :offset="1" style="border-bottom:1px solid #D3D3D3;margin-bottom: 3rem" v-for="(i,value) in fficData" key="value">
                <el-col :span="23">
                    <el-col :span="8" class="grade_height">
                        <el-col :span="8"class="grade_img"></el-col>
                        <el-col :span="8"class="grade_img_content">
                            <el-col :span="24" style="text-align: center;font-size: 3rem;color: red;margin-bottom: 0.5rem">{{i.score}}分</el-col>
                            <el-col :span="24" style="text-align: center">
                                <el-rate
                                    v-model=i.score
                                    disabled

                                    text-color="#ff9900"
                                    score-template="{value}">
                                </el-rate>
                            </el-col>
                            <el-col :span="24" style="margin-top: 1rem;font-size: 1.3rem">
                                <el-col :span="12" style="text-align: right;">班次：</el-col>
                                <el-col :span="12">{{i.classe}}</el-col>
                            </el-col>
                            <el-col :span="24" style="margin-top: 0.5rem;font-size: 1.3rem">
                                <el-col :span="12" style="text-align: right;">班长：</el-col>
                                <el-col :span="12">{{i.monitor}}</el-col>
                            </el-col>
                            <el-col></el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="3"class="grade_height">
                        <div class="grade_title">磷钙产量(吨)</div>
                        <div class="grade_content">{{i.cap}}</div>
                    </el-col>
                    <el-col :span="3"class="grade_height">
                        <div class="grade_title">不合格率(%)</div>
                        <div class="grade_content">{{i.qualified}}</div>
                    </el-col>
                    <el-col :span="3"class="grade_height">
                        <div class="grade_title">磷钙矿耗(吨/吨)</div>
                        <div class="grade_content">{{i.capMine}}</div>
                    </el-col>
                    <el-col :span="4"class="grade_height">
                        <div class="grade_title">磷钙酸耗(立方米/吨)</div>
                        <div class="grade_content">{{i.acpAcid}}</div>
                    </el-col>
                    <el-col :span="3"class="grade_height">
                        <div class="grade_title ">巡检完成率(%)</div>
                        <div class="grade_content ">{{i.percentage}}</div>
                    </el-col>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="production_title">综合评分趋势</el-col>
            <el-col :span="24" >
                <div class="chart" ref="chartGrade" :style="{ height: '30rem',width: '100%'}"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    let echarts=require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        data() {
        return {
            value6: '',
            zreo:false,
            fficData:[
                {score:3.7,classe:"一班",monitor:'王一发',cap:95,qualified:'3%',capMine:14,acpAcid:0.3,percentage:'99%'},
                {score:5,classe:"二班",monitor:'王二发',cap:90,qualified:'10%',capMine:44,acpAcid:0.4,percentage:'95%'},
                {score:4,classe:"三班",monitor:'王三发',cap:74,qualified:'6%',capMine:17,acpAcid:0.7,percentage:'97%'}
            ]

        };
    },

    mounted(){
        this.initGrade();
    },
    methods: {
        changeHandler:function(value){
            this.$message(value)
        },
        open() {
            this.$alert('当然就是没有规则', '评分规则', {
                confirmButtonText: '确定',
                callback: action => {
                this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                });
            }
        });
    },
    initGrade(){
        let chartGrade=echarts.init(this.$refs.chartGrade);
        window.onresize=function(){

            chartGrade.resize();
        }
        chartGrade.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['一班','二班','三班']
            },

            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['8月1号','8月2号','8月3号','8月4号','8月5号','8月6号','8月7号','8月8号','8月9号','8月10号',
                    '8月11号','8月12号','8月13号','8月14号','8月15号','8月16号','8月17号','8月18号','8月19号','8月20号',
                    '8月21号','8月22号','8月23号','8月24号','8月25号','8月26号','8月27号','8月28号','8月29号','8月30号'],

                axisLabel:{
                    interval:0,
                    rotate:-30,
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'一班',
                    type:'line',
                    data:[82, 86, 89, 81, 86, 93, 100,71, 96, 85, 91, 86, 74, 108,112,
                        90, 78, 99, 91, 96, 87, 85,92, 96, 99, 91, 96, 103, 100,115],

                },
                {
                    name:'二班',
                    type:'line',
                    data:[81, 90, 96, 81, 86, 93, 90,81, 90, 96, 81, 86, 93, 90,100,
                        81, 90, 96, 81, 86, 93, 90,81, 90, 96, 81, 86, 93, 90,100],

                },
                {
                    name:'三班',
                    type:'line',
                    data:[92, 96, 99, 91, 96, 103, 100,92, 96, 99, 91, 96, 103, 100,115,
                        92, 96, 99, 91, 96, 103, 100,92, 96, 99, 91, 96, 103, 100,115],

                }
            ],
            color:['#01ACED','#BB4B39','#3B5898']
        })
    }

    }
    };
</script>
<style>
    .el-rate__icon{font-size: 12px}
    .enter{margin-top:2rem;margin-bottom: 2rem;text-align: right}
    .production_title{font-size: 2rem;height: 4rem;line-height: 4rem}
    .production_regulation{font-size: 1.2rem;text-align: right;height: 4rem;line-height: 6rem;margin-bottom: 3rem}
    .grade_height{height: 11rem}
    .grade_title{font-size: 1.3rem;width: 100%;text-align: center;height: 3rem;line-height: 3rem;border-bottom: 1px solid #D3D3D3;border-right: 1px solid #D3D3D3}
    .grade_content{font-size: 3rem;width: 100%;text-align: center;height: 7rem;line-height: 7rem;border-right: 1px solid #D3D3D3;font-weight: 300}
    .grade_img{width: 110px;height: 130px;background-image: url('../../../../static/img/1.jpg');background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;}

</style>
