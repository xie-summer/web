=<template>
    <div>
      <el-row>
          <el-col :md="24" :sm="24" :xs="24">
              <div class="outTitle backs" >
                  <div class="accTime">2017-02-02</div>
                  <el-tooltip class="item" effect="dark" content=" 提示文字" placement="top-end">
                      <div class="el-icon-warning"></div>
                  </el-tooltip>
                  <div class="number">-10%</div>
                  <div class="numberText">偏差</div>
              </div>
              <div  class="outTitle">
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
        data () {
        return {}
    },
    methods:{

    },
    mounted(){

    }
    }
</script>
<style scoped>
.accTime{float: left;font-size: 1.6rem;color: white;height: 2.5rem;line-height: 2.5rem;padding-left: 1rem}
.el-icon-warning{float: right;font-size: 1rem;color:#01ACED}
.number{font-size: 3.6rem;color: white;float: left;width: 100%;text-align: center}
.numberText{color: white;font-size: 1.6rem;width: 100%;text-align: center;float: left}
.countT{font-size: 2.4rem;height: 4.1rem;text-align: center;line-height: 5rem}
.consume{font-size: 1.6rem;text-align: center;}
.outTitle{width: 30rem ;height: 8.2rem;display: inline-block;margin-left: 10rem;padding-top: 1rem}
.backs{background-color: #0082e6;padding-top: 0rem}
    .item {
        margin: 4px;
    }



</style>
