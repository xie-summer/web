=<template>
    <div v-if="show()" ref="accurate">
        <el-row>
            <el-col style="width: 341px;margin-left: 3rem" >
                <div class="outTitle backs" >
                    <div class="accTime">{{data.date1}}</div>
                    <el-tooltip class="item" effect="dark" content=" 偏差 =（月累积产量 - 月累积入库量）/ 月累积产量" placement="top-end">
                        <svg class="icon" aria-hidden="true"style="width: 1.5rem;height: 1.5rem;float: right;color: #ffffff">
                            <use xlink:href="#el-icon-erp-wenhao"></use>
                        </svg>
                    </el-tooltip>
                    <div class="number">{{data.deviation1|numWipe}}%</div>
                    <div class="numberText">偏差</div>
                </div>
                <div  class="outTitle yinying">
                    <el-col :span="12"style="border-right: 1px solid #c7c7c7">
                        <div class="countT">{{data.value1|numWipe}}吨</div>
                        <div class="consume threeFontColor">{{data.text1}}</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="countT">{{data.value2|numWipe}}吨</div>
                        <div class="consume threeFontColor">{{data.text2}}</div>
                    </el-col>
                </div>
            </el-col>
            <el-col  style="margin-top: 2.5rem;width: 341px;margin-left: 3rem">
                <div class="outTitle backs backss" >
                    <div class="accTime">{{data.date2}}</div>
                    <el-tooltip class="item" effect="dark" content=" 偏差 =（月总计产量 - 月总计入库量）/ 月总计产量" placement="top-end">
                        <svg class="icon" aria-hidden="true"style="width: 1.5rem;height: 1.5rem;float: right">
                            <use xlink:href="#el-icon-erp-wenhao"></use>
                        </svg>
                    </el-tooltip>
                    <div class="number">{{data.deviation2|numWipe}}%</div>
                    <div class="numberText">偏差</div>
                </div>
                <div  class="outTitle yinying">
                    <el-col :span="12"style="border-right: 1px solid #c7c7c7">
                        <div class="countT">{{data.value3|numWipe}}吨</div>
                        <div class="consume threeFontColor">{{data.text3}}</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="countT">{{data.value4|numWipe}}吨</div>
                        <div class="consume">{{data.text4}}</div>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        props: ['curNum','curNumber'],
        data () {
        return {
            data:this.curNumber,

        }
    },
    methods:{
        show:function(){
            return !this.curNum;
          /*  return false;*/
        }
    },
    mounted(){

    },

    }
</script>
<style scoped>
    .accTime{float: left;font-size: 14px;color: white;height: 2rem;line-height: 2rem;padding-left: 1rem}
    .el-icon-warning{float: right;font-size: 1rem;color:#01ACED}
    .number{font-size: 3rem;color: white;float: left;width: 100%;text-align: center;height: 40px}
    .numberText{color: white;font-size: 16px;width: 100%;text-align: center;float: left}
    .countT{font-size: 24px;height: 4.1rem;text-align: center;line-height: 4rem}
    .consume{font-size: 16px;text-align: center;line-height: 0.5rem}
    .outTitle{width: 100% ;height: 8.2rem;display: inline-block;}
    .yinying{box-shadow: 0px 3px #E5E5E5; height: 73px}
    .backs{background-color: #0082e6;padding-top: 0rem}
    .backss{background-color: #3B5898;}
    .item {
        margin: 4px;
    }



</style>
