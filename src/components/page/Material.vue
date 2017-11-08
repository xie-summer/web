<template>
    <div class="back">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 库存</el-breadcrumb-item>
                <el-breadcrumb-item>原料库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;box-shadow: 5px 5px 3px #888888;">
            <el-col :md="24" :xs="24":sm="24" class="bigTitle">实时库存</el-col>
            <el-col :md="12" style="border-right: solid 1px #888888">
                <el-col :md="24" :xs="24":sm="24" class="title">库存状态</el-col>
                <el-col :md="12" :sm="24" :xs="24" style="flex-flow: 1">
                    <v-pone></v-pone>
                </el-col>
                <el-col :md="12" :sm="24" :xs="24" style="flex-flow: 1">
                    <v-gauge></v-gauge>
                </el-col>
            </el-col>
            <el-col :md="12">
                <el-col :md="24" :xs="24" :sm="24" class="title">7日内采购订单到货</el-col>
            </el-col>
        </div>
        <div  style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #888888;">
            <el-col :md="24" :xs="24":sm="24" class="solidTitle">实时库存</el-col>
            <el-col :md="16" :xs="24" :sm="24">
                <v-line :child-msg="msg"></v-line>
            </el-col>
            <el-col :md="8" :sm="24" :xs="24">
                <v-accurate></v-accurate>
            </el-col>
        </div>
        <div style="display: -webkit-flex;flex-direction:row ; flex-wrap:wrap;width: 100%;margin-top: 3rem;box-shadow: 5px 5px 3px #888888;">

            <el-col :md="24" :xs="24":sm="24"class="solidTitle">原料质检</el-col>
            <el-col :md="12":xs="24":sm="24">
                <v-percentage></v-percentage>
            </el-col>
        </div>
    </div>

</template>

<script>
    import vPone from './PublicOne.vue';
    import vGauge from './OldCharts.vue';
    import vLine from './classThree.vue';
    import vAccurate from './accurate.vue';
    import vPercentage from './percentage.vue';
    import {formatDate} from './../../../static/js/dateFormat.js'

    export default {
        components:{
            vPone,vGauge,vLine,vAccurate,vPercentage
        },

        data: function(){

            return {
                title:'库存状态',
                msg:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',],
            }
        },

    methods: {

        }

    }
</script>

<style scoped>
    .bigTitle{font-size: 2.4rem;height: 3rem;border-bottom: solid 1px #5e7382}
    .title{font-size: 2rem;color: #000000;padding-left: 2rem}
    .solidTitle{font-size: 2.4rem;height: 3rem;}
</style>
