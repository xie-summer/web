=<template>
    <div v-if="show()">
      <el-row>
          <el-col :md="16" :sm="24" :xs="24">
              <div class="outTitle backs" >
                  <div class="accTime">2017-02-02</div>
                  <el-tooltip class="item" effect="dark" content=" 提示文字" placement="top-end">
                      <svg class="icon" aria-hidden="true"style="width: 1.5rem;height: 1.5rem;float: right">
                          <use xlink:href="#el-icon-erp-wenhao"></use>
                      </svg>
                  </el-tooltip>
                  <div class="number">-10%</div>
                  <div class="numberText">偏差</div>
              </div>
              <div  class="outTitle yinying">
                  <el-col :span="12"style="border-right: 1px solid #888888">
                      <div class="countT">246.96吨</div>
                      <div class="consume">月累积消耗量</div>
                  </el-col>
                  <el-col :span="12">
                      <div class="countT">246.96吨</div>
                      <div class="consume">月累积消耗量</div>
                  </el-col>
              </div>
          </el-col>
          <el-col :md="16" :sm="24" :xs="24" style="margin-top: 0.5rem">
              <div class="outTitle backs backss" >
                  <div class="accTime">2017-02-02</div>
                  <el-tooltip class="item" effect="dark" content=" 提示文字" placement="top-end">
                      <svg class="icon" aria-hidden="true"style="width: 1.5rem;height: 1.5rem;float: right">
                          <use xlink:href="#el-icon-erp-wenhao"></use>
                      </svg>
                  </el-tooltip>
                  <div class="number">-10%</div>
                  <div class="numberText">偏差</div>
              </div>
              <div  class="outTitle yinying">
                  <el-col :span="12"style="border-right: 1px solid #888888">
                      <div class="countT">246.96吨</div>
                      <div class="consume">月累积消耗量</div>
                  </el-col>
                  <el-col :span="12">
                      <div class="countT">246.96吨</div>
                      <div class="consume">月累积消耗量</div>
                  </el-col>
              </div>
          </el-col>
      </el-row>
    </div>
</template>

<script>

    export default {
        props: ['curNum'],
        data () {
        return {

        }
    },
    methods:{
        show:function(){
            return !this.curNum;
        }
    },
    mounted(){

    }
    }
</script>
<style scoped>
    @media screen and (max-width: 1367px) {
     .outTitle{width: 27rem ;height: 8.2rem;display: inline-block;margin-left: 3rem;padding-top: 1rem;}
    }
.accTime{float: left;font-size: 1.6rem;color: white;height: 2.5rem;line-height: 2.5rem;padding-left: 1rem}
.el-icon-warning{float: right;font-size: 1rem;color:#01ACED}
.number{font-size: 3.6rem;color: white;float: left;width: 100%;text-align: center}
.numberText{color: white;font-size: 1.6rem;width: 100%;text-align: center;float: left}
.countT{font-size: 2.4rem;height: 4.1rem;text-align: center;line-height: 5rem}
.consume{font-size: 1.6rem;text-align: center;}
.outTitle{width: 100% ;height: 8.2rem;display: inline-block;margin-left: 10rem;padding-top: 1rem;}
.yinying{box-shadow: 0px 3px #E5E5E5;}
.backs{background-color: #0082e6;padding-top: 0rem}
    .backss{background-color: #3B5898;}
    .item {
        margin: 4px;
    }



</style>
