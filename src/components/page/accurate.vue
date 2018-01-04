=<template>
    <div v-if="show()" ref="accurate">
        <el-row>
            <el-col :span="23" >
                <div class="outTitle backs" >
                    <div class="accTime">{{data.date1}}</div>
                    <el-tooltip class="item" effect="dark" content=" 提示文字" placement="top-end">
                        <svg class="icon" aria-hidden="true"style="width: 1.5rem;height: 1.5rem;float: right">
                            <use xlink:href="#el-icon-erp-wenhao"></use>
                        </svg>
                    </el-tooltip>
                    <div class="number">{{data.deviation1|numWipe}}%</div>
                    <div class="numberText">偏差</div>
                </div>
                <div  class="outTitle yinying">
                    <el-col :span="12"style="border-right: 1px solid #c7c7c7">
                        <div class="countT">{{data.value1|numWipe}}吨</div>
                        <div class="consume">{{data.text1}}</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="countT">{{data.value2|numWipe}}吨</div>
                        <div class="consume">{{data.text2}}</div>
                    </el-col>
                </div>
            </el-col>
            <el-col :span="23"  style="margin-top: 0.5rem">
                <div class="outTitle backs backss" >
                    <div class="accTime">{{data.date2}}</div>
                    <el-tooltip class="item" effect="dark" content=" 提示文字" placement="top-end">
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
                        <div class="consume">{{data.text3}}</div>
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
        }
    },
    mounted(){

    },

    }
</script>
<style scoped>
    .accTime{float: left;font-size: 2rem;color: white;height: 2.5rem;line-height: 2.5rem;padding-left: 1rem}
    .el-icon-warning{float: right;font-size: 1rem;color:#01ACED}
    .number{font-size: 3.6rem;color: white;float: left;width: 100%;text-align: center}
    .numberText{color: white;font-size: 1.6rem;width: 100%;text-align: center;float: left}
    .countT{font-size: 2rem;height: 4.1rem;text-align: center;line-height: 5rem}
    .consume{font-size: 1.4rem;text-align: center;}
    .outTitle{width: 100% ;height: 9rem;display: inline-block;padding-top: 1rem;}
    .yinying{box-shadow: 0px 3px #E5E5E5; height: 7rem}
    .backs{background-color: #0082e6;padding-top: 0rem}
    .backss{background-color: #3B5898;}
    .item {
        margin: 4px;
    }



</style>
